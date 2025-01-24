import Auction from "../models/auctionModel.js";
import Bid from "../models/bidModel.js";
import User from "../models/userModel.js";
import {
    handleAuctionStarted,
    handleAuctionFinished,
    handleAuctionWon,
} from "../helpers/automaticNotification.js";
import { getIO } from "../config/socket.js";

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

        const startingPriceRounded = Math.ceil(startingPrice);
        const minIncrementRounded = Math.min(
            100,
            Math.max(Math.ceil(minIncrement), 1)
        );

        const newAuction = new Auction({
            title,
            description,
            images,
            category,
            startingPrice: startingPriceRounded,
            minIncrement: minIncrementRounded,
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

const searchAuctions = async (req, res) => {
    try {
        const { query, page = 1, limit, active } = req.query;
        const resultsPerPage = parseInt(limit) || 10;
        const skip = (page - 1) * resultsPerPage;

        if (!query || query.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Por favor, ingrese una consulta de búsqueda válida",
            });
        }
        const auctions = await Auction.find(
            active && active == "true"
                ? { title: { $regex: query, $options: "i" }, status: "active" }
                : {
                      title: { $regex: query, $options: "i" },
                      status: { $ne: "closed" },
                  }
        )
            .populate("category", "name")
            .populate("sellerId", "name")
            .skip(skip)
            .limit(resultsPerPage);

        const total = await Auction.countDocuments(
            active && active == "true"
                ? { title: { $regex: query, $options: "i" }, status: "active" }
                : {
                      title: { $regex: query, $options: "i" },
                      status: { $ne: "closed" },
                  }
        );

        if (auctions.length === 0) {
            return res.status(404).json({
                success: false,
                message:
                    "No se encontraron subastas que coincidan con la consulta de búsqueda",
            });
        }

        res.status(200).json({
            success: true,
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / resultsPerPage),
            auctions,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al buscar subastas",
            error,
        });
    }
};

const getAuctions = async (req, res) => {
    try {
        const { page = 1, limit, active } = req.query;
        const resultsPerPage = parseInt(limit) || 10;
        const skip = (page - 1) * resultsPerPage;

        const auctions = await Auction.find(
            active && active == "true"
                ? { status: "active" }
                : { status: { $ne: "closed" } }
        )
            .populate("category", "name")
            .populate("sellerId", "name")
            .skip(skip)
            .limit(resultsPerPage);

        const total = await Auction.countDocuments(
            active && active == "true"
                ? { status: "active" }
                : { status: { $ne: "closed" } }
        );

        res.status(200).json({
            success: true,
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / resultsPerPage),
            auctions,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las subastas",
            error,
        });
    }
};

const getAuctionsByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { page = 1, limit, active } = req.query;
        const resultsPerPage = parseInt(limit) || 10;
        const skip = (page - 1) * resultsPerPage;

        const auctions = await Auction.find(
            active && active == "true"
                ? { category: categoryId, status: "active" }
                : { category: categoryId, status: { $ne: "closed" } }
        )
            .populate("category", "name")
            .populate("sellerId", "name")
            .skip(skip)
            .limit(resultsPerPage);

        const total = await Auction.countDocuments(
            active && active == "true"
                ? { category: categoryId, status: "active" }
                : { category: categoryId, status: { $ne: "closed" } }
        );

        res.status(200).json({
            success: true,
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / resultsPerPage),
            auctions,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las subastas por categoría",
            error,
        });
    }
};

