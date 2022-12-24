import express from 'express'
import * as dotenv from 'dotenv'
import {openaiRouter} from './routes/openaiRoutes.js'
dotenv.config()
const port = process.env.PORT || 5000;

const app = express();

app.use('/openai', openaiRouter)

app.listen(port, () => console.log(`running on port ${port}`))
