const express = require('express');
const { postIncident } = require('../controllers/postincidentController');
const router = express.Router();

router.post('/incidents', postIncident);

module.exports = router;
