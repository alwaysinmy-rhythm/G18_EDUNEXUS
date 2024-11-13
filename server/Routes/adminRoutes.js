const express = require('express');
const router = express.Router();
const courseAllotmentController = require('../Controller/courseAllotmentController');

router.post('/allocate-courses', courseAllotmentController);

module.exports = router;