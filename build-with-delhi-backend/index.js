import express from 'express'
const app = express()
import { mainRouter } from './routes/index.js'
import cors from 'cors'

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v1', mainRouter)

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})