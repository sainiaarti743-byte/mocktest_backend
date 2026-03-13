const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: String,
    default: 'student'
  }
}, { timestamps: true });

module.exports = mongoose.model('Login', loginSchema);

