const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  img: {
    type : String,
    required : true
  },
  name: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
