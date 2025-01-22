import { apiRequest } from './apiRequest';

async function getUserNotifications(userId) {
    try {
        const response = await apiRequest(`/notification/${userId}`, 'GET');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener las notificaciones:', error);
        throw new Error('Error al obtener las notificaciones');
    }
};

/* async function createNotification(userId, type, message, data) {
    try {
        const response = await apiRequest('/notification/create', 'POST', { userId, type, message, data });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al crear la notificación:', error);
        throw new Error('Error al crear la notificación');
    }
}; */

async function markNotificationAsRead(notificationId) {
    try {
        const response = await apiRequest(`/notification/read/${notificationId}`, 'PUT');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al marcar la notificación como leída:', error);
        throw new Error('Error al marcar la notificación como leída');
    }
};

async function markAllNotificationsAsRead(userId) {
    try {
        const response = await apiRequest(`/notification/read-all/${userId}`, 'PUT');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al marcar todas las notificaciones como leídas:', error);
        throw new Error('Error al marcar todas las notificaciones como leídas');
    }
};

async function deleteNotification(notificationId) {
    try {
        const response = await apiRequest(`/notification/delete/${notificationId}`, 'DELETE');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al eliminar la notificación:', error);
        throw new Error('Error al eliminar la notificación');
    }
};

async function deleteAllNotifications(userId) {
    try {
        const response = await apiRequest(`/notification/delete-all/${userId}`, 'DELETE');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al eliminar todas las notificaciones:', error);
        throw new Error('Error al eliminar todas las notificaciones');
    }
};

export {
    getUserNotifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    deleteNotification,
    deleteAllNotifications
}