
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    videourl: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['live', 'recorded', 'download'],
        default: 'recorded'
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);





