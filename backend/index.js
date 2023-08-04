const express = require('express')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT || 3001

const app = new express()

app.use(expressSession({
    secret: "hello world"
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

mongoose.connect(process.env.STRINGCONNECTION, { useNewUrlParser: true }).then(() => {
    console.log('MongoDb was connected')
})

const getCategoriesController = require('./controllers/getCategories')

app.get('/api/categories', getCategoriesController)

app.listen(PORT, () => {
    console.log(`Server started working with port ${PORT}`)
})