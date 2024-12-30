// Import express for server handling
import express from 'express'
// Import body parser for handling json files
import bodyParser from 'body-parser'
// Import dotenv for security
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/', (req,res) => {
    console.log('Api running')
})

app.listen(3000, () => {
    console.log('Server listens on http://localhost:3000')
})
