import { apiRequest } from './apiRequest';

async function createAuction(auctionData) {
    try {
        const response = await apiRequest('/auction/create', 'POST', auctionData);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al crear la subasta:', error);
        throw new Error('Error al crear la subasta');
    }
};

async function searchAuctions(query, active = false, page = 1, limit = 10) {
    try {
        const response = await apiRequest(`/auction/search`, 'GET', { query, active, page, limit });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al buscar las subastas:', error);
        throw new Error('Error al buscar las subastas');
    }
};

async function getAuctions(active = false, page = 1, limit = 10) {
    try {
        const response = await apiRequest(`/auction`, 'GET', { active, page, limit });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener las subastas:', error);
        throw new Error('Error al obtener las subastas');
    }
};

async function getAuctionsByCategory(categoryId, active = false, page = 1, limit = 10) {
    try {
        const response = await apiRequest(`/auction/category/${categoryId}`, 'GET', { active, page, limit });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener las subastas por categoría:', error);
        throw new Error('Error al obtener las subastas por categoría');
    }
};

/* async function getActiveAuctions() {
    try {
        await apiRequest('/auction/active', 'GET');
    } catch (error) {
        console.error('Error al obtener las subastas activas:', error);
        throw new Error('Error al obtener las subastas activas');
    }
}; */

async function getAuctionById(auctionId) {
    try {
        const response = await apiRequest(`/auction/${auctionId}`, 'GET');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener la subasta:', error);
        throw new Error('Error al obtener la subasta');
    }
};

/* async function updateAuction(auctionId, auctionData) {
    try {
        const response = await apiRequest(`/auction/update/${auctionId}`, 'PUT', auctionData);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al actualizar la subasta:', error);
        throw new Error('Error al actualizar la subasta');
    }
}; */

async function deleteAuction(auctionId) {
    try {
        const response = await apiRequest(`/auction/delete/${auctionId}`, 'DELETE');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al eliminar la subasta:', error);
        throw new Error('Error al eliminar la subasta');
    }
};

async function getAuctionsWhereBidDone(userId, active = false, page = 1, limit = 10) {
    try {
        const response = await apiRequest(`/auction/user/${userId}/participated`, 'GET', { active, page, limit });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener las subastas en las que se ha participado:', error);
        throw new Error('Error al obtener las subastas en las que se ha participado');
    }
};

async function getFinishedAuctionsWhereBidDone(userId, active = false, page = 1, limit = 10) {
    try {
        const response = await apiRequest(`/auction/user/${userId}/finished-participated`, 'GET', { active, page, limit });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener las subastas en las que se ha participado:', error);
        throw new Error('Error al obtener las subastas en las que se ha participado');
    }
};

async function getAuctionsByOwner(userId, active = false, page = 1, limit = 10) {
    try {
        const response = await apiRequest(`/auction/user/${userId}/owner`, 'GET', { active, page, limit });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener las subastas del vendedor:', error);
        throw new Error('Error al obtener las subastas del vendedor');
    }
};

async function getActiveFollowedAuctions(userId, active = false, page = 1, limit = 10) {
    try {
        const response = await apiRequest(`/auction/user/${userId}/following`, 'GET', { active, page, limit });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al obtener las subastas seguidas:', error);
        throw new Error('Error al obtener las subastas seguidas');
    }
};

export {
    createAuction,
    searchAuctions,
    getAuctions,
    getAuctionsByCategory,
    getAuctionById,
    deleteAuction,
    getAuctionsWhereBidDone,
    getFinishedAuctionsWhereBidDone,
    getAuctionsByOwner,
    getActiveFollowedAuctions
};