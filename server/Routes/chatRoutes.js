const express = require('express');
const protect=require("../middleWare/authMiddleware");
const { sendMessage, getMessages,courseList } = require('../controller/chatController');

const router = express.Router();
router.route('/send').post(protect,sendMessage);
router.route('/messages').post(protect,getMessages);
router.route('/courses').post(protect,courseList);

module.exports = router;
