const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/incidentController');

router.post('/', incidentController.createIncident);

module.exports = router;
