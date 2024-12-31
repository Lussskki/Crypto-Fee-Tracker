import User from "../database/mongoSchema/schema.js"
// To hash passwords
import bcrypt from 'bcrypt'
// // Token
// import generateToken from '../utils/jwt.js'
const saltRounds = 10

const signup = async (req, res) => {
  // Test console.log
  // console.log(`Sign up Request body from controller: `, req.body)
  // Necessary information from request body
  const {username, password} = req.body
   
  // Check Password characters 
  if ( password.length <8 || password.length > 16 ) {
      return res.status(400).json({message: `Password must be between 8 to 16 characters`})
  } 

  try{
      // Check email already exist
      const existingUser = await User.findOne({ username })
      if (existingUser) {
          return res.status(400).json({message: 'Username is already exists'})
      }
      
      // Hash password
      const hashedPassword = await bcrypt.hash( password, saltRounds )
      
      // Create new instance of User
      const newUser = new User({ username, password: hashedPassword})
      await newUser.save()
      
      // Exclude password from the response
      const { password: _, ...userWithoutPassword } = newUser.toObject()
      
      console.log('Signup completed')
      return res.status(201).json({message: 'Signup completed', user: userWithoutPassword})
  }catch(error){
      console.log(error)
      return res.status(500).json({message: 'Error with signup: ', error})
  }
  
  
}

export default signup
