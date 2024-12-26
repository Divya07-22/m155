// backend/routes/resourceRoutes.js
const express = require('express');
const { createResource } = require('../controllers/postresourceController');

const router = express.Router();

router.post('/', createResource);

module.exports = router;
