import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import router from "./routes/router.js";
import cron from "node-cron";
import auctionController from "./controllers/auctionController.js";
import cors from "cors";
import { createServer } from "http";
import startSocket from "./config/socket.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express(); // crear servidor
app.use(express.static("src/public")); // configurar directorio de archivos estáticos
app.use(express.urlencoded({ extended: true })); // configurar body parser para recibir datos de formularios
app.use(express.json()); // configurar body parser para recibir datos en formato json
app.use(cors());

const httpServer = createServer(app);
const { io, emitToUser } = startSocket(httpServer);

// Router
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/", router); // configurar rutas
app.use((req, res, next) => {
    req.io = io;
    req.emitToUser = emitToUser;
    next();
});

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
    httpServer.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();
