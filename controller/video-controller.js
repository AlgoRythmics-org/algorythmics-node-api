const Video = require('../models/video-model'); 

const getAllVideo = async (re, res, next) => {
    let videos; 
    try {
        videos = await Video.find();
    } catch (err) {
        console.log(err);
    }

    if (!videos) {
        return res.status(404).json({ message: "No videos found" });
    }

    return res.status(200).json({ videos });
}
