import Notification from "../models/notificationModel.js";

const createAutomaticNotification = async (userId, type, message, data = {}) => {
    try {
        const notification = new Notification({ userId, type, message, data });
        await notification.save();
        console.log(`Notificacion enviada al usuario ${userId}: ${message}`);
        return notification;
    } catch (error) {
        console.error(`Error al enviar la notificacion al usuario ${userId}`, error);
        throw error;
    }
}

const handleAuctionStarted = async (auction) => {
    for (const follower of auction.followers) {
        const message = `La subasta ${auction.title} ha comenzado.`;
        await createAutomaticNotification(follower, "auction-started", message, { auctionId: auction._id });
    }
}

const handleBidOutbid = async (lastBid, auction) => {
    const message = `Tu puja en la subasta ${auction.title} ha sido superada por ${lastBid.userId.name}.`;
    await createAutomaticNotification(lastBid.userId, "bid-outbid", message, { auctionId: auction._id });
}

const handleAuctionWon = async (winnerId, auction) => {
    const message = `Has ganado la subasta ${auction.title}.`;
    await createAutomaticNotification(winnerId, "auction-won", message, { auctionId: auction._id });
}

const handleAuctionFinished = async (sellerId ,auction) => {
    const message = `La subasta ${auction.title} ha finalizado.`;
    await createAutomaticNotification(sellerId, "auction-finished", message, { auctionId: auction._id });
}

export {
    handleAuctionStarted,
    handleBidOutbid,
    handleAuctionWon,
    handleAuctionFinished
}