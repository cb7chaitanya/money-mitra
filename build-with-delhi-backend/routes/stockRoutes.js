import express from 'express'
export const stockRouter = express.Router()
import { earnings_symbol,ipo,company_overview,top_gainers,global_quote } from '../controllers/stockControllers.js'

stockRouter.get('/earnings/:symbol',earnings_symbol) //http://localhost:3000/api/v1/stock/earnings/:symbol
stockRouter.get('/ipo-calendar',ipo)
stockRouter.get('/overview/:symbol',company_overview)
stockRouter.get('/top-gainers-losers',top_gainers)
stockRouter.get('/global-quote/:symbol',global_quote)


