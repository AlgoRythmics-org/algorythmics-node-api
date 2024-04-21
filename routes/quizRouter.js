const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const quizController = require('../controller/quizController');

// Útvonalak definíciója
router.get('/allQuiz', quizController.getAllQuiz);
router.get('/id/:id', quizController.getOneQuizById);
router.get('/algorithmId/:algorithmId', quizController.getQuizByAlgorithmId);

module.exports = router;
