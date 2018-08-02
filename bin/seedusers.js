const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const User = require('../models/user');


User.collection.drop();

const users = [
  {
    username:  "Thor",
    email:  "thor@hotmail.com",
    password:  "1234",
    favourites: 0,
    myplaces: 0
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