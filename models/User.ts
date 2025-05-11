import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotpassword: String,
    forgotpasswordexpiry: Date,
    verifytoken: String,
    verifytokenexpiry: Date

}, { timestamps: true })

const User = mongoose.models.user || mongoose.model("User", UserSchema)

export default User;