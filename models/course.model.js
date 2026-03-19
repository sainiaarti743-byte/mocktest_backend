
const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    title:String,
    price:String,
    thumbnail:String,
    category:String,
});

module.exports = mongoose.model('Course',courseSchema )







\