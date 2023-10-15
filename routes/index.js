const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { Algorithm } = require('../models/algorithm');

// Get All Algorithms
router.get('/algorythmics/algorithm', async (req, res) => {
    try {
        const data = await Algorithm.find({});
        res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', algorithm: data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});

// Get Single Algorithm
router.get('/algorythmics/algorithm/:id', async (req, res) => {
    try {
        const data = await Algorithm.findById(req.params.id);
        if (!data) {
            res.status(404).json({ code: 404, message: 'Az algoritmus nem található' });
        } else {
            res.status(200).json({ code: 200, message: 'Sikeres lekérdezés', algorithm: data });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt a lekérdezés során.' });
    }
});

router.post('/algorythmics/algorithm/add', async (req, res) => {
    try {
        const alg = new Algorithm({
            name: req.body.name,
            type: req.body.type
        });
        const data = await alg.save();
        res.status(200).json({ code: 200, message: 'Az algoritmus sikeresen hozzáadva', addedAlgorithm: data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt az algoritmus hozzáadásakor.' });
    }
});

router.put('/algorythmics/algorithm/update/:id', async (req, res) => {
    const alg = {
        name: req.body.name,
        type: req.body.type
    };

    try {
        const data = await Algorithm.findByIdAndUpdate(req.params.id, alg, { new: true });
        if (data) {
            res.status(200).json({ code: 200, message: 'Az algoritmus sikeresen frissítve', updatedAlgorithm: data });
        } else {
            res.status(404).json({ code: 404, message: 'Az algoritmus nem található' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt az algoritmus frissítésekor' });
    }
});

router.delete('/algorythmics/algorithm/:id', async (req, res) => {
    try {
        const data = await Algorithm.findByIdAndRemove(req.params.id);
        if (data) {
            res.status(200).json({ code: 200, message: 'Az algoritmus sikeresen törölve', deletedAlgorithm: data });
        } else {
            res.status(404).json({ code: 404, message: 'Az algoritmus nem található' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ code: 500, message: 'Hiba történt az algoritmus törlésekor' });
    }
});

module.exports = router;
