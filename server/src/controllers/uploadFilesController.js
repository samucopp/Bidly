import {
    s3,
    s3Uploadv2AuctionImages,
    s3Uploadv2ProfileAvatar,
} from "../s3Service.js";
import Auction from "../models/auctionModel.js";
import User from "../models/userModel.js";
const uploadAuctionImages = async (req, res) => {
    try {
        const { auctionId } = req.params;
        const folderPath = `uploads/auctions/${auctionId}`;
        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res
                .status(404)
                .json({ success: false, message: "Subasta no encontrada" });
        }
        const fileCount = await countFilesInFolder(folderPath);
        if (fileCount >= 10) {
            return res.status(400).json({
                success: false,
                message:
                    "La carpeta ya contiene el número máximo de archivos (10).",
            });
        }
        const result = await s3Uploadv2AuctionImages(req.files, auctionId);
        const paths = result.map((uploadResult) => uploadResult.Location);

        auction.images.push(...paths);
        const uniquePaths = [...new Set(auction.images)];
        auction.images = uniquePaths;
        await auction.save();
        res.status(200).json({
            success: true,
            message: "Imágenes subidas correctamente",
            locations: paths,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al subir las imágenes",
            error,
        });
    }
};

const deleteAuctionImage = async (req, res) => {
    try {
        const { auctionId } = req.params;
        const { imageUrl } = req.body;

        // Buscar la subasta
        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res
                .status(404)
                .json({ success: false, message: "Subasta no encontrada" });
        }

        // Verificar si la URL está en el array de imágenes
        const imageIndex = auction.images.indexOf(imageUrl);
        if (imageIndex === -1) {
            return res.status(404).json({
                success: false,
                message: "Imagen no encontrada en la subasta",
            });
        }

        // Eliminar la imagen del bucket de S3
        const imageKey = imageUrl.split("amazonaws.com/")[1]; // Obtener el Key de S3
        await s3
            .deleteObject({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: imageKey,
            })
            .promise();

        // Eliminar la URL del array de imágenes
        auction.images.splice(imageIndex, 1);

        // Guardar los cambios
        await auction.save();

        res.status(200).json({
            success: true,
            message: "Imagen eliminada correctamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la imagen",
            error: error.message,
        });
    }
};

const uploadProfileAvatar = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "Usuario no encontrado" });
        }

        // Obtener todos los archivos en la carpeta del usuario
        const folderPath = `uploads/users/${userId}/`;
        const objects = await s3
            .listObjectsV2({
                Bucket: process.env.AWS_BUCKET_NAME,
                Prefix: folderPath, // Carpeta del usuario
            })
            .promise();

        if (objects.Contents.length > 0) {
            // Eliminar todos los archivos dentro de la carpeta
            const deleteParams = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Delete: {
                    Objects: objects.Contents.map((obj) => ({ Key: obj.Key })),
                },
            };
            await s3.deleteObjects(deleteParams).promise();
            console.log("Archivos anteriores eliminados");
        }

        // Subir la imagen al bucket de S3
        console.log(req.files);
        const result = await s3Uploadv2ProfileAvatar(req.files, userId);

        // Actualizar el avatar del usuario en la base de datos
        user.avatar = result.Location;
        await user.save();
        res.status(200).json({
            success: true,
            message: "Avatar actualizado correctamente",
            avatar: result.Location,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al subir el avatar",
            error: error.message,
        });
    }
};

const deleteUserAvatar = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "Usuario no encontrado" });
        }

        // Eliminar el avatar del bucket de S3
        const folderPath = `uploads/users/${userId}/`;
        const objects = await s3
            .listObjectsV2({
                Bucket: process.env.AWS_BUCKET_NAME,
                Prefix: folderPath, // Carpeta del usuario
            })
            .promise();

        if (objects.Contents.length > 0) {
            // Eliminar todos los archivos dentro de la carpeta
            const deleteParams = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Delete: {
                    Objects: objects.Contents.map((obj) => ({ Key: obj.Key })),
                },
            };
            await s3.deleteObjects(deleteParams).promise();
            console.log("Archivos anteriores eliminados");
        }

        // Actualizar el avatar del usuario en la base de datos a null
        user.avatar = null;
        await user.save();

        res.status(200).json({
            success: true,
            message: "Avatar eliminado correctamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar el avatar",
            error: error.message,
        });
    }
};
const countFilesInFolder = async (folderPath) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Prefix: folderPath, // Carpeta que deseas listar
    };

    // Listar los archivos en la carpeta
    const listedObjects = await s3.listObjectsV2(params).promise();

    // Retornar el número de archivos
    return listedObjects.Contents.length;
};

export default {
    uploadAuctionImages,
    deleteAuctionImage,
    uploadProfileAvatar,
    deleteUserAvatar,
};
