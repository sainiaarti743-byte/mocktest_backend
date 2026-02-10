const mongoose = require('mongoose');

const mockTestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    totalMarks: {
        type: Number,
        default: 0
    },
    time: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },


    questions: [
        {
            question: {
                type: String,
                required: true
            },
            options: {
                type: [String],
                validate: v => v.length === 4
            },
            answer: {
                type: String,
                required: true
            }
        }


    ]
}, { timestamps: true });
module.exports = mongoose.model("Mocktest", mockTestSchema)




