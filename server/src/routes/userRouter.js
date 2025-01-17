import { Router } from "express";
import userController from "../controllers/userController.js";
import authController from "../controllers/authController.js";
const router = Router();

router.post("/register", authController.register);
router.get("/login", authController.login);
router.get("/all", userController.getAll);
router.get("/:id", userController.getUser);
router.put("/favorites/add", userController.addAuctionToFavorites);
router.put("/favorites/remove", userController.removeAuctionFromFavorites);

export default router;
