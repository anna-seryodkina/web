import { getUser } from "../services/users.mjs";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const getToken = async (name, password) => {
    const existingUser = await getUser(name);

    if(!existingUser && bcrypt.compareSync(password, existingUser.passwordHash)){
        throw new Error('Not authorized !')
    }

    const accessToken = jwt.sign({ sub: existingUser._id }, 'punisher', {
        algorithm: 'HS256',
        expiresIn: '1h'
    })

    return {
        accessToken
    }
}

export {
    getToken
}