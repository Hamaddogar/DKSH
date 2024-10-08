const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSettingsSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    darkTheme: {
        type: Boolean,
        default: false,
    },
});

const UserSettings = mongoose.model('UserSettings', userSettingsSchema);

module.exports = UserSettings;
