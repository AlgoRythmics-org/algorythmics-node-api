const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

const app = express();
app.use(bodyParser.json());
app.use(cors());


const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

// Routes
//app.use('/', require('./routes/algorithm'));
//app.use('/', require('./routes/video'));
//app.use('/', require('./routes/animation'));
app.use('/', require('./routes/quiz'));

app.listen(5000);