// Building a 'user' model with the following properties:
// username: String
// email: String
// password: String
// joinDate: Date
// lastAccessed: Date
// buildPosts: Array

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  joinDate: { 
    type: Date, 
    default: Date.now 
  },
  // lastAccessed: { type: Date, default: Date.now },
  buildPosts: { 
    type: Array, 
    required: false 
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
