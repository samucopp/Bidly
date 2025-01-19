import { Router } from "express";
import auctionController from "../controllers/auctionController.js";
import { checkAuthorization, checkAuctionOwnership } from "../helpers/middleware.js";

const router = Router();

router.post("/create", checkAuthorization, auctionController.createAuction);
router.get("/search", auctionController.searchAuctions);
router.get("/", auctionController.getAuctions);
router.get("/:categoryId", auctionController.getAuctionsByCategory);
router.get("/active", auctionController.getActiveAuctions);
router.get("/:auctionId", auctionController.getAuctionById);
router.put("/update/:auctionId", checkAuthorization, checkAuctionOwnership, auctionController.updateAuction);
router.put("/activate", auctionController.activateAuctions);
router.put("/close", auctionController.closeAuctions);
router.delete("/delete/:auctionId", checkAuthorization, checkAuctionOwnership, auctionController.deleteAuction);
router.get("/user/:userId/participated", checkAuthorization, auctionController.getAuctionsWhereBidDone);
router.get("/user/:userId/finished-participated", checkAuthorization, auctionController.getFinishedAuctionsWhereBidDone);
router.get("/user/:userId/owner", checkAuthorization, auctionController.getAuctionsByOwner);
router.get("/user/:userId/following", checkAuthorization, auctionController.getActiveFollowedAuctions);

export default router;
