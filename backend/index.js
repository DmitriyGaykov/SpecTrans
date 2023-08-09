const express = require('express')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const mongoose = require('mongoose')
<<<<<<< HEAD
const fileUpload = require('express-fileupload')
require('dotenv').config()

const PORT = process.env.PORT
=======
require('dotenv').config()

const PORT = process.env.PORT || 3001
>>>>>>> 7969a4b02ee6d5ccb5464fcb88dce7df81ce3b95

const app = new express()

app.use(expressSession({
    secret: "hello world"
}))
<<<<<<< HEAD

app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static('backend/public'))
=======
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
>>>>>>> 7969a4b02ee6d5ccb5464fcb88dce7df81ce3b95

mongoose.connect(process.env.STRINGCONNECTION, { useNewUrlParser: true }).then(() => {
    console.log('MongoDb was connected')
})

const getCategoriesController = require('./controllers/getCategories')
<<<<<<< HEAD
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
=======

app.get('/api/categories', getCategoriesController)
>>>>>>> 7969a4b02ee6d5ccb5464fcb88dce7df81ce3b95

app.listen(PORT, () => {
    console.log(`Server started working with port ${PORT}`)
})