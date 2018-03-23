const express = require('express');
const router = express.Router();
const Workouts = require('../models/workouts.js');


router.post('/', (req, res)=>{
  Workouts.create(req.body, (err, createdWorkouts)=>{
    // res.send(req.body);
    res.redirect('/workouts');
  });
});

router.get('/', (req, res)=>{
  Workouts.find({}, (err, foundWorkouts)=>{
    res.render('workouts/index.ejs', {
      workouts: foundWorkouts
    });
  });
});

router.get('/intensity', (req, res)=>{
  res.render('workouts/intensity.ejs')
})

router.get('/1intensity', (req, res)=>{
  res.render('ratings/one.ejs')
})




router.delete('/:id', (req, res)=>{
  Workouts.findByIdAndRemove(req.params.id, ()=>{
    res.redirect('/workouts');
  });
});

router.get('/new', (req, res)=>{
  res.render('workouts/new.ejs');
});

//edit route
router.get('/:id/edit', (req, res)=>{
	Workouts.findById(req.params.id, (err, foundWorkouts)=>{
		res.render('workouts/edit.ejs', {
			workouts: foundWorkouts
		});
	});
});

router.get('/:id', (req, res)=>{
  Workouts.findById(req.params.id, (err, foundWorkouts)=>{
    res.render('workouts/show.ejs', {
      workouts: foundWorkouts
    });
  });
});






module.exports = router;
