import express from 'express';
import { getUser, getUsers, createUser } from '../controller/users.mjs';

const router = express.Router();


// getUser
router.get('/:name', async (req, res) => {
    const { name } = req.params;
    const result = await getUser(name);
    res.status(200).json(result);
})


// getAllUser
router.get('/', async (req, res) => {
    const results = await getUsers();
    res.status(200).json(results);
});


// saveUser
router.post('/', async (req, res) => {
    const result = await   createUser(req.body);
    res.status(200).json(result);
})

export default router;