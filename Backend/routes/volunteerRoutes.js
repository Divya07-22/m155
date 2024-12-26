const express = require('express');
const router = express.Router();
const { getVolunteerProfile, updateVolunteerProfile } = require('../controllers/volunteerController');

// GET profile
router.get('/', getVolunteerProfile);

// PUT update profile
router.put('/', updateVolunteerProfile);

module.exports = router;
