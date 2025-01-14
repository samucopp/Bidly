import { Router } from "express";
import userRouter from "./userRouter.js";
import categoryRouter from "./categoryRouter.js";
import auctionRouter from "./auctionRouter.js";
import bidRouter from "./bidRouter.js";
import auctionHistoryRouter from "./auctionHistoryRouter.js";

const router = Router();

router.use("/auction", auctionRouter);
router.use("/bid", bidRouter);
router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/auction-history", auctionHistoryRouter);
export default router;
