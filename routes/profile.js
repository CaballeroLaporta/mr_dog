const express = require('express');
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res, next) =>{
    if (req.session.currentUser) {
        next();
    } else {
        res.redirect("/auth/login");
    }
}, (req, res, next) => {
    res.render('profile')
})
 

module.exports = router;

