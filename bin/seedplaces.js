const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db');
const Place = require('../models/place');

const places = [
  {
    name:  "string",
    description:  "type",
    location: "string",
    imgUrl: [_img]
  }
]

Place.create(places)
  .then((data) => {
    console.log('ok')
    mongoose.connection.close()
  })
  .catch(error => {
    console.log(error)
    mongoose.connection.close()
  });