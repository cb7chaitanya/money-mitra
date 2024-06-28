import mongoose from "mongoose";

const bankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
})

const Bank = mongoose.model('Bank', bankSchema)

export default Bank