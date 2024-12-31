import { compare } from "bcrypt"
import User from "../database/mongoSchema/schema.js"
import generateToken from "../utils/jwt.js"

const login = async (req, res) =>{
    const {username, password} = req.body

    // Both credential are neccesary for login 
    if (!username || !password) {
        return res.status(400).json({message: 'Both nick and password are necessary'}) 
    }

    try{
        // Find nick
        const user = await User.findOne({username})
        // console.log(`Login: `,user)
        // User not find
        if (!user) {
            return res.status(401).json({message:'User not found'})
        }
        // Compare to hashed password
        const isValidPass = await compare(password, user.password) 
        if (!isValidPass) {
            res.status(401).json({message: 'Invalid nick or password'})
        }
        // Generating token
        const token = generateToken(user._id)
        // console.log(`Login token: `,token)
        // Send token to successfuly login
        return res.status(200).json({message: 'Login successfull', token})
    }catch(error){
        console.log(error)
        return res.status(500).json({message: 'Login: Error during login', error})
    }

}
export default login