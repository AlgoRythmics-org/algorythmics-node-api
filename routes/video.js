const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { Video } = require('../models/video-model');
const { getAllVideo } = require('../controller/video-controller');


//Get All Videos
router.get('/algorythmics/videos', async (req, res) => {
    try {
        const data = await Video.find({});
        res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', videos: data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});

//Get Single Video by id
router.get('/algorythmics/:id', async (req, res) => {
    try {
        const data = await Video.findById(req.params.id);
        if (!data) {
            res.status(404).json({ code: 404, message: 'A video nem található' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', videos: data });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});


router.post('/algorythmics/video/add', async (req, res) => {
    try {
        const vid = new Video({
            video_name: req.body.video_name,
            description: req.body.description,
            link: req.body.description
        });
        const data = await vid.save();
        res.status(200).json({ code: 200, message: 'A video sikeresen hozzáadva', addedVideo: data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt az algoritmus hozzáadásakor.' });
    }
});

router.put('/algorythmics/vide/update/:id', async (req, res) => {
    const vid = {
        video_name: req.body.video_name,
        description: req.body.description,
        link: req.body.description
    };

    try {
        const data = await Video.findByIdAndUpdate(req.params.id, vid, { new: true });
        if (data) {
            res.status(200).json({ code: 200, message: 'A video sikeresen frissítve', updatedVideo: data });
        } else {
            res.status(404).json({ code: 404, message: 'A video nem található' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a video frissítésekor' });
    }
});

router.delete('/algorythmics/video/:id', async (req, res) => {
    try {
        const data = await Video.findByIdAndRemove(req.params.id);
        if (data) {
            res.status(200).json({ code: 200, message: 'A video sikeresen törölve', deletedVideo: data });
        } else {
            res.status(404).json({ code: 404, message: 'A video nem található' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a video törlésekor' });
    }
});


//lekerdezes nev szerint
router.get('/algorythmics/video_name/:video_name', async (req, res) => {
    try {
        const video_name = req.params.video_name;
        const data = await Video.find({ video_name: video_name });

        if (data.length === 0) {
            res.status(404).json({ code: 404, message: 'Nincsenek videok a megadott típus alapján' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', videos: data });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});


module.exports = router;
