const express = require('express');
const Developers = require('../models/Developers');
const JobsSkelton = require('../models/Jobs');

const userRouter = express.Router();

userRouter.get('/user', async (req, res) => {
    try {
        const users = await Developers.find({});
        res.send({ success: true, users });
    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

userRouter.get('/jobss', async (req, res) => {
    try {
        const jobList = await JobsSkelton.find({});
        res.json({ success: true, list: jobList });

    } catch (error) {
        console.error('Error retrieving user data:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});



module.exports = userRouter;
