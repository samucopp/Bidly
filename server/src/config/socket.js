import { Server as socketIo } from "socket.io";
import Auction from "../models/auctionModel.js";

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
            socket.join(auctionId);
            console.log(
                `Usuario ${socket.id} se unió a la subasta ${auctionId}`
            );
        });

        // Manejar una nueva puja
        socket.on(
            "place-bid",
            async ({
                auctionId,
                userId,
                username,
                bidAmount,
                bidTime,
                minAllowed,
            }) => {
                console.log(
                    `Nueva puja en subasta ${auctionId}: ${bidAmount} por ${userId}`
                );

                io.to(auctionId).emit("place-bid", {
                    userId: userId,
                    username: username,
                    bidAmount: bidAmount,
                    bidTime: bidTime,
                    minAllowed: minAllowed,
                });
            }
        );
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
