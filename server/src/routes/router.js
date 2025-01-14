import { Router } from "express";

import auctionController from "./auctionRoutes.js";
import bidController from "./bidRoutes.js";

const router = Router();

router.use('/auction', auctionController);
router.use('/bid', bidController);


export default router;