import User from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../config/bcrypt.js";

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

export default {
    register,
    login,
};