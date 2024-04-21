const { ObjectId, Double, Binary } = require('mongodb');
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer1: {
        type: String,
        required: true
    },
    answer2: {
        type: String,
        required: true
    },
    answer3: {
        type: String,
        required: true
    },
    answer4: {
        type: String,
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    },
    score: {
        type: Number
    },
     
    clickedAnswer: {
        type: String
    },

    algorithm_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Algorithm',  
        required: true
    }
});

const Quiz = mongoose.model('Quiz', quizSchema); 

module.exports = { Quiz };
