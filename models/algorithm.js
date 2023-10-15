const mongoose = require('mongoose');

const algorithmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const Algorithm = mongoose.model('Algorithm', algorithmSchema);

module.exports = { Algorithm };
