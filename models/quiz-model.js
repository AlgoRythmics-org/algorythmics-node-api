const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    quiz_name: {
        type: String,
        required: true
    },
    quiz_description: {
        type: String
    },
   question_list: {
        type: Array,
        required: true
    },
    answers: {
        type: Array,
        required: true
    },
    correct_answer: {
        type: Array,
        required: true
    }
});

const Quiz = mongoose.model('Quiz', quizSchema); 

module.exports = { Quiz };
