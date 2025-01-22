import Category from "../models/categoryModel.js";

async function getAllCategories(req, res) {
    try {
        const categories = await Category.find();
        return res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}

async function getCategory(req, res) {
    try {
        const { categoryId } = req.params;
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({
                message: "Categoría no encontrada",
            });
        }
        return res.status(200).json(category);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}

async function addCategory(req, res) {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                message: "Faltan datos",
            });
        }
        const categoryExists = await Category.findOne({ name });
        if (categoryExists) {
            return res.status(400).json({
                message: "Categoría ya existente",
            });
        }
        const category = new Category({ name });
        await category.save();
        return res.status(201).json(category);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}
async function deleteCategory(req, res) {
    try {
        const { categoryId } = req.params;
        const category = await Category.findByIdAndDelete(categoryId);
        if (!category) {
            return res.status(404).json({
                message: "Categoría no encontrada",
            });
        }
        return res.status(204).json({
            message: "Categoría eliminada del servidor correctamente",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}

export default {
    getAllCategories,
    getCategory,
    addCategory,
    deleteCategory,
};
