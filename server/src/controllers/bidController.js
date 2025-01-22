import Bid from "../models/bidModel.js";
import Auction from "../models/auctionModel.js";
import userController from "./userController.js";

const createBid = async (req, res) => {
    try {
        const { auctionId, userId, amount } = req.body;
        const savedBid = await addBid(auctionId, userId, amount);
        res.status(201).json({ success: true, savedBid });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error al crear la puja",
            error,
        });
    }
};

const getBidsByAuction = async (req, res) => {
    try {
        const { auctionId } = req.params;

        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res
                .status(404)
                .json({ success: false, message: "Subasta no encontrada" });
        }

        const bids = await Bid.find({ auctionId })
            .sort({ amount: -1 })
            .populate("userId", "name");

        if (bids.length === 0) {
            return res.status(200).json({
                success: true,
                bids,
                minAllowed: auction.startingPrice,
            });
        }

        const minIncrement = Math.ceil(
            auction.currentPrice * (auction.minIncrement / 100)
        );
        const minAllowed = auction.currentPrice + minIncrement;
        console.log(auction);

        res.status(200).json({ success: true, bids, minAllowed });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las pujas",
            error,
        });
    }
};

const deleteBid = async (req, res) => {
    try {
        const { bidId } = req.params;

        const bid = await Bid.findById(bidId);
        if (!bid) {
            return res
                .status(404)
                .json({ success: false, message: "Puja no encontrada" });
        }

        const now = new Date();
        const bidTime = new Date(bid.timestamp);
        const timeDifference = (now - bidTime) / 1000;

        if (timeDifference > 60) {
            return res.status(400).json({
                success: false,
                message: "La puja no puede ser eliminada después de un minuto",
            });
        }

        await Bid.findByIdAndDelete(bidId);
        res.status(200).json({
            success: true,
            message: "Puja eliminada exitosamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la puja",
            error,
        });
    }
};

const addBid = async (auctionId, userId, amount) => {
    const auction = await Auction.findById(auctionId);
    if (!auction) {
        throw new Error("La subasta no existe");
    }

    if (auction.status === "inactive") {
        throw new Error("La subasta aún no ha comenzado");
    }
    if (auction.status === "closed") {
        throw new Error("La subasta ha finalizado");
    }

    const lastBid = await Bid.findOne({ auctionId }).sort({ amount: -1 });

    const minIncrement = Math.ceil(
        auction.currentPrice * (auction.minIncrement / 100)
    );
    const minAllowed = lastBid
        ? lastBid.amount + minIncrement
        : auction.startingPrice;

    if (amount < minAllowed) {
        throw new Error(`El monto mínimo permitido es ${minAllowed}`);
    }

    await userController.handleAddAuctionToFavorites(userId, auctionId);

    const newBid = new Bid({ auctionId, userId, amount });
    const savedBid = await newBid.save();
    auction.currentPrice = savedBid.amount;
    await auction.save();
    console.log(savedBid);
    return savedBid;
};

export default {
    createBid,
    addBid,
    getBidsByAuction,
    deleteBid,
};
