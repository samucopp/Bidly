import { Router } from "express";
import notificationController from "../controllers/notificationController.js";

const router = Router();

router.get("/:userId", notificationController.getUserNotifications);
router.post("/create", notificationController.createNotification);
router.put("/read/:id", notificationController.markNotificationAsRead);
router.put("/read/:userId", notificationController.markAllNotificationsAsRead);
router.delete("/delete/:id", notificationController.deleteNotification);