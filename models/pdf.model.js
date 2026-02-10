const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
    title:String,
    subject:String,
    fileurl:String
})

module.exports = mongoose.model('Pdf',pdfSchema)