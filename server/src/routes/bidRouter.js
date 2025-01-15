import { Router } from "express";
import bidController from "../controllers/bidController.js";

const router = Router();

router.post('/create', bidController.createBid);
router.get('/:auctionId', bidController.getBidsByAuction);
router.delete('/delete/:id', bidController.deleteBid);

export default router;