const  Animation  = require( "../models/animation-model");

const getAllAnimation = async (re, res, next) => {
    let animations; 
    try{

        animations = await Animation.find();

    }catch(err){
        console.log(err);
    }

    if(!animations){
        return res.status(404).json({message : "No animations found"});
    }

    return res.status(200).json({animations});
}
