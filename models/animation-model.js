const mongoose = require('mongoose');

const animationSchema = new mongoose.Schema({
    animation_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
   list_of_numbers: {
        type: Array,
        required: true
    },
    animation_type: {
        type: Array,
        required: true
    }
  
});

const Animation = mongoose.model('Animation', animationSchema); 

module.exports = { Animation };
