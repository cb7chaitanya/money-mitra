import express from 'express'
export const loanRouter = express.Router()

loanRouter.post('/hdfc')
loanRouter.post('/icici')
loanRouter.post('/kotak')
loanRouter.post('/sbi')
loanRouter.post('/axis')
loanRouter.get('/bulk')
loanRouter.get('/hdfc')
loanRouter.get('/icici')
loanRouter.get('/kotak')
loanRouter.get('/sbi')
loanRouter.get('/axis')