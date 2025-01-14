import { Router } from "express";
import userController from "../controllers/userController.js";
const router = Router();

router.post("/register", userController.register);
router.get("/login", userController.login);
router.post('/favorites', userController.addAuctionToFavorites);
router.get("/:id", userController.getUser);

export default router;
