import express from 'express';
import { getUser, saveUser, getAllUsers } from '../services/users.mjs';

const router = express.Router();


// getUser
router.get('/:name', async (req, res) => {
    const { name } = req.params;
    
    const result = await getUser(req.params.name);
    res.status(200).json(result);
  })
  
  // getAllUser
  router.get('/', async (req, res) => {
    const results = await getAllUsers();
    res.status(200).json(results);
  });
  
  // saveUser
  router.post('/', async (req, res) => {
    const user = req.body;
  
    const existingUser = getUser(user.name);
  
    if(existingUser){
      return res.status(400).send('User already exists!');
    }
  
    user.createDate = Date.now();
    
    const result = await saveUser(user);
  
    res.status(200).json(result);
  })
  
  export default router;