import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
    loanType: {
        type: String,
        enum: ['Home Loan', 'Personal Loan', 'Business Loan'],
        required: true
    },
    interestRate : {
        type: Number,
        required: true
    },
    minLoanAmount: {
        type: Number,
        required: true
    },
    maxLoanAmount: {
        type: Number,
        required: true
    },
    tenure: {
        type: Number,
        required: true
    },
    processingFee: {
        type: Number,
        required: true
    },
    documentsRequired: {
        type: [String],
        required: true
    },
    rank: {
        type: Number,
        default: 0
    },
    bank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bank',
        required: true
    }
})

const Loan = mongoose.model('Loan', loanSchema)

export default Loan
