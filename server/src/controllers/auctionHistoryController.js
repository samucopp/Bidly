import AuctionHistory from "../models/auctionHistoryModel.js";
import User from "../models/userModel.js";
import Auction from "../models/auctionModel.js";
async function getAll(req, res) {
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
async function getByAuctionId(req, res) {
    try {
        const { auctionId } = req.params;
        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res.status(400).json({
                message: "Subasta no encontrada",
            });
        }
        const auctionHistory = await AuctionHistory.find({
            auctionId: auctionId,
        });
        if (!auctionHistory) {
            return res.status(400).json({
                message: "Historial de subasta no encontrado",
            });
        }
        return res.status(200).json(auctionHistory);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}

async function getByWinnerId(req, res) {
    try {
        const { winnerId } = req.params;
        const user = await User.findById(winnerId);
        if (!user) {
            return res.status(400).json({
                message: "Ganador no encontrado",
            });
        }

        const userAuctionHistories = await AuctionHistory.find({
            winnerId: winnerId,
        });
        return res.status(200).json(userAuctionHistories);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}
async function getByOwnerId(req, res) {
    try {
        const { ownerId } = req.params;
        const user = await User.findById(ownerId);
        if (!user) {
            return res.status(400).json({
                message: "Dueño no encontrado",
            });
        }

        const userAuctionHistories = await AuctionHistory.find({
            ownerId: ownerId,
        });
        return res.status(200).json(userAuctionHistories);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}

async function create(req, res) {
    try {
        const { auctionId, ownerId, winnerId, finalPrice } = req.body;

        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res.status(400).json({
                message: "Subasta no encontrada",
            });
        }
        const owner = await User.findById(ownerId);
        const winner = await User.findById(winnerId);
        if (!owner) {
            return res.status(400).json({
                message: "Propietario no encontrado",
            });
        }
        if (!winner) {
            return res.status(400).json({
                message: "Ganador no encontrado",
            });
        }
        const prevHistory = await AuctionHistory.find({ auctionId: auctionId });

        if (prevHistory.length > 0) {
            return res.status(400).json({
                message: "Ya existe un historial para esta subasta",
            });
        }
        const auctionHistories = await AuctionHistory.create({
            auctionId,
            ownerId,
            winnerId,
            finalPrice,
            // finishDate,
        });

        return res.status(200).json(auctionHistories);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}
async function update(req, res) {
    try {
        const { auctionId } = req.params;
        const { ownerId, winnerId, finalPrice } = req.body;
        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res.status(400).json({
                message: "Subasta no encontrada",
            });
        }
        const owner = await User.findById(ownerId);
        const winner = await User.findById(winnerId);
        if (!owner) {
            return res.status(400).json({
                message: "Propietario no encontrado",
            });
        }
        if (!winner) {
            return res.status(400).json({
                message: "Ganador no encontrado",
            });
        }

        const updatedAuctionHistory = await AuctionHistory.findOneAndUpdate(
            { auctionId: auctionId },
            { ownerId, winnerId, finalPrice },
            { new: true, runValidators: true }
        );

        if (!updatedAuctionHistory) {
            return res.status(400).json({
                message: "El historial de la subasta no existe",
            });
        }
        return res.status(200).json(updatedAuctionHistory);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}
async function remove(req, res) {
    try {
        const { auctionId } = req.params;
        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res.status(400).json({
                message: "Subasta no encontrada",
            });
        }
        const auctionHistory = await AuctionHistory.findOneAndDelete({
            auctionId: auctionId,
        });
        if (!auctionHistory) {
            return res.status(400).json({
                message: "El historial de la subasta no existe",
            });
        }
        return res.status(200).json({
            message: "Historial de la subasta eliminada correctamente",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error interno del servidor",
        });
    }
}

export default {
    getAll,
    getByAuctionId,
    getByOwnerId,
    getByWinnerId,
    create,
    update,
    remove,
};
