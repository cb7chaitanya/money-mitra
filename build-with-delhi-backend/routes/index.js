import express from 'express'
export const mainRouter = express.Router()
import { loanRouter } from './loanRoutes.js'
import { stockRouter } from './stockRoutes.js'
import { userRouter } from './userRoutes.js'
import mongoose from 'mongoose'
import { mongoUrl } from '../conf.js'

mongoUrl && mongoose.connect(mongoUrl)
mainRouter.use('/loan', loanRouter)
mainRouter.use('/stock', stockRouter)
mainRouter.use('/user', userRouter)
