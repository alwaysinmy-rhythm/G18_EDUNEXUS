const express= require("express");
const protect=require("../middleWare/authMiddleware");
const {authUser,viewProfile,editProfile,authRole} = require("../controller/authUser");
const {dashboard} = require("../controller/dashboard");
const {mycourses} = require("../controller/mycourses");
const {lab_assignment} = require("../controller/lab_assignment");

const router = express.Router();
router.route('/login').post(authUser);
router.route('/authRole').post(protect,authRole);
router.route('/viewprofile').get(viewProfile);
router.route('/editprofile').post(editProfile);




router.route('/dashboard').get(dashboard);
router.route('/dashboard/mycourses').get(mycourses);
router.route('/lab_assignment').get(lab_assignment);



 
module.exports=router;  