const getActiveAuctions = async (req, res) => {
    try {
        const { page = 1, limit } = req.query;
        const resultsPerPage = parseInt(limit) || 10;
        const skip = (page - 1) * resultsPerPage;

        const auctions = await Auction.find({
            status: "active",
            endTime: { $gt: new Date() },
        })
            .populate("category", "name")
            .populate("sellerId", "name")
            .skip(skip)
            .limit(resultsPerPage);

        const total = await Auction.countDocuments({
            status: "active",
            endTime: { $gt: new Date() },
        });

        res.status(200).json({
            success: true,
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / resultsPerPage),
            auctions,
        });
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
        const { auctionId } = req.params;
        const auction = await Auction.findById(auctionId)
            .populate("category", "name")
            .populate("sellerId", "name")
            .populate("winnerId", "name");
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
        const { auctionId } = req.params;
        const updates = req.body;

        const auction = await Auction.findByIdAndUpdate(auctionId);
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

        const updatedAuction = await Auction.findByIdAndUpdate(
            auctionId,
            updates,
            {
                new: true,
            }
        );
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
        const { auctionId } = req.params;

        const auction = await Auction.findById(auctionId);
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

        await Auction.findByIdAndDelete(auctionId);
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
            console.log(auction.startTime);
            auction.status = "active";
            await auction.save();
            const auctionId = auction._id.toString(); // Convertir ID a string
            const rooms = Array.from(getIO().sockets.adapter.rooms.keys()); // Obtener todas las salas activas

            // Verificar si la sala con el ID de la subasta existe
            if (rooms.includes(auctionId)) {
                console.log(`La sala ${auctionId} existe. Emitiendo evento.`);
                // Emitir evento `start-auction` a la sala correspondiente
                getIO()
                    .to(auctionId)
                    .emit("start-auction", {
                        auctionId,
                        message: `La subasta ${auctionId} ha comenzado.`,
                        startTime: new Date().toISOString(),
                    });
            }
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
            const winner = await User.findById(winnerId);
            const auctionId = auction._id.toString();
            const rooms = Array.from(getIO().sockets.adapter.rooms.keys()); // Obtener todas las salas activas

            // Verificar si la sala con el ID de la subasta existe
            if (rooms.includes(auctionId)) {
                console.log(`La sala ${auctionId} existe. Emitiendo evento.`);
                // Emitir evento `start-auction` a la sala correspondiente
                getIO()
                    .to(auctionId)
                    .emit("end-auction", {
                        auctionId,
                        winnerName: winner.name,
                        message: `La subasta ${auctionId} ha finalizado.`,
                        startTime: new Date().toISOString(),
                    });
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
        const { page = 1, limit } = req.query;
        const resultsPerPage = parseInt(limit) || 10;
        const skip = (page - 1) * resultsPerPage;

        const bids = await Bid.find({ userId });
        if (bids.length > 0) {
            const auctionIds = bids.map((bid) => bid.auctionId);
            const auctions = await Auction.find({ _id: { $in: auctionIds } })
                .populate("category", "name")
                .populate("sellerId", "name")
                .skip(skip)
                .limit(resultsPerPage);

            const total = await Auction.countDocuments({
                _id: { $in: auctionIds },
            });

            return res.status(200).json({
                success: true,
                total,
                page: parseInt(page),
                totalPages: Math.ceil(total / resultsPerPage),
                auctions,
            });
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
        const { page = 1, limit } = req.query;
        const resultsPerPage = parseInt(limit) || 10;
        const skip = (page - 1) * resultsPerPage;

        const auctions = await Auction.find({ sellerId: userId })
            .populate("category", "name")
            .populate("sellerId", "name")
            .skip(skip)
            .limit(resultsPerPage);

        const total = await Auction.countDocuments({ sellerId: userId });

        res.status(200).json({
            success: true,
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / resultsPerPage),
            auctions,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las subastas del vendedor",
            error,
        });
    }
};

const getActiveFollowedAuctions = async (req, res) => {
    try {
        const { userId } = req.params;
        const { page = 1, limit } = req.query;
        const resultsPerPage = parseInt(limit) || 10;
        const skip = (page - 1) * resultsPerPage;

        const user = await User.findById(userId);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "Usuario no encontrado" });
        }

        const favoriteAuctionsIds = user.favoriteAuctions;
        const auctions = await Auction.find({
            _id: { $in: favoriteAuctionsIds },
            status: "active",
        })
            .populate("category", "name")
            .populate("sellerId", "name")
            .skip(skip)
            .limit(resultsPerPage);

        const total = await Auction.countDocuments({
            _id: { $in: favoriteAuctionsIds },
            status: "active",
        });

        res.status(200).json({
            success: true,
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / resultsPerPage),
            auctions,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las subastas activas seguidas",
            error,
        });
    }
};

const getUpcomingFollowedAuctions = async (req, res) => {
    try {
        const { userId } = req.params;
        const { page = 1, limit } = req.query;
        const resultsPerPage = parseInt(limit) || 10;
        const skip = (page - 1) * resultsPerPage;

        const user = await User.findById(userId);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "Usuario no encontrado" });
        }

        const favoriteAuctionsIds = user.favoriteAuctions;
        const auctions = await Auction.find({
            _id: { $in: favoriteAuctionsIds },
            status: "inactive",
        })
            .populate("category", "name")
            .populate("sellerId", "name")
            .skip(skip)
            .limit(resultsPerPage);

        const total = await Auction.countDocuments({
            _id: { $in: favoriteAuctionsIds },
            status: "inactive",
        });

        res.status(200).json({
            success: true,
            total,
            page: parseInt(page),
            totalPages: Math.ceil(total / resultsPerPage),
            auctions,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las subastas activas seguidas",
            error,
        });
    }
};

export default {
    createAuction,
    searchAuctions,
    getAuctions,
    getAuctionsByCategory,
    getActiveAuctions,
    getAuctionById,
    updateAuction,
    deleteAuction,
    activateAuctions,
    closeAuctions,
    getAuctionsWhereBidDone,
    getAuctionsByOwner,
    getActiveFollowedAuctions,
    getUpcomingFollowedAuctions,
};
