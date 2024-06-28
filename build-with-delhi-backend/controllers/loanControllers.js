import Bank from "../models/bank.js"
import Loan from "../models/loan.js"
import { calculateRank, updateLoanValues } from "./utils/loanHelpers.js"

export const getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find({}).populate({
            path: 'bank',
            select: 'name'
        }).sort({
            rank: "asc"
        })

        res.status(200)
        return res.json({
            loans
        })
    } catch(error) {
        res.status(500)
        return res.json({
            message: `Server Error: ${error}`
        })
    }
}

export const createLoan = async (req,res) => {
    try{
        const { bankName, loanType, interestRate, minLoanAmount, maxLoanAmount, tenure, processingFee, documentsRequired} = req.body

        const bank = await Bank.findOne({
            name: bankName
        })

        if(!bank) {
            res.status(404)
            return res.json({
                message: 'Bank not found!!!'
            })
        }

        const bankId = bank._id
        const rank = calculateRank({loanType, interestRate, minLoanAmount, maxLoanAmount, tenure, processingFee, documentsRequired})
        const loan = await Loan.create({
            loanType,
            interestRate,
            minLoanAmount,
            maxLoanAmount,
            tenure,
            processingFee,
            documentsRequired,
            bank: bankId,
            rank
        })
        
        res.status(200)
        return res.json({
            message: 'New Loan Created',
            loan
        })
    } catch(error) {
        res.status(500)
        return res.json({
            message: `Server Error: ${error}`
        })
    }
}

export const createBank = async(req,res) => {
    try {
        const { name, contactNumber, website } = req.body
        const alreadyExists = await Bank.findOne({
            where: {
                name: name
            }
        })
        if(alreadyExists) {
            res.status(409)
            return res.json({
                message: 'Bank already exists!!!'
            })
        }
        const bank = await Bank.create({
            name,
            contactNumber,
            website
        })
        res.status(200)
        return res.json({
            message: 'New Bank Created',
            bank
        })
    } catch(error){
        res.status(500)
        return res.json({
            message: `Server Error: ${error}`
        })
    }
}

export const updateLoans = async(req, res) => {
    try {
        const loans = await Loan.find({})
        const updatedLoans = loans.map((loan) => {
            const updatedLoan = updateLoanValues(loan)
            return updatedLoan
        })
        const loanTypes = [...new Set(updatedLoans.map(loan => loan.loanType))]
        for (const type of loanTypes) {
            const loansOfType = updatedLoans.filter(loan => loan && loan.loanType === type)
            loansOfType.sort((a, b) => calculateRank(a) - calculateRank(b))
            for(let i=0; i < loansOfType.length; i++){
                loansOfType[i].rank = i + 1
                await Loan.updateOne({ _id: loansOfType[i]._id }, { rank: i + 1 })
            }
        }
        res.status(200)
        return res.json({
            message: 'Loan Information Updated'
        })
    } catch(error){
        res.status(500)
        return res.json({
            message: `Server Error: ${error}`
        })
    }
}

export const filterLoans = async(req, res) => {
    try{
        const query = {}
        if(req.query.loanType){
            query.loanType = req.query.loanType
        }
        if(req.query.minInterestRate) {
            query.InterestRate = {...query.interestRate, $gte: Number(req.query.minInterestRate)}
        }
        if (req.query.minInterestRate) {
            query.interestRate = { ...query.interestRate, $gte: Number(req.query.minInterestRate) };
        }
        if (req.query.maxInterestRate) {
            query.interestRate = { ...query.interestRate, $lte: Number(req.query.maxInterestRate) };
        }
        if (req.query.minLoanAmount) {
            query.minLoanAmount = { ...query.minLoanAmount, $gte: Number(req.query.minLoanAmount) };
        }
        if (req.query.maxLoanAmount) {
            query.maxLoanAmount = { ...query.maxLoanAmount, $lte: Number(req.query.maxLoanAmount) };
        }
        if (req.query.minTenure) {
            query.tenure = { ...query.tenure, $gte: Number(req.query.minTenure) };
        }
        if (req.query.maxTenure) {
            query.tenure = { ...query.tenure, $lte: Number(req.query.maxTenure) };
        }
        if (req.query.minProcessingFee) {
            query.processingFee = { ...query.processingFee, $gte: Number(req.query.minProcessingFee) };
        }
        if (req.query.maxProcessingFee) {
            query.processingFee = { ...query.processingFee, $lte: Number(req.query.maxProcessingFee) };
        }
        const loans = await Loan.find(query).populate('bank').sort({ rank: 1 });
        res.status(200)
        return res.json({
            message: 'Query Fulfilled Successfully',
            loans
        })
    } catch(error) {
        res.status(500)
        return res.json({
            message: `Server Error: ${error}`
        })
    }
}

