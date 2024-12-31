import mongosee from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// Connection string of database
const connectionString = process.env.CONNECTION_STRING

try{
    mongosee.connect(connectionString)
    console.log('MongoDB.js connected successfully to database')
}catch(error){
    console.log('MongoDb.js Have error: ', error)
}

export default mongosee