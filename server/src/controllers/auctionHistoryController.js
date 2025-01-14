import AuctionHistory from "../models/auctionHistoryModel.js";
import userController from "./userController.js";

async function getAuctionHistories(req, res) {
    try {
        const auctionHistories = await AuctionHistory.find();
        return res.status(200).json(auctionHistories);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}

async function getByUserId(req, res) {
    const { userId } = req.params;
    const user = await userController.getUserById(req, res);
}
