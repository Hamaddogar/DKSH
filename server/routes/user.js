const express = require('express');
const DevelopersSkelton = require('../models/Developers');
const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    try {
        const users = await DevelopersSkelton.find({});
        res.send({ success: true, users });
    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

userRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await DevelopersSkelton.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});



module.exports = userRouter;
