const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
  title:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    Content:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Notes',notesSchema)

