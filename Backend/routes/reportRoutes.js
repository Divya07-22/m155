const express = require('express');
const { submitReport } = require('../controllers/reportController');

const router = express.Router();

// Route to handle report submission
router.post('/submit', submitReport);

module.exports = router;
