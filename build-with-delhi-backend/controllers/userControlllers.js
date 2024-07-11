import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import { jwtSecret } from '../conf.js'
import mongoose from 'mongoose'
import { mongoUrl } from '../conf.js'
import bcrypt from 'bcrypt'
import {signUpSchema, signInSchema} from '@cb7chaitanya/build-with-delhi-common'

mongoose.connect(mongoUrl).then(() => {
    console.log('Database connected')
}).catch((e) => {
    console.log(e)
    console.log('Database not connected')
})

export const signup = async (req, res) => {
    const { name, email, password } = req.body
    try{
        const { success } = signUpSchema.safeParse(req.body)
        if(!success) {
            return res.status(411).json({
                message: 'Invalid inputs'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const isExisting = await User.findOne({email: email})
        if(isExisting){
            res.status(400)
            return res.json({
                message: 'User already exists'
            })
        }
        const user = await User.create({ 
            name: name, 
            email: email, 
            password: hashedPassword
         })
        const token = jwt.sign({ userId: user._id }, jwtSecret)
        res.cookie('auth-token', token)
        return res.json({
            msg: "Signed up Successfully",
        })
    } catch (error) {
        res.status(500)
        return res.json({
            message: `Server Error: ${error}`
        })
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const { success } = signInSchema.safeParse(req.body)
        if(!success) {
            return res.status(411).json({
                message: 'Invalid inputs'
            })
        }
        const isAlreadyUser = await User.findOne({
            email: email
        })
        if(isAlreadyUser) {
            const passwordMatch = await bcrypt.compare(password, isAlreadyUser.password)
            if(!passwordMatch) {
                return res.status(401).json({
                    message: 'Invalid Credentials!!!'
                })
            }
            else{
                const token = jwt.sign({userId: isAlreadyUser._id}, jwtSecret)
                res.cookie('auth-token', token)
                return res.status(200).json({
                    message: 'Authorized User, Valid Credentials!!!',
                })
            }
        } else {
            res.status(404)
            return res.json({
                message: 'User not found!!!'
            })
        }
    } catch(error){
        res.status(500)
        return res.json({
            message: `Server Error: ${error}`
        })
    }
}