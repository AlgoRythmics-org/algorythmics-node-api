const mongoose = require('mongoose');
const { Video } = require('../models/videoModel'); // Az elérési útvonalat a projekt struktúrájához igazítsd

async function insertVideoData(videoData) {
  try {
    const createdVideo = await Video.create(videoData);
    console.log('Inserted successfully:', createdVideo.toJSON());
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Ne felejtsd el lezárni a kapcsolatot, amikor kész vagy vele
    mongoose.connection.close();
  }
}

module.exports = { insertVideoData };