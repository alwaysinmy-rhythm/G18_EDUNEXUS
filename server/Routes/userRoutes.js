const express= require("express");
const {authUser,viewProfile,editProfile} = require("../controller/authUser");

const router = express.Router();
router.route('/login').post(authUser);
router.route('/viewprofile').get(viewProfile);
router.route('/editprofile').post(editProfile);

 
module.exports=router;  
