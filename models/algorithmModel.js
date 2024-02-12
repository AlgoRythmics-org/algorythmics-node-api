const { ObjectId, Double, Binary } = require('mongodb');
const mongoose = require('mongoose');

const algorithmSchema = new mongoose.Schema({

    algorithm_name: {
        type: String,
        required: true
    },
    algorithm_type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    visualization_type: {
        type: String,
        required: true
    },
    complexity: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    implementation_type: {
        type: String,
        required: true
    },
    learning_steps: {
        type: String,
        required: true
     },
    image_file: {
        type: String
    },
    detail_description: {
        type: String
    }
    
});

const Algorithm = mongoose.model('Algorithm', algorithmSchema);

module.exports = { Algorithm };
