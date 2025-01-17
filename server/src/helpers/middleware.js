import jwt from "jsonwebtoken";
import Auction from "../models/auctionModel.js";

function checkAuthorization(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "No autorizado" });
        }
        const tokenValue = token.split(" ")[1];
        const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expirado. Inicia sesión de nuevo." });
        }
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Token inválido." });
        }
        return res.status(500).json({ message: "Error interno del servidor." });
    }
}

function checkAuctionOwnership(req, res, next) {
    try {
        const auctionId = req.params.id;
        const userId = req.user.id;

        Auction.findById(auctionId)
            .then(auction => {
                if (!auction) {
                    return res.status(404).json({ message: "Subasta no encontrada." });
                }
                if (auction.sellerId.toString() !== userId.toString()) {
                    return res.status(403).json({ message: "No tienes permiso para editar esta subasta." });
                }
                next();
            })
            .catch(error => {
                return res.status(500).json({ message: "Error al verificar la subasta.", error: error.message });
            });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor.", error: error.message });
    }
}

export {
    checkAuthorization,
    checkAuctionOwnership,
};