import { Router } from "express";
import userRouter from "./userRouter.js";
import categoryRouter from "./categoryRouter.js";
const router = Router();

router.get("/", (req, res) => {
    res.render("index");
});
router.use("/user", userRouter);
router.use("/category", categoryRouter);

export default router;
