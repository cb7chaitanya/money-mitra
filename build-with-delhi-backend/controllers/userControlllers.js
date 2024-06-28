import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import { jwtSecret } from '../conf.js'
import mongoose from 'mongoose'
import { mongoUrl } from '../conf.js'

mongoose.connect(mongoUrl).then(() => {
    console.log('Database connected')
}).catch((e) => {
    console.log(e)
    console.log('Database not connected')
})

export const signup = async (req, res) => {
    const { name, email, password } = req.body
    try{
        const isExisting = await User.findOne({email: email})
        if(isExisting){
            res.status(400)
            return res.json({
                message: 'User already exists'
            })
        }
        const user = await User.create({ name, email, password })
        return res.json({
            token: jwt.sign({ userId: user._id }, jwtSecret)
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
        const isAlreadyUser = await User.findOne({
            email: email
        })
        if(isAlreadyUser) {
            if(isAlreadyUser.password != password){
                res.status(401)
                return res.json({
                    message: 'Invalid Credentials!!!'
                })
            }
            else{
                const token = jwt.sign({userId: isAlreadyUser._id}, jwtSecret)
                res.status(200)
                return res.json({
                    message: 'Authorized User, Valid Credentials!!!',
                    token
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