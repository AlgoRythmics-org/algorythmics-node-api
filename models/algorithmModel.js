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
    }

});

const Algorithm = mongoose.model('Algorithm', algorithmSchema);

module.exports = { Algorithm };
