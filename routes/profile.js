const express = require('express');
const router = express.Router();
// const User = require("../models/user");
const Place = require("../models/place");
const ObjectId = require('mongodb').ObjectId;

router.get("/", (req, res, next) =>{
    if (req.session.currentUser) {
        next();
    } else {
        res.redirect("/auth/login");
    }
}, (req, res, next) => {
    const ownerID = req.session.currentUser._id;
    Place.find({'owner': ObjectId(ownerID)})
    // .populate('owner')
    .then (myplaces => {
        console.log(myplaces);
        res.render('profile', {myplaces});
    })
    .catch (error => {
        next(error);
    });
});
 

module.exports = router;

