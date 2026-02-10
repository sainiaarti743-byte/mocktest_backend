const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
title :String,
subject:String,
content:String


})

module.exports = mongoose.model('Notes',notesSchema)