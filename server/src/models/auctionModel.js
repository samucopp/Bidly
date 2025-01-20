import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: [String],
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    startingPrice: {
        type: Number,
        required: true,
        min: 1,
    },
    currentPrice: {
        type: Number,
    },
    minIncrement: {
        type: Number,
        default: 1,
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['inactive', 'active', 'closed'],
        default: 'inactive',
    },
    winnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
});

const Auction = mongoose.model('Auction', auctionSchema);

export default Auction;