const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId; 

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
  favorites: [{
    type: ObjectId,
    ref: 'Places'
  }],
  myplaces:[{
    type: ObjectId,
    ref: 'Places'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;