import express from 'express'
import loginController from '../controllers/loginController.js'

const routeLogin = express.Router()

// login method to profile
routeLogin.post('/', loginController)

export default routeLogin