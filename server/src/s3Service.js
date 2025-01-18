import AWS from "aws-sdk";

export const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});

export const s3Uploadv2ProfileAvatar = async (files, userId) => {
    console.log(files);
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `uploads/users/${userId}/${files[0].originalname}`,
        Body: files[0].buffer,
        ContentType: files[0].mimetype,
    };

    return await s3.upload(params).promise();
};

export const s3Uploadv2AuctionImages = async (files, auctionId) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];

    const params = files.map((file) => {
        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new Error(
                `El tipo de archivo ${file.mimetype} no está permitido. Solo se permiten jpg, png y gif.`
            );
        }

        return {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/auctions/${auctionId}/${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype,
        };
    });

    return await Promise.all(params.map((param) => s3.upload(param).promise()));
};
