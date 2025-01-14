import mongoose from "mongoose";

const AuctionHistorySchema = new mongoose.Schema({
    auctionId: { type: String, required: true, unique: true },
    ownerId: { type: String, required: true },
    winnerId: { type: String, required: true },
    finalPrice: { type: Number, required: true },
    finishDate: { type: Date, required: true, default: Date.now },
});

const AuctionHistory = mongoose.model("AuctionHistory", AuctionHistorySchema);

export default AuctionHistory;
