import { Router } from "express";
import categoryController from "../controllers/categoryController.js";
const router = Router();

router.get("/all", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategory);
router.post("/add", categoryController.addCategory);
router.delete("/delete/:id", categoryController.deleteCategory);

export default router;
