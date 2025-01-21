import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

async function register(req, res) {
    try {
        const { name, email, password, passwordRepeat, address } = req.body;
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
            password,
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
    console.log('Recibida petición de login:', {
        method: req.method,
        body: req.body,
        path: req.path
    });
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
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({
                message: "La contraseña es incorrecta",
            });
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
        });
        return res.status(200).json({ message: "El token se ha creado satisfactoriamente en una cookie", userInfo: { userId: user._id, userName: user.name, userEmail: user.email } });
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