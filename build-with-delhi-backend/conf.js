import dotenv from 'dotenv'
dotenv.config()
export const jwtSecret = process.env.JWT_SECRET
export const mongoUrl = process.env.DATABASE_URL
export const API_KEY=process.env.API_KEY