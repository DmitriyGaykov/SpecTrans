const express = require('express')
const routes = new express()

const validationMiddleware = require('./middleware/validationMiddleware')
const editMiddleware = require('./middleware/editMiddleware')
const availableMiddleware = require('./middleware/availableMiddleware')
const questionMiddleware = require('./middleware/questionMiddlewares')
const hisAuthorizeMiddleware = require('./middleware/hisAuthorizedMiddleware')
const himAdminMiddleware = require('./middleware/himAdminMiddleware')
const generateTokenObjectMiddleware = require("./middleware/generateTokenObjectMiddleware");

const getCategoriesController = require('./controllers/getCategories')
const getMaterialsByCategoryController = require('./controllers/getMaterialsByCategory')
const addMaterialController = require('./controllers/addMaterial')
const signUpController = require('./controllers/signUp')
const logInController = require('./controllers/logIn')
const loginWithTokenController = require('./controllers/logInWithToken')
const editMaterialInfoController = require('./controllers/editMaterialInfo')
const dellMaterialController = require('./controllers/dellMaterial')
const addQuestionController = require("./controllers/addQuestion");
const getQuestionsController = require('./controllers/getQuestions')
const dellQuestionController = require('./controllers/dellQuestion')

routes.get('/api/categories', getCategoriesController)
routes.get('/api/category/:categoryId/materials', getMaterialsByCategoryController)
routes.get('/api/questions', [generateTokenObjectMiddleware, himAdminMiddleware], getQuestionsController)

routes.post('/api/add-material', addMaterialController)
routes.post('/api/auth/reg', [...validationMiddleware], signUpController)
routes.post('/api/auth/login', [...validationMiddleware.slice(0, 1)], logInController)
routes.post('/api/auth/token-login', loginWithTokenController)
routes.post('/api/add-question', [...questionMiddleware], addQuestionController)

routes.put(
    '/api/materials/edit/:id',
    [generateTokenObjectMiddleware, availableMiddleware, editMiddleware],
    editMaterialInfoController)

routes.delete(
    '/api/materials/dell/:id',
    [generateTokenObjectMiddleware, availableMiddleware],
    dellMaterialController
)
routes.delete(
    '/api/questions/dell/:id',
    [generateTokenObjectMiddleware, himAdminMiddleware],
    dellQuestionController
)

module.exports = routes