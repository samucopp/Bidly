import Auction from "../models/auctionModel.js";
//import Category from "../models/categoryModel.js";
//import Bid from "../models/bidModel.js";

const createAuction = async (req, res) => {
    try {
        const { title, description, images, category, startingPrice, minIncrement, sellerId, startTime, endTime } = req.body;
        const newAuction = new Auction({ title, description, images, category, startingPrice, minIncrement, sellerId, startTime, endTime });
        const savedAuction = await newAuction.save();
        res.status(201).json({ succes: true, savedAuction });
    } catch (error) {
        res.status(500).json({ succes: false, message: "Error al crear la subasta", error });
    }
};

const getActiveAuctions = async (req, res) => {
    try {
        const auctions = await Auction.find({
            status: 'active',
            endTime: { $gt: new Date() },
        }).populate('category', 'title').populate('sellerId', 'name');
        res.status(200).json({ success: true, auctions });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al obtener las subastas activas", error });
    }
};

const getAuctionById = async (req, res) => {
    try {
        const { id } = req.params;
        const auction = await Auction.findById(id).populate('category', 'title').populate('sellerId', 'name');
        if (!auction) {
            return res.status(404).json({ success: false, message: "Subasta no encontrada" });
        }
        res.status(200).json({ success: true, auction });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al obtener la subasta", error });
    }
};

const updateAuction = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
    
        const auction = await Auction.findByIdAndUpdate(id);
        if (!auction) {
            return res.status(404).json({ success: false, message: "Subasta no encontrada" });
        }
    
        const now = new Date();
        if (now >= new Date(auction.startTime)) {
            return res.status(400).json({ success: false, message: "La subasta no puede ser actualizada una vez iniciada" });
        }
    
        if (now >= new Date(auction.endTime)) {
            return res.status(400).json({ success: false, message: "La subasta no puede ser actualizada una vez finalizada" });
        }
    
        const updatedAuction = await Auction.findByIdAndUpdate(id, updates, { new: true });
        res.status(200).json({ success: true, updatedAuction });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al actualizar la subasta", error });
    }
};

const deleteAuction = async (req, res) => {
    try {
        const { id } = req.params;
        
        const auction = await Auction.findById(id);
        if (!auction) {
            return res.status(404).json({ success: false, message: "Subasta no encontrada" });
        }
        
        const now = new Date();
        if (now >= new Date(auction.startTime)) {
            return res.status(400).json({ success: false, message: "La subasta no puede ser eliminada una vez iniciada" });
        }
        
        await Auction.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Subasta eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al eliminar la subasta", error });
    }
};

export default {
    createAuction,
    getActiveAuctions,
    getAuctionById,
    updateAuction,
    deleteAuction
}