const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const apiPort = 8080


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: 'https://movie-task-eta.vercel.app' }))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
