const express = require('express');
const router = express.Router();
const Workouts = require('../models/workouts.js');


router.post('/', (req, res)=>{
  if(req.body.run === 'on'){
    req.body.run = true;
  } else {
    req.body.run = false;
  };
  if(req.body.weights === 'on'){
    req.body.weights = true;
  } else {
    req.body.weights = false;
  };

  Workouts.create(req.body, (err, createdWorkouts)=>{
  // if (req.body.intensity = 1){
  //   res.redirect('/workouts/1intensity');
  // } else if
  //   (req.body.intensity = 2){
  //     res.redirect('/workouts/2intensity');
  // }  else if
  //   (req.body.intensity = 3){
  //     res.redirect('/workouts/3intensity');
  //   }
  // });

    res.redirect('/workouts/intensity');
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
router.get('/2intensity', (req, res)=>{
  res.render('ratings/two.ejs')
})
router.get('/3intensity', (req, res)=>{
  res.render('ratings/three.ejs')
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

router.put('/:id', (req, res)=>{
  Workouts.findByIdAndUpdate(req.params.id, req.body, ()=>{
    res.redirect('/workouts');
  });
});





module.exports = router;
