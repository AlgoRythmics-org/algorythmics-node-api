// const mongoose = require('mongoose');
import mongoose from "mongoose";

const algorithmSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId, 
    name: String,
    description: String,
    type: {
        type: String,
        enum: ['sorting', 'searching', 'backtracking'], 
      },
    visualizationType: {
        type: String,
        enum: ['dance', 'actor', 'folk dance'], 
      },
    complexity: {
        type: String,
        enum: ['best', 'worse'],
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
      },
    implementationType: {
        type: String,
        enum: ['recursive', 'iterative'], 
      },
    list: String //?
});

// module.exports = mongoose.model('Algorithm', algorithmSchema)

export default mongoose.model("Algorithm", algorithmSchema);