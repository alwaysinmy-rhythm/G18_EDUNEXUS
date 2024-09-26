const express= require("express");
const authUser = require("../controller/authUser");

const router = express.Router();
router.route('/login').post(authUser);
 
module.exports=router;  