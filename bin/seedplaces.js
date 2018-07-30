const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/placesdb');
const Place = require('../models/place');

const places = [
  {
    name:  "Bar Pepe",
    type: "bar",
    description:  "cañas y tapas",
    location: "Carrer de Provença, 115",
    imgUrl:0
  },
  {
    name:  "Milenium",
    type: "bar",
    description:  "club nocturno de copas",
    location: "Carrer de Mallorca, 21",
    imgUrl:0
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