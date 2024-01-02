const {Video} = require('../models/videoModel'); 

const getAllVideos = async (req, res) => {
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
};

const getOneVideoById = async (req, res) => {
    try {
        const videoId = req.params.id;
        const video = await Video.findOne({ _id: videoId });

        if (video) {
            res.status(200).json(video);
        } else {
            res.status(404).json({ error: 'Video not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllVideos,
    getOneVideoById
}