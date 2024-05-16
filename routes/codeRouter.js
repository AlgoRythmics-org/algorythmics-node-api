const express = require('express');
const router = express.Router();
const codeController = require('../controller/codeController');

// Útvonalak definíciója
router.get('/allCode', codeController.getAllCode);

module.exports = router;
