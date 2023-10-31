const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { Animation } = require('../models/animation-model');
const { getAllAnimation } = require('../controller/animation-controller');

//Get All Videos
router.get('/algorythmics/animations', async (req, res) => {
    try {
        const data = await Animation.find({});
        res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', animations: data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});


// Get List_of_Numbers for a Specific Animation by Name
router.get('/algorythmics/animations/:animation_name/list_of_numbers', async (req, res) => {
    const animationName = req.params.animation_name;
    try {
        const animation = await Animation.findOne({ animation_name: animationName });
        if (!animation) {
            res.status(404).json({ code: 404, message: 'Az animáció nem található' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', list_of_numbers: animation.list_of_numbers });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});


//get description
router.get('/algorythmics/animations/:animation_name/description', async (req, res) => {
    const animationName = req.params.animation_name;
    try {
        const animation = await Animation.findOne({ animation_name: animationName });
        if (!animation) {
            res.status(404).json({ code: 404, message: 'Az animáció nem található' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', description: animation.description });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});

//Get Single animation by id
router.get('/algorythmics/:id', async (req, res) => {
    try {
        const data = await Animation.findById(req.params.id);
        if (!data) {
            res.status(404).json({ code: 404, message: 'Az animacio nem található' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', animations: data });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});

router.post('/algorythmics/animation/add', async (req, res) => {
    try {
        const anim = new Animation({
            animation_name: req.body.animation_name,
            description: req.body.description,
            list_of_numbers: req.body.list_of_numbers,
            animation_type: req.body.animation_type
        });
        const data = await anim.save();
        res.status(200).json({ code: 200, message: 'Az animáció sikeresen hozzáadva', addedAnimation: data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt az animáció hozzáadásakor.' });
    }
});


router.put('/algorythmics/animation/update/:id', async (req, res) => {
    const updatedAnimation = {
        animation_name: req.body.animation_name,
        description: req.body.description,
        list_of_numbers: req.body.list_of_numbers,
        animation_type: req.body.animation_type
    };

    try {
        const data = await Animation.findByIdAndUpdate(req.params.id, updatedAnimation, { new: true });
        if (data) {
            res.status(200).json({ code: 200, message: 'Az animáció sikeresen frissítve', updatedAnimation: data });
        } else {
            res.status(404).json({ code: 404, message: 'Az animáció nem található' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt az animáció frissítésekor' });
    }
});


router.delete('/algorythmics/animation/:id', async (req, res) => {
    try {
        const data = await Animation.findByIdAndRemove(req.params.id);
        if (data) {
            res.status(200).json({ code: 200, message: 'Az animáció sikeresen törölve', deletedAnimation: data });
        } else {
            res.status(404).json({ code: 404, message: 'Az animáció nem található' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt az animáció törlésekor' });
    }
});


//Get animation by name
router.get('/algorythmics/animation_name/:animation_name', async (req, res) => {
    try {
        const animation_name = req.params.animation_name;
        const data = await Animation.find({ animation_name: animation_name });

        if (data.length === 0) {
            res.status(404).json({ code: 404, message: 'Nincsenek animaciok a megadott típus alapján' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', animations: data });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});


module.exports = router;