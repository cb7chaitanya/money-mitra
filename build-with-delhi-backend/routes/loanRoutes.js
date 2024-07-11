import express from 'express'
export const loanRouter = express.Router()
import { getAllLoans, createLoan, createBank, updateLoans, filterLoans } from '../controllers/loanControllers.js'
import {authMiddleware} from '../middlewares/auth.js'

loanRouter.post('/create-bank', createBank)
loanRouter.post('/create-loan', createLoan)
loanRouter.get('/loans', authMiddleware, getAllLoans)
loanRouter.put('/update-loans', authMiddleware, updateLoans)
loanRouter.get('/loans/filter', authMiddleware, filterLoans)