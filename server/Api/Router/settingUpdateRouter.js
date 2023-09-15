import express from 'express';
import UserSettings from '../../DB-Config/model/settings.js';
const settingUpdateRouter = express.Router();


settingUpdateRouter.post('/setting/update', async (req, res) => {
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

export default settingUpdateRouter;