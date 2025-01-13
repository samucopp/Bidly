import { Router } from "express";
import userRouter from "./userRouter.js";
const router = Router();

router.get("/", (req, res) => {
    res.render("index");
});
router.use("/user", userRouter);

export default router;
