const express = require('express')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
require('dotenv').config()

const PORT = process.env.PORT

const app = new express()

app.use(expressSession({
    secret: "hello world"
}))

app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static('backend/public'))

mongoose.connect(process.env.STRINGCONNECTION, { useNewUrlParser: true }).then(() => {
    console.log('MongoDb was connected')
})

const getCategoriesController = require('./controllers/getCategories')
const getMaterialsByCategoryController = require('./controllers/getMaterialsByCategory')
const addMaterialController = require('./controllers/addMaterial')
const signUpController = require('./controllers/signUp')
const logInController = require('./controllers/logIn')
const loginWithTokenController = require('./controllers/logInWithToken')

app.get('/api/categories', getCategoriesController)
app.get('/api/category/:categoryId/materials', getMaterialsByCategoryController)

app.post('/api/add-material', addMaterialController)
app.post('/api/auth/reg', signUpController)
app.post('/api/auth/login', logInController)
app.post('/api/auth/token-login', loginWithTokenController)

app.listen(PORT, () => {
    console.log(`Server started working with port ${PORT}`)
})