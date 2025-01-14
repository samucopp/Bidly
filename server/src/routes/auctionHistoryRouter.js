import { Router } from "express";
import auctionHistoryController from "../controllers/auctionHistoryController";
const router = Router();

router.get("/", auctionHistoryController.getAll);
router.get("/auction/:auctionId", auctionHistoryController.getByAuctionId);
router.get("/owner/:ownerId", auctionHistoryController.getByOwnerId);
router.get("/winner/:winnerId", auctionHistoryController.getByWinnerId);

export default router;
