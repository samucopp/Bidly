import AuctionHistory from "../models/auctionHistoryModel.js";
import User from "../models/userModel.js";
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
        const { auctionId, ownerId, winnerId, finalPrice, finishDate } =
            req.body;
        const owner = await User.findById(ownerId);
        const winner = await User.findById(winnerId);
        if (!owner) {
            return res.status(400).json({
                message: "El propietario no esta registrado",
            });
        }
        if (!winner) {
            return res.status(400).json({
                message: "El ganador no esta registrado",
            });
        }

        const auctionHistories = await AuctionHistory.create({
            auctionId,
            ownerId,
            winnerId,
            finalPrice,
            finishDate,
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
        const { ownerId, winnerId, finalPrice, finishDate } = req.body;

        const owner = await User.findById(ownerId);
        const winner = await User.findById(winnerId);
        if (!owner) {
            return res.status(400).json({
                message: "El propietario no esta registrado",
            });
        }
        if (!winner) {
            return res.status(400).json({
                message: "El ganador no esta registrado",
            });
        }

        const updatedAuctionHistory = await AuctionHistory.findOneAndUpdate(
            { auctionId },
            { ownerId, winnerId, finalPrice, finishDate },
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
