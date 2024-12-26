const express = require('express');
const router = express.Router();
const { createEmergencyContact } = require('../controllers/emergencyController');

// Route to create emergency contact
router.post('/', createEmergencyContact);

module.exports = router;
