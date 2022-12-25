const path = require('path')
const express = require('express')
const cors = require('cors');

const dotenv = require('dotenv').config()
const { router } = require('./routes/openaiRoutes.js')

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')));


app.use('/openai', router)

app.listen(port, () => console.log(`running on port ${port}`))
