import { jwtSecret } from "../conf";
import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization || req.headers.Authorization
    if(!header){
        return res.status(403).json({
            msg: 'Unauthorized user, missing headers'
        })
    }

    const parts = header.split('')
    if(parts.length != 2 || parts[0] !== 'Bearer'){
        return res.status(403).json({
            msg: 'Unauthorized user, incorrect token format or insufficient token data'
        })
    }
    const token = parts[1]
    try {
        const verified = jwt.verify(token, jwtSecret)
        req.userId = verified._id
        next()
    } catch(error) {
        return res.status(403).json({
            msg: "Unauthorized User, incorrect credentials or token mismatch"
        })
    }
}

