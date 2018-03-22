const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(session({
  secret:'färgglad sköldpadda',
  resave: false,
  saveUninitialized: false
}))

app.use(express.urlencoded({extended:false}));

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

//index route
app.get('/', (req, res)=>{
  res.render('index.ejs', {
    currentUser: req.session.currentuser
  });
});


mongoose.connect('mongodb://localhost:27017/workout');

mongoose.connection.once('open', ()=>{
  console.log('mongods are here');
})

app.listen(3000, ()=>{
  console.log('lyssnande');
});
