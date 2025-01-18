import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import router from "./routes/router.js";
import cron from "node-cron";
import auctionController from "./controllers/auctionController.js";
import cors from "cors";
dotenv.config();

const PORT = 3000;

const app = express(); // crear servidor

app.use(express.static("src/public")); // configurar directorio de archivos estáticos
app.use(express.urlencoded({ extended: true })); // configurar body parser para recibir datos de formularios
app.use(express.json()); // configurar body parser para recibir datos en formato json
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

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
