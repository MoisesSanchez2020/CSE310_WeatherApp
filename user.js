const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  accessedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
