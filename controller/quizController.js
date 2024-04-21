const {Quiz} = require('../models/quizModel'); 

const getAllQuiz = async (req, res) => {
    let quiz; 
    try{

        quiz = await Quiz.find();

    }catch(err){
        console.log(err);
    }

    if(!quiz){
        return res.status(404).json({message : "No quiz found"});
    }

    return res.status(200).json({quiz});
}

const getOneQuizById = async (req, res) => {
    try {
        const quizId = req.params.id;
        const quiz = await Quiz.findOne({ _id: quizId });

        if (quiz) {
            res.status(200).json(quiz);
        } else {
            res.status(404).json({ error: 'Quiz not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getQuizByAlgorithmId = async (req, res) => {
    try {
        const algorithmId = req.params.algorithmId; // Felteve, hogy az algoritmus azonosítója a kérés paraméterében található
        const quizzes = await Quiz.findOne({ 
            where: {algorithm_id: algorithmId} });

        if (quizzes) {
            res.status(200).json(quizzes);
        } else {
            res.status(404).json({ error: 'No quizzes found for the specified algorithm ID' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {
    getAllQuiz, 
    getOneQuizById,
    getQuizByAlgorithmId
};