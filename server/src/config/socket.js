import { Server as socketIo } from "socket.io";
import Auction from "../models/auctionModel.js";
import bidController from "../controllers/bidController.js";
import userController from "../controllers/userController.js";
export function startSocket(server) {
    const io = new socketIo(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });
    const users = new Map();

    io.on("connection", (socket) => {
        console.log("socket conectado con id:" + socket.id);
        socket.on("register-socket", (userId) => {
            console.log(
                `usuario con id ${userId} conectado con el socket ${socket.id}`
            );
            users.set(userId, socket.id);
            console.log(users);
            io.emit("connected-users", Array.from(users.keys()));
        });
        // Unirse a una sala específica de la subasta
        socket.on("join-auction", async (auctionId) => {
            console.log(
                `Usuario ${socket.id} se unió a la subasta ${auctionId}`
            );
            socket.join(auctionId);
        });

        // Salir de una sala específica de la subasta
        socket.on("leave-auction", (auctionId) => {
            console.log(
                `Usuario ${socket.id} salió de la subasta ${auctionId}`
            );
            socket.leave(auctionId); // Dejar la sala
        });

        // Manejar una nueva puja
        socket.on("place-bid", async ({ auctionId, userId, bidAmount }) => {
            try {
                console.log(
                    `Nueva puja en subasta ${auctionId}: ${bidAmount} por ${userId}`
                );

                const { savedBid, minAllowed } = await bidController.addBid(
                    auctionId,
                    userId,
                    bidAmount
                );
                const { name } = await userController.getUserData(userId);
                // Emitir el evento a todos los usuarios en la sala de la subasta
                io.to(auctionId).emit("new-bid", {
                    userId,
                    userName: name,
                    bidId: savedBid._id,
                    bidAmount: savedBid.amount,
                    bidTime: savedBid.createdAt,
                    minAllowed,
                    createdAt: savedBid.createdAt,
                });
            } catch (error) {
                console.error("Error al procesar la puja:", error);

                // Notificar al cliente sobre el error
                socket.emit("bid-error", {
                    message:
                        "Hubo un problema al procesar tu puja. Inténtalo de nuevo.",
                });
            }
        });
        socket.on("send-notification", ({ receiverId }) => {
            const receiverSocketId = users.get(receiverId);
            io.to(receiverSocketId).emit("send-notification", null);
        });
        socket.on("disconnect", () => {
            console.log("socket desconectado con id:" + socket.id);
            users.forEach((value, key) => {
                if (value === socket.id) {
                    return users.delete(key);
                }
            });
        });
    });
    function emitToUser(userId, event, data) {
        const socketId = users.get(userId.toString());
        console.log("emitiendo mensaje", userId, socketId, event, data);
        if (!socketId) {
            return false;
        }
        io.to(socketId).emit(event, data);
        return true;
    }
    return { io, emitToUser };
}

export default startSocket;
