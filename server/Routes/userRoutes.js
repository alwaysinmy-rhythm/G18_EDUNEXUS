const express= require("express");
const protect=require("../middleWare/authMiddleware");
const {authUser,viewProfile,editProfile,authRole} = require("../controller/authUser");
const {dashboard} = require("../controller/dashboard");
const {mycourses} = require("../controller/mycourses");
const {lab_assignment} = require("../controller/lab_assignment");
const {getCourseRegistrationList,registerStudentPreferences} = require("../controller/course_registration");
const router = express.Router();
router.route('/login').post(authUser);
router.route('/authRole').post(protect,authRole);
router.route('/viewprofile').get(protect,viewProfile);
router.route('/editprofile').post(protect,editProfile);




router.route('/dashboard').get(protect,dashboard);
router.route('/dashboard/mycourses').get(mycourses);
router.route('/lab_assignment').get(lab_assignment);
router.route('/course_registration').get(getCourseRegistrationList);
router.route('/course_registration').post(registerStudentPreferences);



 
module.exports=router;  
