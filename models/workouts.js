const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const workoutsSchema = Schema({
//   date: { type: Date, required: true},
//   workout: {type: String, required: true},
//   notes: [String]
//
// });

const workoutsSchema = mongoose.Schema({
    date: Date,
    run: Boolean,
    weights: Boolean,
    notes: String

});

const Workouts = mongoose.model('Workouts', workoutsSchema);

module.exports = Workouts;
