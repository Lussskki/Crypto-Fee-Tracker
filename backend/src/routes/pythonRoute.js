import express from 'express'
import calculate from '../controllers/calcController.js'

const calcRoute = express.Router()

calcRoute.post('/calculate', calculate)

export default calcRoute