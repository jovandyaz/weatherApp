// Server setup
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const api = require('../server/routes/api')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/weatherDB', { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Serving FILES
// app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))
app.use('/', api)


const PORT = 8080
// Server listening
app.listen(process.env.PORT || PORT, () => console.log(`Running server on http://localhost:${PORT}`))
