const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");
const fileUpload = require('express-fileupload')
require('dotenv').config()

const PORT = process.env.PORT

const app = new express()
const routes = require('./routes')

app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static('backend/public'))
app.use(cookieParser())

app.use(routes)

mongoose.connect(process.env.STRINGCONNECTION, { useNewUrlParser: true }).then(() => {
    console.log('MongoDb was connected')
})

app.listen(PORT, () => {
    console.log(`Server started working with port ${PORT}`)
})