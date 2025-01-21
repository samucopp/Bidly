import jwt from "jsonwebtoken";
import Auction from "../models/auctionModel.js";
import Bid from "../models/bidModel.js";
import Notification from "../models/notificationModel.js";

function checkAuthorization(req, res, next) {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ message: "No autorizado" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        const userIdFromParams = req.params.userId;
        if (userIdFromParams && userIdFromParams !== decoded.userId) {
            return res.status(403).json({ message: "No tienes permisos" });
        }
        next();
    } catch (error) {
        console.error(error);
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
        const { auctionId } = req.params;
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

function checkBidOwnership(req, res, next) {
    try {
        const { bidId } = req.params;
        const userId = req.user.id;

        Bid.findById(bidId)
            .then(bid => {
                if (!bid) {
                    return res.status(404).json({ message: "Puja no encontrada." });
                }
                if (bid.userId.toString() !== userId.toString()) {
                    return res.status(403).json({ message: "No tienes permiso para editar esta puja." });
                }
                next();
            })
            .catch(error => {
                return res.status(500).json({ message: "Error al verificar la puja.", error: error.message });
            });
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor.", error: error.message });
    }
}

async function checkNotificationOwnership(req, res, next) {
    try {
        const { notificationId } = req.params;
        const userId = req.user.id;
        console.log(userId, notificationId);
        const notification = await Notification.findById(notificationId);
        if (!notification) {
            return res.status(404).json({ message: "Notificación no encontrada." });
        }

        if (notification.userId.toString() !== userId.toString()) {
            return res.status(403).json({ message: "No tienes permiso para realizar esta acción." });
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: "Error al verificar la notificación", error: error.message });
    }
}

async function checkUserNotificationsOwnership(req, res, next) {
    try {
        const { userId } = req.params;
        const authenticatedUserId = req.user.id;

        if (userId !== authenticatedUserId) {
            return res.status(403).json({ message: "No tienes permiso para acceder a las notificaciones de otro usuario." });
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: "Error al verificar la propiedad de las notificaciones", error: error.message });
    }
}

export {
    checkAuthorization,
    checkAuctionOwnership,
    checkBidOwnership,
    checkNotificationOwnership,
    checkUserNotificationsOwnership
};