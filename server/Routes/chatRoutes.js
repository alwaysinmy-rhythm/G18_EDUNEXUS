const express = require('express');
const { sendMessage, getMessages } = require('../controller/chatController');

const router = express.Router();

router.post('/send', sendMessage);
router.get('/:courseId/messages', getMessages);

module.exports = router;
