const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();

app.use(express.json());
const Review = require('./model/review-model');

let review = 'eqe';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const data = fs.readFileSync('./dev-data/template.html', 'utf-8');
// console.log(data)

const replace = (review, left_id, right_id)=>{
    

    let review_html = data.replace('%{NAME}%', review.name)
    review_html = review_html.replace('%{JOB}%', review.job)
    review_html = review_html.replace('%{DESCRIPTION}%', review.description)
    review_html = review_html.replace('%{IMG}%', review.img)
    review_html = review_html.replace('%{leftID}%', left_id)
    review_html = review_html.replace('%{rightID}%', right_id)

    return review_html
} 

app.get('/review-api/v1', async (req, res) => {
  try {
    let id = 1;
    if (req.query.id) {
      review = await Review.findOne(req.query);
      id = req.query.id*1;
    } else {
      review = await Review.findOne({ id: 1 });
    }

    const size = await Review.countDocuments();

    const left_id = id == 1 ? size : id - 1;
    const right_id = id == size ? 1 : id + 1;

    const review_html = await replace(review, left_id, right_id)
    console.log(review_html)


    res.send(review_html);
  } catch (err) {
    console.log('Error Happened ' + err);
  }
});

module.exports = app;
