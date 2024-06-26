import mongoose from "mongoose";
import { mongoUrl } from '../conf.js'

mongoUrl && mongoose.connect(mongoUrl)

const loanSchema = new mongoose.Schema({
    
})