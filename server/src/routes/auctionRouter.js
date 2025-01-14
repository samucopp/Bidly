import { Router } from "express";
import auctionController from "../controllers/auctionController.js";

const router = Router();

router.post('/create', auctionController.createAuction);
router.get('/', auctionController.getActiveAuctions);
router.get('/:id', auctionController.getAuctionById);
router.put('/update/:id', auctionController.updateAuction);
router.delete('/delete/:id', auctionController.deleteAuction);

export default router;