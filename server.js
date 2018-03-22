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

const mongoURI =  process.env.MONGODB_URI || 'mongodb://localhost:27017/workout';
mongoose.connect(mongoURI);

mongoose.connection.once('open', ()=>{
  console.log('mongods are here');
})

const port = process.env.PORT || 3000;
app.listen( port, ()=>{
  console.log('lyssnande');
});
