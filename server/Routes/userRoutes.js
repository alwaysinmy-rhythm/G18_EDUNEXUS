const express= require("express");
const {authUser,viewProfile} = require("../controller/authUser");

const router = express.Router();
router.route('/login').post(authUser);
router.route('/viewprofile').get(viewProfile);

 
module.exports=router;  