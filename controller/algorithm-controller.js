const  Algorithm  = require( "../models/algorithm-model");

const getAllAlgorithm = async (re, res, next) => {
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
