import { Router } from "express";
import multer from "multer";
import fileUploadController from "../controllers/uploadFilesController.js";

const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === "image") {
        cb(null, true);
    } else {
        cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
    }
};
const uploadAuctions = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5, files: 10 },
});
const uploadUserAvatar = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5, files: 1 },
});

const router = Router();

router.post(
    "/auctionImages/:auctionId",
    uploadAuctions.array("file", 10),
    fileUploadController.uploadAuctionImages
);

router.delete(
    "/auctionImages/:auctionId",
    fileUploadController.deleteAuctionImage
);

router.post(
    "/profileAvatar/:userId",
    uploadUserAvatar.array("file", 1),
    fileUploadController.uploadProfileAvatar
);

router.delete(
    "/profileAvatar/:userId",
    fileUploadController.deleteUserAvatar
);

export default router;
