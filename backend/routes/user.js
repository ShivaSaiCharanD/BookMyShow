import express from 'express';
import User from '../model/user';
import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/login', async(req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username:username});
    const Bcrpassword = await bcrypt.compare(password, user.password);
    if(!user) {
        return res.status(400).json({ error: 'User not found' });
    }
    if(!Bcrpassword) {
        return res.status(400).json({ error: 'Password is incorrect' });
    }
    res.send('Login');
});