const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Review = require('../model/review-model');

dotenv.config({ path: './config.env' });
const reviews = require('./data.json');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log('connection estabilshed');
});

const importData = async () => {
  try {
    await Review.create(reviews);
    console.log('Successfully imported');
  } catch (err) {
    console.log('error occured');
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Review.deleteMany();
    console.log('Successfully deleted');
  } catch (err) {
    console.log('error occured');
  }
  process.exit();
};

if (process.argv[2] == '--import') importData();
else if (process.argv[2] == '--delete') deleteData();
