const express = require('express')
const routes = new express()

const validationMiddleware = require('./middleware/validationMiddleware')
const editMiddleware = require('./middleware/editMiddleware')
const availableMiddleware = require('./middleware/availableMiddleware')
const questionMiddleware = require('./middleware/questionMiddlewares')
const himAdminMiddleware = require('./middleware/himAdminMiddleware')
const generateTokenObjectMiddleware = require("./middleware/generateTokenObjectMiddleware");

const materialController = require('./controllers/materialsController')
const questionController = require('./controllers/questionController')
const categoryController = require('./controllers/categoryController')
const authController = require('./controllers/authController')

routes.get('/api/categories', categoryController.getCategory)
routes.get('/api/category/:categoryId/materials', materialController.getMaterialsByCategory)
routes.get('/api/questions', [generateTokenObjectMiddleware, himAdminMiddleware], questionController.getQuestions)

routes.post('/api/add-material', materialController.addMaterial)
routes.post('/api/auth/reg', [...validationMiddleware], authController.signUp)
routes.post('/api/auth/login', [...validationMiddleware.slice(0, 1)], authController.logIn)
routes.post('/api/auth/token-login', generateTokenObjectMiddleware, authController.logInWithToken)
routes.post('/api/add-question', [...questionMiddleware], questionController.addQuestion)

routes.put(
    '/api/materials/edit/:id',
    [generateTokenObjectMiddleware, availableMiddleware, editMiddleware],
    materialController.editMaterialInfo)

routes.delete(
    '/api/materials/dell/:id',
    [generateTokenObjectMiddleware, availableMiddleware],
    materialController.dellMaterial
)
routes.delete(
    '/api/questions/dell/:id',
    [generateTokenObjectMiddleware, himAdminMiddleware],
    questionController.dellQuestion
)

module.exports = routes