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
//const insertAlgorithm = require('./dataInsertion/algorithmData');

 // Insert data into database
//  insertVideo.insertVideoData({
//     video_name: 'Shell-sort with Hungarian (Székely) folk dance',
//     link: 'https://www.youtube.com/watch?v=CmPA7zE8mx0&t=9s'
//   });

// insertAlgorithm.insertAlgorithmData({
//     algorithm_name: 'Bubble sort',
//     algorithm_type: 'Sorting',
//     description: 'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.',
//     visualization_type: 'Hungarian folk dance',
//     complexity: 'Easy',
//     difficulty: 'best-case',
//     implementation_type: 'comparison-based',
//     visualization_type: 'folk dance'
// })

// Import your models
const Video = require('./models/videoModel'); 
const Algorithm = require('./models/algorithmModel')

// Import the routers
const videoRouter = require('./routes/videoRouter.js');
const algorithmRouter = require('./routes/algorithmRouter.js')

// Use the routers with different paths
app.use('/api/video', videoRouter);
app.use('/api/algorithm', algorithmRouter);