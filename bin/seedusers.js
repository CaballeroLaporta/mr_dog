const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mr-dog-db');
const User = require('../models/user');

const users = [
  {
    username:  "string",
    email:  "string",
    password:  "string",
    favourites: [_id],
    myplaces: [_id]
  }
]

User.create(users)
  .then((data) => {
    console.log('ok')
    mongoose.connection.close()
  })
  .catch(error => {
    console.log(error)
    mongoose.connection.close()
  });