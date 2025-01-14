import { Router } from "express";
import bidController from "../controllers/bidController.js";

const router = Router();

router.post('/bid', bidController.createBid);
router.get('/bid/:auctionId', bidController.getBidsByAuction);
router.delete('/bid/:id', bidController.deleteBid);

export default router;