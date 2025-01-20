import { BASE_URL } from "../const/api";

export const login = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        });
        console.log('Respuesta del servidor:', response.status);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error en el inicio de sesión');
        }

        return data;
    } catch (error) {
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error en el registro');
        }

        return data;
    } catch (error) {
        throw error;
    }
};

// Función auxiliar para verificar si el usuario está autenticado
export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

// Función para obtener el token
export const getToken = () => {
    return localStorage.getItem('token');
};

// Función para cerrar sesión
export const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
};

// Función para mostrar errores
export const showError = (message) => {
    console.error(message);
    // Aquí podrías implementar un sistema de notificaciones más elaborado
};