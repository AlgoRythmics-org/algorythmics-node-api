const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const videoController = require('../controller/videoController');

router.get('/allVideos', videoController.getAllVideos);
router.get('/:id', videoController.getOneVideoById);



module.exports = router;
