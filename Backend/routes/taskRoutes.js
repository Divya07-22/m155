const express = require('express');
const { updateTaskStatus } = require('../controllers/taskController');

const router = express.Router();

// PUT - Update Task Status
router.put('/update/:id', updateTaskStatus);

module.exports = router;
