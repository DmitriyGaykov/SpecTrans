const express = require('express')
const routes = new express()

const getCategoriesController = require('./controllers/getCategories')
const getMaterialsByCategoryController = require('./controllers/getMaterialsByCategory')
const addMaterialController = require('./controllers/addMaterial')
const signUpController = require('./controllers/signUp')
const logInController = require('./controllers/logIn')
const loginWithTokenController = require('./controllers/logInWithToken')
const editMaterialInfoController = require('./controllers/editMaterialInfo')
const dellMaterialController = require('./controllers/dellMaterial')

const validationMiddleware = require('./middleware/validationMiddleware')
const editMiddleware = require('./middleware/editMiddleware')
const availableMiddleware = require('./middleware/availableMiddleware')

routes.get('/api/categories', getCategoriesController)
routes.get('/api/category/:categoryId/materials', getMaterialsByCategoryController)

routes.post('/api/add-material', addMaterialController)
routes.post('/api/auth/reg', [...validationMiddleware], signUpController)
routes.post('/api/auth/login', [...validationMiddleware.slice(0, 1)], logInController)
routes.post('/api/auth/token-login', loginWithTokenController)

routes.put(
    '/api/materials/edit/:id',
    [availableMiddleware, editMiddleware],
    editMaterialInfoController)

routes.delete(
    '/api/materials/dell/:id',
    availableMiddleware,
    dellMaterialController
)

module.exports = routes