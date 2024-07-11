import express from 'express'
export const userRouter = express.Router()
import {signup, signin} from '../controllers/userControlllers.js'

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)