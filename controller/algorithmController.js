const  {Algorithm}  = require( "../models/algorithmModel");

const getAllAlgorithm = async (req, res) => {
    let algorithms; 
    try{

        algorithms = await Algorithm.find();

    }catch(err){
        console.log(err);
    }

    if(!algorithms){
        return res.status(404).json({message : "No algorithms found"});
    }

    return res.status(200).json({algorithms});
}


const getOneAlgorithmById = async (req, res) => {
    try {
        const algorithmId = req.params.id;
        const algorithm = await Algorithm.findOne({ _id: algorithmId });

        if (algorithm) {
            res.status(200).json(algorithm);
        } else {
            res.status(404).json({ error: 'Algorithm not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}





module.exports = {
    getAllAlgorithm,
    getOneAlgorithmById
}