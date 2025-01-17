import { Router } from "express";
import userController from "../controllers/userController.js";
import authController from "../controllers/authController.js";
import { checkAuthorization } from "../helpers/middleware.js";

const router = Router();

router.post("/register", authController.register);
router.get("/login", authController.login);
router.get("/all", userController.getAll);
router.get("/:userId", userController.getUser);
router.put("/favorites/add", checkAuthorization, userController.addAuctionToFavorites);
router.put("/favorites/remove", checkAuthorization, userController.removeAuctionFromFavorites);

export default router;
