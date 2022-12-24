const express = require('express')
const dotenv = require('dotenv').config()
const {router} = require('./routes/openaiRoutes.js')

const port = process.env.PORT || 5000;

const app = express();

app.use('/openai', router)

app.listen(port, () => console.log(`running on port ${port}`))
