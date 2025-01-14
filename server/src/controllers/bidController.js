import Bid from "../models/bidModel.js";
import Auction from "../models/auctionModel.js";

const createBid = async (req, res) => {
    try {
        const { auctionId, userId, amount } = req.body;
        
        const auction = await Auction.findById(auctionId);
        if (!auction || auction.status !== 'active') {
            return res.status(400).json({ success: false, message: "La subasta no está activa o no existe" });
        }
        
        const now = new Date();
        if (now < new Date(auction.startTime)) {
            return res.status(400).json({ success: false, message: "La subasta aún no ha comenzado" });
        }
        if (now >= new Date(auction.endTime)) {
            return res.status(400).json({ success: false, message: "La subasta ha finalizado" });
        }
        
        const lastBid = await Bid.findOne({ auctionId }).sort({ amount: -1 });

        const minAllowed = lastBid ? lastBid.amount + auction.minIncrement : auction.startingPrice + auction.minIncrement;

        if (amount < minAllowed) {
            return res.status(400).json({ success: false, message: `El monto mínimo permitido es ${minAllowed}` });
        }

        const newBid = new Bid({ auctionId, userId, amount });
        const savedBid = await newBid.save();
        res.status(201).json({ success: true, savedBid });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al crear la puja", error });
    }
};

const getBidsByAuction = async (req, res) => {
    try {
        const {auctionId} = req.params;

        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res.status(404).json({ success: false, message: "Subasta no encontrada" });
        }

        const bids = await Bid.find({ auctionId }).sort({ amount: -1 }).populate('userId', 'name');
        res.status(200).json({ success: true, bids });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al obtener las pujas", error });
    }
};

const deleteBid = async (req, res) => {
    try {
        const { id } = req.params;

        const bid = await Bid.findById(id);
        if (!bid) {
            return res.status(404).json({ success: false, message: "Puja no encontrada" });
        }

        const now = new Date();
        const bidTime = new Date(bid.timestamp);
        const timeDifference = (now - bidTime) / 1000;

        if (timeDifference > 60) {
            return res.status(400).json({ success: false, message: "La puja no puede ser eliminada después de un minuto" });
        }

        await Bid.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Puja eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error al eliminar la puja", error });  
    }    
};

export default {
    createBid,
    getBidsByAuction,
    deleteBid
}