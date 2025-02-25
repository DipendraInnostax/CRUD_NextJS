import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MongoDB connection string in the .env.local");
}

async function DBConnect() {
    if (mongoose.connection.readyState >= 1) {
        console.log("\nAlready connected to MongoDB\n");
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("\nMongoDB Connected Successfully\n");

    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}
//DBConnect();
export default DBConnect;
