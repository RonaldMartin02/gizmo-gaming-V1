// Building a 'user' model with the following properties:
// username: String
// email: String
// password: String
// joinDate: Date
// lastAccessed: Date
// buildPosts: Array
const Bcrypt = require('bcrypt');
const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  // id: {
  //   type: Number,
  //   required: true
  // },
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  password: { 
    type: String, 
    required: true, 
  },
  joinDate: { 
    type: Date, 
    default: Date.now 
  },
  // lastAccessed: { type: Date, default: Date.now },
  builds: { 
    type: Schema.Types.ObjectId,
    ref: 'Build'
  },
});

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await Bcrypt.hash(this.password, saltRounds);
  }
  next();
}
);

userSchema.methods.isCorrectPassword = async function(password) {
  return Bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;
