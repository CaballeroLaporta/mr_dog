const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mr-dog-db');
const Place = require('../models/place');

const places = [
  {
    name:  "Bar Ramon",
    type: "bar",
    description:  "cócteles y homenaje al jazz",
    location: "Carrer del Compte borrel, 81",
    imgUrl:0
  },
  {
    name:  "Muak Arepa Bar",
    type: "bar",
    description:  "restaurante de comida venezolaza",
    location: "Carrer de Buenaventura Muñoz, 12",
    imgUrl:0
  },
  {
    name:  "El Perro Blu",
    type: "bar",
    description:  "Acogedora taberna con vermmús y tapas",
    location: "Carrer del parlament, 25",
    imgUrl:0
  },
  {
    name:  "Hotel claris",
    type: "accomodation",
    description:  "Hotel céntrico con servicio exclusivo para perros",
    location: "Carrer Pau Claris, 12, ",
    imgUrl:0
  },
  {
    name:  "Hotel Rekord",
    type: "accomodation",
    description:  "Hotel moderno con piscina exterior y bar",
    location: "Carrer de muntaner, 352",
    imgUrl:0
  },
  {
    name:  "Hotel Silken Sant Gervasi",
    type: "accomodation",
    description:  "Hotel tranquilo con restaurante y bar",
    location: "Carrer de Sant Gervasi de Cassiles, 26",
    imgUrl:0
  },
  {
    name:  "Rock 01",
    type: "store",
    description:  "complementos y ropa infaltil de 0 a 8",
    location: "Carrer de Bonavista, 16",
    imgUrl:0
  },
  {
    name:  "GreenLifeStyle",
    type: "store",
    description:  "tienda de ropa ecológica",
    location: "Carrer del Torrent de l'Olla, 95",
    imgUrl:0
  },
  {
    name:  "Organic Market Diagonal",
    type: "store",
    description:  "supermercado natural",
    location: "Avinguda Diagonal, 430",
    imgUrl:0
  },
  {
    name:  "Playa de Levant",
    type: "beach",
    description:  "Espacio vallado al lado fel forum",
    location: "Passeig Maritim del Bogatell, 145",
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