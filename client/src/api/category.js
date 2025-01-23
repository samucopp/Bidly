import { apiRequest } from './apiRequest';

async function getAllCategories() {
    try {
        const response = await apiRequest('/category/all', 'GET');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener todas las categorías:', error);
        throw new Error('Error al obtener todas las categorías');
    }
};

async function getCategory(categoryId) {
    try {
        const response = await apiRequest(`/category/${categoryId}`, 'GET');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener la categoría:', error);
        throw new Error('Error al obtener la categoría');
    }
};

/* async function addCategory(name) {
    try {
        await apiRequest('/category/create', 'POST', { name });
    } catch (error) {
        console.error('Error al crear la categoría:', error);
        throw new Error('Error al crear la categoría');
    }
}; */

/* async function deleteCategory(categoryId) {
    try {
        await apiRequest(`/category/delete/${categoryId}`, 'DELETE');
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
        throw new Error('Error al eliminar la categoría');
    }
}; */

export {
    getAllCategories,
    getCategory
}