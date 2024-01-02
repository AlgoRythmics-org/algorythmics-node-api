const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const connectDB = require('./config/db');
// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

app.listen(5000);

//const insertVideo = require('./dataInsertion/videoData');

 // Insert data into database
//  insertVideo.insertVideoData({
//     video_name: 'Shell-sort with Hungarian (Székely) folk dance',
//     link: 'https://www.youtube.com/watch?v=CmPA7zE8mx0&t=9s'
//   });

// Import your models
const Video = require('./models/videoModel'); 

// Import the routers
const videoRouter = require('./routes/videoRouter.js');

// Use the routers with different paths
app.use('/api/video', videoRouter);