
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: Number, required: true, min: 0 },
    image: { type: String },
    description: { type: String, required: true }
  },
  { collection: 'trips' } 
);

module.exports = mongoose.model('Trip', tripSchema);

