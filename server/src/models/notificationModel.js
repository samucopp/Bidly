import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        type: {
            type: String,
            enum: ["bid-deleted", "bid-outbid", "auction-won", "auction-started", "auction-finished"],
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        data: {
            type: Object,
            default: {},
        },
        isRead: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;