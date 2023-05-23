const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    hourlyRate: Number,
    avatar: String,
    verified: Boolean,
    description: String,
    category: String,
    revneue: Number,
    jobs: {
        completed: Number,
        cancelled: Number,
        inProgress: Number
    },
    services: [{
        _id: String,
        title: String,
        description: String,
        comments: [{
            projectHeading: String,
            description: String,
            commentDate: String,
            rated: Number,
            price: Number
        }],
        profile: [String]
    }],
    comments: [{
        Heading: String,
        title: String,
        date: String,
        rated: Number
    }],
    specialization: [String],
    projectsThumbs: [String],
});

const Developers = mongoose.model('Developers', developerSchema);

module.exports = Developers;
