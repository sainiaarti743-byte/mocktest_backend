
const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
    ,
    teacher:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    },
    meetingLink:{
        type:String,
        required:true
    },
})


module.exports = mongoose.model('OnlineClass',classSchema);


