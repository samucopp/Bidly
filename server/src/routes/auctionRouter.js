import { Router } from "express";
import auctionController from "../controllers/auctionController.js";

const router = Router();

router.post('/auction', auctionController.createAuction);
router.get('/auction', auctionController.getActiveAuctions);
router.get('/auction/:id', auctionController.getAuctionById);
router.put('/auction/:id', auctionController.updateAuction);
router.delete('/auction/:id', auctionController.deleteAuction);

export default router;