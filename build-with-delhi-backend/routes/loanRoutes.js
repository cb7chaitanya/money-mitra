import express from 'express'
export const loanRouter = express.Router()
import { getAllLoans, createLoan, createBank, updateLoans, filterLoans } from '../controllers/loanControllers.js'

loanRouter.post('/create-bank', createBank)
loanRouter.post('/create-loan', createLoan)
loanRouter.get('/loans', getAllLoans)
loanRouter.patch('/update-loans', updateLoans)
loanRouter.get('/loans/filter', filterLoans)