const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Workouts = require('./models/workouts.js');

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));


//controllers
const workoutsController = require('./controllers/workouts.js');
app.use('/workouts', workoutsController);

//index route
app.get('/', (req, res)=>{
  res.render('index.ejs');
});


mongoose.connect('mongodb://localhost:27017/workouts');

mongoose.connection.once('open', ()=>{
  console.log('there is no mongod');
});

app.listen(3000, ()=>{
  console.log('lyssnande');
})
