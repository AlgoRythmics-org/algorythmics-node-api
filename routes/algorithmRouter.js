const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const algorithmController = require('../controller/algorithmController');


router.get('/allAlgorithms', algorithmController.getAllAlgorithm);

router.get('/:id', algorithmController.getOneAlgorithmById);


module.exports = router;
