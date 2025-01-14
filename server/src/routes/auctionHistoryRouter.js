import { Router } from "express";
import auctionHistoryController from "../controllers/auctionHistoryController.js";
const router = Router();

router.get("/all", auctionHistoryController.getAll);
router.get("/auction/:auctionId", auctionHistoryController.getByAuctionId);
router.get("/owner/:ownerId", auctionHistoryController.getByOwnerId);
router.get("/winner/:winnerId", auctionHistoryController.getByWinnerId);

router.post("/add", auctionHistoryController.create);
router.post("/update/:auctionId", auctionHistoryController.update);
router.delete("/delete/:auctionId", auctionHistoryController.remove);

export default router;
