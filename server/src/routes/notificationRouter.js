import { Router } from "express";
import notificationController from "../controllers/notificationController.js";
import { checkAuthorization, checkNotificationOwnership, checkUserNotificationsOwnership } from "../helpers/middleware.js";


const router = Router();

router.get("/:userId", checkAuthorization, notificationController.getUserNotifications);
router.post("/create", notificationController.createNotification);
router.put("/read/:notificationId", checkAuthorization, checkNotificationOwnership, notificationController.markNotificationAsRead);
router.put("/read-all/:userId", checkAuthorization, checkUserNotificationsOwnership, notificationController.markAllNotificationsAsRead);
router.delete("/delete/:notificationId", checkAuthorization, checkNotificationOwnership, notificationController.deleteNotification);
router.delete("/delete-all/:userId", checkAuthorization, checkUserNotificationsOwnership, notificationController.deleteAllNotifications);

export default router;