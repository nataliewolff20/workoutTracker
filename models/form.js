const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = Schema({
  date: Date,
  run: Boolean,
  weights: Boolean,
  yoga: Boolean,
  intensity: {type: Number, min: 1, max:5},
  notes: String
})

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
