import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import router from "./routes/router.js";
import cron from "node-cron";
import auctionController from "./controllers/auctionController.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = 3000;
const CLIENT_URL = process.env.CLIENT_URL;

const corsOptions = {
    origin: CLIENT_URL,
    credentials: true,
};

const app = express(); // crear servidor

app.use(express.static("src/public")); // configurar directorio de archivos estáticos
app.use(express.urlencoded({ extended: true })); // configurar body parser para recibir datos de formularios
app.use(express.json()); // configurar body parser para recibir datos en formato json
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/", router); // configurar rutas

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