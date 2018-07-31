const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/*USE protected route*/

router.use((req, res, next) =>{
  if(req.session.currentUser) {
    next();
  } else{
    res.redirect("/auth/login");
  }
});

/* GET places type listing. */
router.get('/', function(req, res, next) {
  const placeType = req.query.type;
  Place.find({type: placeType})
    .then((filteredlist) => {
      res.render('places/list', {
        places:filteredlist,
        type: placeType
      });
    })
    .catch(error =>{
      console.log('error', error);
    })
});


/* GET place detail. */
router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  Place.findById(id)
    .then((place) => {
      res.render('places/detail', place );
    })
    .catch(error =>{
      console.log('error', error);
    })
});

module.exports = router;