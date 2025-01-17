import { S3 } from "aws-sdk";

export const s3Uploadv2 = async (file) => {
    const s3 = new S3();

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: "uploads/" + file.originalname,
        Body: file.buffer,
        ContentType: "image/jpeg",
    };

    const result = await s3.upload(params).promise();

    console.log("File uploaded successfully");
    return result;
};
