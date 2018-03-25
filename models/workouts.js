const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const workoutsSchema = Schema({
//   date: { type: Date, required: true},
//   workout: {type: String, required: true},
//   notes: [String]
//
// });

const workoutsSchema = mongoose.Schema({
    date: String,
    type: String,
    notes: String

});

const Workouts = mongoose.model('Workouts', workoutsSchema);

module.exports = Workouts;
