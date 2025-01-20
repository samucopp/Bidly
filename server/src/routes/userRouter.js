import { Router } from "express";
import userController from "../controllers/userController.js";
import authController from "../controllers/authController.js";
import { checkAuthorization } from "../helpers/middleware.js";

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/all", checkAuthorization, userController.getAll);
router.get("/:userId", checkAuthorization, userController.getUser);
router.put("/:userId", checkAuthorization, userController.editUser);
router.put("/favorites/add", checkAuthorization, userController.addAuctionToFavorites);
router.put("/favorites/remove", checkAuthorization, userController.removeAuctionFromFavorites);

export default router;
