import mongoose from "mongoose";

const CategoryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Category = mongoose.model("Category", CategoryModel);

export default Category;
