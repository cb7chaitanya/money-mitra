import jwt from 'jsonwebtoken'
import { User } from '../models/user.js'
import { jwtSecret } from '../conf.js'

export const signup = async (req, res) => {
    const { name, email, password } = req.body
    try{
        const isExisting = await User.findOne({ email: email })
        if(isExisting){
            res.status(400)
            return res.json({
                message: 'User already exists'
            })
        }
        const user = await User.create({ name, email, password })
        return res.json({
            user: user._id,
            token: jwt.sign({ userId: user._id }, jwtSecret)
        })
    } catch (error) {
        console.log(error)
        return;
    }
}
