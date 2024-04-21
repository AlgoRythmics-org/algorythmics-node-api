const mongoose = require('mongoose');
const { Quiz } = require('../models/quizModel'); 

async function insertQuizData(quizData) {
  try {
    const createdQuiz = await Quiz.create(quizData);
    console.log('Inserted successfully:', createdQuiz.toJSON());
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
  }
}

module.exports = { insertQuizData };