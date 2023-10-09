const express = require('express');
const router = express.Router();
const AlgorithmController = require('../controllers/algorithm_controller');

// Create a new algorithm
router.post('/', AlgorithmController.createAlgorithm);

// Get all algorithms
router.get('/', AlgorithmController.getAllAlgorithms);

// Get an algorithm by ID
router.get('/:id', AlgorithmController.getAlgorithmById);

// Update an algorithm by ID
router.put('/:id', AlgorithmController.updateAlgorithm);

// Delete an algorithm by ID
router.delete('/:id', AlgorithmController.deleteAlgorithm);

module.exports = router;
