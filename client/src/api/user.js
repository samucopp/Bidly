import { apiRequest } from "./apiRequest";

async function register(userData) {
    try {
        const response = await apiRequest("/user/register", "POST", userData);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("Error al registrar al usuario:", error);
        throw new Error("Error al registrar al usuario");
    }
}

async function login(userData) {
    try {
        const response = await apiRequest("/user/login", "POST", userData);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw new Error("Error al iniciar sesión");
    }
}

async function logout() {
    try {
        const response = await apiRequest("/user/logout", "POST");
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        throw new Error("Error al cerrar sesión");
    }
}

/* async function getAll() {
    try {
        await apiRequest('/user/all', 'GET');
    } catch (error) {
        console.error('Error al obtener todos los usuarios:', error);
        throw new Error('Error al obtener todos los usuarios');
    }
}; */

async function getUser(userId) {
    try {
        const response = await apiRequest(`/user/${userId}`, "GET");
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        throw new Error("Error al obtener el usuario");
    }
}

async function editUser(userId, userData) {
    try {
        const response = await apiRequest(`/user/${userId}`, "PUT", userData);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("Error al editar el usuario:", error);
        throw new Error("Error al editar el usuario");
    }
}

/* async function deleteUser(userId) {
    try {
        await apiRequest(`/user/${userId}`, 'DELETE');
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw new Error('Error al eliminar el usuario');
    }
}; */

async function addAuctionToFavorites(userId, auctionId) {
    try {
        const response = await apiRequest(`/user/favorites/add`, "PUT", {
            userId,
            auctionId,
        });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("Error al agregar la subasta a favoritos:", error);
        throw new Error("Error al agregar la subasta a favoritos");
    }
}

async function removeAuctionFromFavorites(userId, auctionId) {
    try {
        const response = await apiRequest(`/user/favorites/remove`, "PUT", {
            userId,
            auctionId,
        });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("Error al eliminar la subasta de favoritos:", error);
        throw new Error("Error al eliminar la subasta de favoritos");
    }
}

export {
    register,
    login,
    logout,
    getUser,
    editUser,
    addAuctionToFavorites,
    removeAuctionFromFavorites,
};
