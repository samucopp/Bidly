import { apiRequest } from "./apiRequest";

async function createBid(bidData) {
    try {
        const response = await apiRequest('/bid/create', 'POST', bidData);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al crear la puja:', error);
        throw new Error('Error al crear la puja');
    }
};

async function getBidsByAuction(auctionId) {
    try {
        const response = await apiRequest(`/bid/${auctionId}`, 'GET');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener las pujas:', error);
        throw new Error('Error al obtener las pujas');
    }
};

/* async function deleteBid(bidId) {
    try {
        await apiRequest(`/bid/delete/${bidId}`, 'DELETE');
    } catch (error) {
        console.error('Error al eliminar la puja:', error);
        throw new Error('Error al eliminar la puja');
    }
}; */

export {
    createBid,
    getBidsByAuction,
}