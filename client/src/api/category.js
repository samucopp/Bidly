import { apiRequest } from "./apiRequest";

async function getAllCategories() {
    try {
        const response = await apiRequest("/category/all", "GET");
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("Error al obtener todas las categorías:", error);
        throw new Error("Error al obtener todas las categorías");
    }
}

async function getCategory(categoryId) {
    try {
        const response = await apiRequest(`/category/${categoryId}`, "GET");
        console.log("response", response);
        return response;
    } catch (error) {
        console.error("Error al obtener la categoría:", error);
        throw new Error("Error al obtener la categoría");
    }
}

export { getAllCategories, getCategory };
