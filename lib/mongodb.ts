import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: "NextAuthIntegaration"
        })
    }
    catch (error) {
        console.log(error)
    }
}

export default connectDB

