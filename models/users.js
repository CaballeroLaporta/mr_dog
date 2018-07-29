const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  favorites: {type: [Schema.Types.ObjectId]},
  myplaces: {type: [Schema.Types.ObjectId]}
});

const User = mongoose.model('User', userSchema);

module.exports = User;