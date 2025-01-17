import User from "../models/userModel.js";
import Auction from "../models/auctionModel.js";
import { hashPassword, verifyPassword } from "../config/bcrypt.js";

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

async function register(req, res) {
    try {
        const { name, email, password, passwordRepeat, address } = req.body;
        const hash = await hashPassword(password);
        if (!hash) {
            return res.status(400).json({
                message: "Error al hashear la contraseña",
            });
        }
        if (password !== passwordRepeat) {
            return res.status(400).json({
                message: "Las contraseñas no coinciden",
            });
        }
        const oldUser = await User.findOne({ email: email });
        if (oldUser) {
            return res.status(400).json({
                message: "El correo ya esta registrado",
            });
        }
        const user = await User.create({
            name,
            email,
            password: hash,
            address,
        });
        return res.status(201).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Faltan datos",
            });
        }
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                message: "El correo no esta registrado",
            });
        }
        const isMatch = await verifyPassword(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "La contraseña es incorrecta",
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

async function getUser(req, res) {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
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
    register,
    login,
    getUser,
    addAuctionToFavorites,
    removeAuctionFromFavorites,
};
