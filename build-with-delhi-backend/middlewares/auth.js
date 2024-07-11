import { jwtSecret } from "../conf.js";
import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const header = req.cookies['auth-token']
    if(!header){
        return res.status(403).json({
            msg: 'Unauthorized user, missing headers'
        })
    }
    try {
        const verified = jwt.verify(header, jwtSecret)
        req.userId = verified._id
        next()
    } catch(error) {
        return res.status(403).json({
            msg: "Unauthorized User, incorrect credentials or token mismatch"
        })
    }
}

