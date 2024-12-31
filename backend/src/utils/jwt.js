import jwt from 'jsonwebtoken'
// To hash
import dotenv from 'dotenv'
dotenv.config()


const generateToken = (_id, username) => {
    const jwtSecret = process.env.JWT_SECRET
    return jwt.sign(
        {_id, username},
        jwtSecret,
        {expiresIn: '1h'}
        
    )
    
}

export default generateToken