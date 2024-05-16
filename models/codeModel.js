const { ObjectId, Double, Binary } = require('mongodb');
const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
    algorithm_code: {
        type: String,
        required: true
    },

    algorithm_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Algorithm',  
        required: true
    }
});

const Code = mongoose.model('Code', codeSchema); 

module.exports = { Code };
