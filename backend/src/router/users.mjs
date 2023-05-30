import express from 'express';
import { getUser, getUsers, createUser } from '../controller/users.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();


// getUser
router.get('/:name', authenticate, async (req, res) => {
    const { name } = req.params;
    const result = await getUser(name);
    res.status(200).json(result);
});


// getAllUser
router.get('/', async (req, res) => {
    try{
        const results = await getUsers();
        res.status(200).json(results);
    }
    catch(err){
        res.status(400).json({error: err});
    }
});


// saveUser
router.post('/', async (req, res) => {
    const result = await createUser(req.body);
    res.status(200).json(result);
});

export default router;