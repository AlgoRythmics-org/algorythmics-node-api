const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    video_name: {
        type: String,
        required: true
    },
   link: {
        type: String,
        required: true
    },
    algorithm_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Algorithm',  
        required: true
    }
  
});

const Video = mongoose.model('Video', videoSchema); 

module.exports = { Video };
