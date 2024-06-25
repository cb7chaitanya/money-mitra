import dotenv from 'dotenv'

export const jwtSecret = process.env.JWT_SECRET
export const mongoUrl = process.env.DATABASE_URL