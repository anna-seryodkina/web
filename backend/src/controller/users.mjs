import bcrypt from 'bcrypt';
import { getUser as getUserByName, saveUser, getAllUsers } from '../services/users.mjs';


const getUser = async (name) => {
  const result = await getUserByName(req.params.name);
  return result;
}


const getUsers = async () => {
  const results = await getAllUsers();
  return result;
}


const createUser = async (body) => {
  const existingUser = await getUserByName(body.name);

  console.log(existingUser);

  if(existingUser){
    return res.status(400).send('User already exists!');
  }

  const user = {
    name: body.name,
    email: body.email,
    passwordHash: bcrypt.hashSync(body.password, 8),
    createDate: Date.now()
  }
  
  const result = await saveUser(user);

  res.status(200).json(result);
}


export {
  getUser,
  getUsers,
  createUser
}
