const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const user = require("../models/user");


router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const {username, email, password} = req.body;
  if(!username || !email || !password) return res.render('auth/signup', {message: 'The fields can not be empty'});
  User.findOne({email})
    .then(user=>{
      if(user){
        return res.render('auth/signup', {message: 'This email is not available'});
      } else {
        const salt     = bcrypt.genSaltSync(saltRounds);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser  = new User({username, email, password: hashPass});
        return newUser.save();
      }
    })
    .then(user => {
      req.sesion.currentUser = user;
      res.redirect("/");
    })
    .catch(error=>{
      next(error);
    })
  });


module.exports = router;
