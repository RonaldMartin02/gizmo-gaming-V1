// Building a 'user' model with the following properties:
// username: String
// email: String
// password: String
// joinDate: Date
// lastAccessed: Date
// buildPosts: Array
import {Schema, model} from 'mongoose';

const userSchema = new Schema({
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

const User = model('User', userSchema);

export default User;
