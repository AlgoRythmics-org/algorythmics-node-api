const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { Quiz } = require('../models/quiz-model');
const { getAllQuiz } = require('../controller/quiz-controller');

router.get('/algorythmics/quizzes', async (req, res) => {
    try {
        const data = await Quiz.find({});
        res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', quiz: data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});

router.get('/algorythmics/quizzes/:id', async (req, res) => {
    try {
        const data = await Quiz.findById(req.params.id);
        if (!data) {
            res.status(404).json({ code: 404, message: 'A quiz nem található' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', quiz: data });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});

//getting the list with questions
router.get('/algorythmics/quizzes/:quiz_name/question_list', async (req, res) => {
    const quizName = req.params.quiz_name;
    try {
        const quiz = await Quiz.findOne({ quiz_name: quizName });
        if (!quiz) {
            res.status(404).json({ code: 404, message: 'A quiz nem található' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', question_list: quiz.question_list});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});

//getting list of correct answers
router.get('/algorythmics/quizzes/:quiz_name/correct_answer', async (req, res) => {
    const quizName = req.params.quiz_name;
    try {
        const quiz = await Quiz.findOne({ quiz_name: quizName });
        if (!quiz) {
            res.status(404).json({ code: 404, message: 'A quiz nem található' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', correct_answer: quiz.correct_answer });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});

//getting list of correct answers
router.get('/algorythmics/quizzes/:quiz_name/correct_answer', async (req, res) => {
    const quizName = req.params.quiz_name;
    try {
        const quiz = await Quiz.findOne({ quiz_name: quizName });
        if (!quiz) {
            res.status(404).json({ code: 404, message: 'A quiz nem található' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', answers: quiz.correct_answer });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});

router.post('/algorythmics/quizzes/add', async (req, res) => {
    try {
        const quiz = new Quiz({
            quiz_name: req.body.quiz_name,
            description: req.body.description,
            question_list: req.body.question_list,
            answers: req.body.answers,
            correct_answer: req.body.correct_answer
        });
        const data = await quiz.save();
        res.status(200).json({ code: 200, message: 'A kvíz sikeresen hozzáadva', addedQuiz: data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a kvíz hozzáadásakor.' });
    }
});


router.put('/algorythmics/quizzes/update/:id', async (req, res) => {
    const updatedQuiz = {
        quiz_name: req.body.quiz_name,
        description: req.body.description,
        question_list: req.body.question_list,
        answers: req.body.answers,
        correct_answer: req.body.correct_answer
    };

    try {
        const data = await Quiz.findByIdAndUpdate(req.params.id, updatedQuiz, { new: true });
        if (data) {
            res.status(200).json({ code: 200, message: 'A kvíz sikeresen frissítve', updatedQuiz: data });
        } else {
            res.status(404).json({ code: 404, message: 'A kvíz nem található' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a kvíz frissítésekor' });
    }
});

router.delete('/algorythmics/quizzes/:id', async (req, res) => {
    try {
        const data = await Quiz.findByIdAndRemove(req.params.id);
        if (data) {
            res.status(200).json({ code: 200, message: 'A kvíz sikeresen törölve', deletedQuiz: data });
        } else {
            res.status(404).json({ code: 404, message: 'A kvíz nem található' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a kvíz törlésekor' });
    }
});




module.exports = router;
