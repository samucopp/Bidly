import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import router from "./routes/router.js";
import cron from "node-cron";
import auctionController from "./controllers/auctionController.js";
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
dotenv.config();

const PORT = 3000;

const app = express(); // crear servidor

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});

const uploadProductImages = multer({
    storage: multerS3({
        s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: "public-read",
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            const { auctionId } = req.params;
            if (!auctionId) {
                return cb(new Error("auctionId es requerido"), null);
            }
            cb(
                null,
                `auctions/${auctionId}/${Date.now()}-${file.originalname}`
            );
        },
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Solo se permiten imágenes"));
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5, // 5MB por archivo
        files: 5, // Máximo 5 archivos
    },
});

const uploadProfileImage = multer({
    storage: multerS3({
        s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: "public-read",
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            const { userId } = req.params;
            if (!userId) {
                return cb(new Error("userId es requerido"), null);
            }
            cb(
                null,
                `users/${userId}/profile-${Date.now()}-${file.originalname}`
            );
        },
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Solo se permiten imágenes"));
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5, // 5MB por archivo
        files: 1, // Máximo 1 archivo
    },
});

app.use(express.static("src/public")); // configurar directorio de archivos estáticos
app.use(express.urlencoded({ extended: true })); // configurar body parser para recibir datos de formularios
app.use(express.json()); // configurar body parser para recibir datos en formato json

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/", router); // configurar rutas

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         const dateNow =
//         cb(null, Date.now() + "-" + file.originalname);
//     },
// });
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === "image") {
        cb(null, true);
    } else {
        cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
    }
};
const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5, files: 2 },
});
app.post("/upload", upload.array("file", 5), (req, res) => {
    res.status(200).json({ message: "Imagen subida" });
});

// app.post(
//     "/upload/products/:auctionId",
//     uploadProductImages.array("file", 5),
//     (req, res) => {
//         const fileUrls = req.files.map((file) => file.location);
//         res.status(200).json({
//             message: "Imágenes subidas con éxito",
//             files: fileUrls,
//         });
//     }
// );
// app.post(
//     "/upload/profile/:userId",
//     uploadProfileImage.single("file"),
//     (req, res) => {
//         res.status(200).json({
//             message: "Foto de perfil subida con éxito",
//             file: req.file.location,
//         });
//     }
// );

cron.schedule("* * * * *", async () => {
    console.log("Ejecutando tareas automatizadas...");
    await auctionController.activateAuctions({});
});

cron.schedule("* * * * *", async () => {
    console.log("Ejecutando tareas automatizadas...");
    await auctionController.closeAuctions({});
});

async function startServer() {
    await connectDb();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();
