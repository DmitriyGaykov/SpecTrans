const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
require('dotenv').config()

const PORT = process.env.PORT

const app = new express()
const routes = require('./routes')
const {ca} = require("date-fns/locale");
const {startCleaner} = require("./scripts/questionsScript");

app.use(expressSession({
    secret: process.env.SESSIONSECRET
}))
app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static('backend/public'))
app.use(cookieParser())

app.use(routes)


const start = async () => {
    try {
        await mongoose.connect(process.env.STRINGCONNECTION, {useNewUrlParser: true})
        console.log('MongoDb was connected')
    } catch (e) {
        console.log('MongoDb dont connected')
        return;
    }

    startCleaner()

    app.listen(PORT, () => {
        console.log(`Server started working with port ${PORT}`)
    })
}

start()
