import User from "../models/userModel.js";

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
    getUser,
};
