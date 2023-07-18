const express = require('express');
const settingUpdateRouter = express.Router();
const UserSettings = require('../../Database/model/settings');
const formModel = require('../../Database/model/formModel');


settingUpdateRouter.post('/', async (req, res) => {
    const { userId, settings } = req.body;

    console.log(settings);

    try {
        const userSettings = await UserSettings.findOne({ userId });
        // Update only the specified keys in the settings object
        Object.assign(userSettings, settings);
        await userSettings.save();
        res.send({ success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = settingUpdateRouter;