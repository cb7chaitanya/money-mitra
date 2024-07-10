import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 100
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 11
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 12
    }
})

const User = mongoose.model('User', userSchema)
export default User