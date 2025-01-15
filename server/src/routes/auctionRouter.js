import { Router } from "express";
import auctionController from "../controllers/auctionController.js";

const router = Router();

router.post("/create", auctionController.createAuction);
router.get("/", auctionController.getAuctions);
router.get("/active", auctionController.getActiveAuctions);
router.get("/:id", auctionController.getAuctionById);
router.put("/update/:id", auctionController.updateAuction);
router.put("/activate", auctionController.activateAuctions);
router.put("/close", auctionController.closeAuctions);
router.delete("/delete/:id", auctionController.deleteAuction);
router.get(
    "/user/:userId/participated",
    auctionController.getAuctionsWhereBidDone
);
router.get("/user/:userId/owner", auctionController.getAuctionsByOwner);
export default router;
