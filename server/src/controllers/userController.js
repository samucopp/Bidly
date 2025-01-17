import User from "../models/userModel.js";
import Auction from "../models/auctionModel.js";

async function getAll(req, res) {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}

async function getUser(req, res) {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                message: "Usuario no encontrado",
            });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}

async function addAuctionToFavorites(req, res) {
    try {
        const { userId, auctionId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "Usuario no encontrado" });
        }
        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res
                .status(404)
                .json({ success: false, message: "Subasta no encontrada" });
        }

        if (!user.favoriteAuctions.includes(auctionId)) {
            user.favoriteAuctions.push(auctionId);
            await user.save();
        } else {
            return res.status(400).json({
                success: false,
                message: "La subasta ya estaba en favoritos",
            });
        }

        if (!auction.followers.includes(userId)) {
            auction.followers.push(userId);
            await auction.save();
        } else {
            return res.status(400).json({
                success: false,
                message: "La subasta ya contenia en seguidores al usuario",
            });
        }

        return res.status(200).json({
            success: true,
            message:
                "Subasta agregada a favoritos y usuario agregado a seguidores",
        });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ success: false, message: "Error interno del servidor" });
    }
}

async function removeAuctionFromFavorites(req, res) {
    try {
        const { userId, auctionId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "Usuario no encontrado" });
        }
        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res
                .status(404)
                .json({ success: false, message: "Subasta no encontrada" });
        }

        if (user.favoriteAuctions.includes(auctionId)) {
            user.favoriteAuctions.pull(auctionId);
            await user.save();
        } else {
            return res.status(400).json({
                success: false,
                message: "La subasta no estaba en favoritos",
            });
        }

        if (auction.followers.includes(userId)) {
            auction.followers.pull(userId);
            await auction.save();
        } else {
            return res.status(400).json({
                success: false,
                message: "El usuario no era seguidor de la subasta",
            });
        }

        return res.status(200).json({
            success: true,
            message:
                "Subasta borrada de favoritos y usuario borrado de seguidores",
        });
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ success: false, message: "Error interno del servidor" });
    }
}

export default {
    getAll,
    getUser,
    addAuctionToFavorites,
    removeAuctionFromFavorites,
};