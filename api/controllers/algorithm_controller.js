const express = require('express');
const router = express.Router();
const AlgorithmService = require('../services/algorithm_service');

// Create a new algorithm
router.post('/algorithms', async (req, res) => {
  try {
    const algorithmData = req.body;
    const createdAlgorithm = await AlgorithmService.createAlgorithm(algorithmData);
    res.status(201).json(createdAlgorithm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all algorithms
router.get('/algorithms', async (req, res) => {
  try {
    const algorithms = await AlgorithmService.getAllAlgorithms();
    res.json(algorithms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get an algorithm by ID
router.get('/algorithms/:id', async (req, res) => {
  try {
    const algorithmId = req.params.id;
    const algorithm = await AlgorithmService.getAlgorithmById(algorithmId);

    if (!algorithm) {
      res.status(404).json({ error: 'Algorithm not found' });
      return;
    }

    res.json(algorithm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an algorithm by ID
router.put('/algorithms/:id', async (req, res) => {
  try {
    const algorithmId = req.params.id;
    const updatedAlgorithmData = req.body;
    const updatedAlgorithm = await AlgorithmService.updateAlgorithm(algorithmId, updatedAlgorithmData);

    if (!updatedAlgorithm) {
      res.status(404).json({ error: 'Algorithm not found' });
      return;
    }

    res.json(updatedAlgorithm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an algorithm by ID
router.delete('/algorithms/:id', async (req, res) => {
  try {
    const algorithmId = req.params.id;
    const deletedAlgorithm = await AlgorithmService.deleteAlgorithm(algorithmId);

    if (!deletedAlgorithm) {
      res.status(404).json({ error: 'Algorithm not found' });
      return;
    }

    res.json(deletedAlgorithm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
