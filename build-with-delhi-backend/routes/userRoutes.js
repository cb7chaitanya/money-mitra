import express from 'express'
export const userRouter = express.Router()
import {signup} from '../controllers/userControlllers.js'

userRouter.post('/signup', signup)
userRouter.post('/login')

