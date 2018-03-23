const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const Form = require('../models/form.js');
const mongoose = require ('mongoose');

//create route
router.post ('/workoutlog', (req, res)=>{
  res.send(req.body);
  res.redirect('/sessions/workouts/index')
});

router.get('/workouts/index', (req, res)=>{
  res.render('workouts/index.ejs');
});

//new route (wkout form)
router.get('/form', (req, res)=>{
  res.render('sessions/form.ejs');
});

//login
router.get('/new', (req, res)=>{
  res.render('sessions/new.ejs');
});





router.post('/', (req, res)=>{
  User.findOne({username: req.body.username},
    (err, foundUser)=>{
    if(bcrypt.compareSync(req.body.password,foundUser.password)){
      req.session.currentuser = foundUser;
      res.redirect('/');
    } else {
      res.send('wrong password');
    }
  });
});

router.delete('/', (req, res)=>{
  req.session.destroy(()=>{
    res.redirect('/');
  });
});

module.exports = router;
