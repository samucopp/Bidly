import Auction from "../models/auctionModel.js";
import Bid from "../models/bidModel.js";
import {
    handleAuctionStarted,
    handleAuctionFinished,
    handleAuctionWon,
} from "../helpers/automaticNotification.js";

const createAuction = async (req, res) => {
    try {
        const {
            title,
            description,
            images,
            category,
            startingPrice,
            minIncrement,
            sellerId,
            startTime,
            endTime,
        } = req.body;
        const newAuction = new Auction({
            title,
            description,
            images,
            category,
            startingPrice,
            minIncrement,
            sellerId,
            startTime,
            endTime,
        });
        const savedAuction = await newAuction.save();
        res.status(201).json({ succes: true, savedAuction });
    } catch (error) {
        res.status(500).json({
            succes: false,
            message: "Error al crear la subasta",
            error,
        });
    }
};

const getAuctions = async (req, res) => {
    try {
        const auctions = await Auction.find()
            .populate("category", "title")
            .populate("sellerId", "name");
        res.status(200).json({ success: true, auctions });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las subastas",
            error,
        });
    }
};

const getActiveAuctions = async (req, res) => {
    try {
        const auctions = await Auction.find({
            status: "active",
            endTime: { $gt: new Date() },
        })
            .populate("category", "title")
            .populate("sellerId", "name");
        res.status(200).json({ success: true, auctions });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las subastas activas",
            error,
        });
    }
};

const getAuctionById = async (req, res) => {
    try {
        const { id } = req.params;
        const auction = await Auction.findById(id)
            .populate("category", "title")
            .populate("sellerId", "name");
        if (!auction) {
            return res
                .status(404)
                .json({ success: false, message: "Subasta no encontrada" });
        }
        res.status(200).json({ success: true, auction });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener la subasta",
            error,
        });
    }
};

const updateAuction = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const auction = await Auction.findByIdAndUpdate(id);
        if (!auction) {
            return res
                .status(404)
                .json({ success: false, message: "Subasta no encontrada" });
        }

        const now = new Date();
        if (now >= new Date(auction.startTime)) {
            return res.status(400).json({
                success: false,
                message: "La subasta no puede ser actualizada una vez iniciada",
            });
        }

        if (now >= new Date(auction.endTime)) {
            return res.status(400).json({
                success: false,
                message:
                    "La subasta no puede ser actualizada una vez finalizada",
            });
        }

        const updatedAuction = await Auction.findByIdAndUpdate(id, updates, {
            new: true,
        });
        res.status(200).json({ success: true, updatedAuction });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar la subasta",
            error,
        });
    }
};

const deleteAuction = async (req, res) => {
    try {
        const { id } = req.params;

        const auction = await Auction.findById(id);
        if (!auction) {
            return res
                .status(404)
                .json({ success: false, message: "Subasta no encontrada" });
        }

        const now = new Date();
        if (now >= new Date(auction.startTime)) {
            return res.status(400).json({
                success: false,
                message: "La subasta no puede ser eliminada una vez iniciada",
            });
        }

        await Auction.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Subasta eliminada exitosamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la subasta",
            error,
        });
    }
};

const handleActivateAuctions = async () => {
    try {
        const now = new Date();
        const auctionsToActivate = await Auction.find({
            status: "inactive",
            startTime: { $lte: now },
        });
        for (const auction of auctionsToActivate) {
            auction.status = "active";
            await auction.save();
            await handleAuctionStarted(auction);
        }
        console.log(`${auctionsToActivate.length} subasta(s) activada(s)`);
    } catch (error) {
        console.error("Error al activar las subastas:", error);
    }
};

const activateAuctions = async (req, res) => {
    try {
        await handleActivateAuctions();
        res.status(200).json({
            success: true,
            message: "Subastas activadas exitosamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al activar las subastas",
            error,
        });
    }
};

const handleCloseAuctions = async () => {
    try {
        const now = new Date();
        const auctionsToClose = await Auction.find({
            status: "active",
            endTime: { $lte: now },
        });
        for (const auction of auctionsToClose) {
            const winnerId = await setWinner(auction._id);
            auction.winnerId = winnerId;
            auction.status = "closed";
            await auction.save();

            if (winnerId) {
                await handleAuctionWon(winnerId, auction);
            }
            await handleAuctionFinished(auction.sellerId, auction);
        }
        console.log(`${auctionsToClose.length} subasta(s) cerrada(s)`);
    } catch (error) {
        console.error("Error al cerrar las subastas:", error);
    }
};

const setWinner = async (auctionId) => {
    try {
        const lastBid = await Bid.findOne({ auctionId })
            .sort({ createdAt: -1 })
            .populate("userId", "_id");

        if (!lastBid) return null;

        return lastBid.userId._id;
    } catch (error) {
        console.error("Error al obtener el ganador de la subasta:", error);
        return null;
    }
};

const closeAuctions = async (req, res) => {
    try {
        await handleCloseAuctions();
        res.status(200).json({
            success: true,
            message: "Subastas cerradas exitosamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al cerrar las subastas",
            error,
        });
    }
};

const getAuctionsWhereBidDone = async (req, res) => {
    try {
        const { userId } = req.params;
        const bids = await Bid.find({ userId });
        if (bids.length > 0) {
            const auctionIds = bids.map((bid) => bid.auctionId);
            const auctions = await Auction.find({ _id: { $in: auctionIds } });
            return res.status(200).json({ success: true, auctions });
        } else {
            return res.status(404).json({
                success: true,
                message: "No se han realizado pujas en ninguna subasta",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las subastas donde se hizo un bid",
            error,
        });
    }
};
const getAuctionsByOwner = async (req, res) => {
    try {
        const { userId } = req.params;
        const auctions = await Auction.find({ sellerId: userId });
        res.status(200).json({ success: true, auctions });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las subastas del vendedor",
            error,
        });
    }
};

export default {
    createAuction,
    getAuctions,
    getActiveAuctions,
    getAuctionById,
    updateAuction,
    deleteAuction,
    activateAuctions,
    closeAuctions,
    getAuctionsWhereBidDone,
    getAuctionsByOwner,
};
