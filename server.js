const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config({ path: './config.env' });

const app = require('./app.js');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log('connection estabilshed');
});


const port = 3000;
app.listen(port, ()=>{
  console.log('listening at 3000')
});
