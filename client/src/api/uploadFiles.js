import { apiRequest, apiRequestForm } from './apiRequest';

async function uploadAuctionImages(auctionId, files) {
    try {
        const response = await apiRequestForm(`/upload/auctionImages/${auctionId}`, 'POST', files);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al subir las imágenes de la subasta:', error);
        throw new Error('Error al subir las imágenes de la subasta');
    }
};

async function deleteAuctionImage(auctionId, imageUrl) {
    try {
        const response = await apiRequestForm(`/upload/auctionImages/${auctionId}`, 'DELETE', imageUrl);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al eliminar la imagen de la subasta:', error);
        throw new Error('Error al eliminar la imagen de la subasta');
    }
};

async function uploadProfileAvatar(userId, file) {
    try {
        const response = await apiRequestForm(`/upload/profileAvatar/${userId}`, 'POST', file);
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al subir el avatar del usuario:', error);
        throw new Error('Error al subir el avatar del usuario');
    }
};

async function deleteUserAvatar(userId) {
    try {
        const response = await apiRequest(`/upload/profileAvatar/${userId}`, 'DELETE');
        console.log("response", response);
        return response;
    } catch (error) {
        console.error('Error al eliminar el avatar del usuario:', error);
        throw new Error('Error al eliminar el avatar del usuario');
    }
};

export {
    uploadAuctionImages,
    deleteAuctionImage,
    uploadProfileAvatar,
    deleteUserAvatar
}