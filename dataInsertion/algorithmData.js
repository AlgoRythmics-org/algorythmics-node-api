const mongoose = require('mongoose');
const { Algorithm } = require('../models/algorithmModel'); 

async function insertAlgorithmData(algorithmData) {
  try {
    const createdAlgorithm = await Algorithm.create(algorithmData);
    console.log('Inserted successfully:', createdAlgorithm.toJSON());
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
  }
}

module.exports = { insertAlgorithmData };