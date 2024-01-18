const mongoose = require('mongoose');
const { Video } = require('../models/videoModel'); 

async function insertVideoData(videoData) {
  try {
    const createdVideo = await Video.create(videoData);
    console.log('Inserted successfully:', createdVideo.toJSON());
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
  }
}

module.exports = { insertVideoData };