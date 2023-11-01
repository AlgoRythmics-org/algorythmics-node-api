const Quiz = require('../models/quiz-model'); 

const getAllQuiz = async (re, res, next) => {
    let quiz; 
    try {
        quiz = await Quiz.find();
    } catch (err) {
        console.log(err);
    }

    if (!quiz) {
        return res.status(404).json({ message: "No quiz found" });
    }

    return res.status(200).json({ quiz });
}
