import Notification from "../models/notificationModel.js";

const getUserNotifications = async (req, res) => {
    try {
        const { userId } = req.params;
        const { isRead } = req.query;

        const query = { userId };

        if (isRead !== undefined) {
            query.isRead = isRead === "true";
        }

        const notifications = await Notification.find(query).sort({ createdAt: -1 });
        return res.status(200).json({ succes: true, notifications });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ succes: false, message: "Error al obtener las notificaciones", error });
    }
}

const createNotification = async (req, res) => {
    try {
        const { userId, type, message, data } = req.body;
        const notification = new Notification({ userId, type, message, data });
        await notification.save();
        return res.status(201).json({ succes: true, notification });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ succes: false, message: "Error al crear la notificacion", error });
    }
}

const markNotificationAsRead = async (req, res) => {
    try {
        const { id } = req.params;
        const notification = await Notification.findById(id);
        if (!notification) {
            return res.status(404).json({ succes: false, message: "Notificacion no encontrada" });
        }
        notification.isRead = true;
        await notification.save();
        return res.status(200).json({ succes: true, message: "Notificacion marcada como leida", notification });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ succes: false, message: "Error al actualizar la notificacion", error });
    }
}

const markAllNotificationsAsRead = async (req, res) => {
    try {
        const { userId } = req.params;
        const notifications = await Notification.updateMany({ userId }, { isRead: false }, { $set: { isRead: true } });
        return res.status(200).json({ succes: true, message: "Notificaciones marcadas como leidas", notifications });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ succes: false, message: "Error al actualizar las notificaciones", error });
    }
}

const deleteNotification = async (req, res) => {
    try {
        const { id } = req.params;
        const notification = await Notification.findByIdAndDelete(id);
        if (!notification) {
            return res.status(404).json({ succes: false, message: "Notificacion no encontrada" });
        }
        return res.status(200).json({ succes: true, message: "Notificacion eliminada", notification });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ succes: false, message: "Error al eliminar la notificacion", error });
    }
}

export default {
    getUserNotifications,
    createNotification,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    deleteNotification
}