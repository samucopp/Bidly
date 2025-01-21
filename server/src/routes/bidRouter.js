import { Router } from "express";
import bidController from "../controllers/bidController.js";
import { checkAuthorization, checkBidOwnership } from "../helpers/middleware.js";


const router = Router();

router.post('/create', checkAuthorization, bidController.createBid);
router.get('/:auctionId'/*, checkAuthorization*/, bidController.getBidsByAuction);
router.delete('/delete/:bidId', checkAuthorization, checkBidOwnership, bidController.deleteBid);

export default router;