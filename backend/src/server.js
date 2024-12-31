// Import database
import './database/mongoDatabase.js'

// Import express for server handling
import express from 'express'
const app = express()

// Import body parser for handling JSON files
import bodyParser from 'body-parser'

// Routes
import signupRoute from './routes/signupRoute.js'
import loginRoute from './routes/loginRoute.js'

app.use(bodyParser.json())
app.use('/api/signup', signupRoute)
app.use('/api/login', loginRoute)

app.listen(3000, () => {
    console.log('Server listens on http://localhost:3000')
})
