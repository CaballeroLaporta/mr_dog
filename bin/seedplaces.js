const mongoose = require('mongoose');
const mongoConnection = mongoose.connect(process.env.MONGODB_URI);
const Place = require('../models/place');

Place.collection.drop();

const places = [
  {
    name:  "Bar Ramon",
    type: "bars",
    description:  "cócteles y homenaje al jazz",
    location: "Carrer del Compte borrel, 81",
    imgUrl: "/images/bar-category.jpg"
  },
  {
    name:  "Muak Arepa Bar",
    type: "bars",
    description:  "restaurante de comida venezolaza",
    location: "Carrer de Buenaventura Muñoz, 12",
    imgUrl:"/images/bar-category.jpg"
  },
  {
    name:  "El Perro Blu",
    type: "bars",
    description:  "Acogedora taberna con vermmús y tapas",
    location: "Carrer del parlament, 25",
    imgUrl:"/images/bar-category.jpg"
  },
  {
    name:  "Hotel claris",
    type: "accomodations",
    description:  "Hotel céntrico con servicio exclusivo para perros",
    location: "Carrer Pau Claris, 12, ",
    imgUrl:"/images/accomodation-category.jpeg"
  },
  {
    name:  "Hotel Rekord",
    type: "accomodations",
    description:  "Hotel moderno con piscina exterior y bar",
    location: "Carrer de muntaner, 352",
    imgUrl:"/images/accomodation-category.jpeg"
  },
  {
    name:  "Hotel Silken Sant Gervasi",
    type: "accomodations",
    description:  "Hotel tranquilo con restaurante y bar",
    location: "Carrer de Sant Gervasi de Cassiles, 26",
    imgUrl:"/images/accomodation-category.jpeg"
  },
  {
    name:  "Rock 01",
    type: "stores",
    description:  "complementos y ropa infaltil de 0 a 8",
    location: "Carrer de Bonavista, 16",
    imgUrl:"/images/store-category.png"
  },
  {
    name:  "GreenLifeStyle",
    type: "stores",
    description:  "tienda de ropa ecológica",
    location: "Carrer del Torrent de l'Olla, 95",
    imgUrl:"/images/store-category.png"
  },
  {
    name:  "Organic Market Diagonal",
    type: "stores",
    description:  "supermercado natural",
    location: "Avinguda Diagonal, 430",
    imgUrl:"/images/store-category.png"
  },
  {
    name:  "Playa de Levant",
    type: "beaches",
    description:  "Espacio vallado al lado fel forum",
    location: "Passeig Maritim del Bogatell, 145",
    imgUrl:"/images/dog-default.jpg"
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