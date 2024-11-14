const express= require("express");
const protect=require("../middleWare/authMiddleware");
const {authUser,viewProfile,editProfile,authRole} = require("../controller/authUser");
const {dashboard} = require("../controller/dashboard");
const {mycourses} = require("../controller/mycourses");
const {lab_assignment,lab_submission,listlabs,listsubmissions} = require("../controller/lab_assignment");

const router = express.Router();
router.route('/login').post(authUser);
router.route('/authRole').post(protect,authRole);
router.route('/viewprofile').get(protect,viewProfile);
router.route('/editprofile').post(protect,editProfile);




router.route('/dashboard').get(protect,dashboard);
router.route('/dashboard/mycourses').get(mycourses);



router.route('/dashboard/mycourses/:CourseId/lab/:Lab_ID/submission').post(lab_submission);

router.route('/dashboard/mycourses/:CourseId/lab').get(listlabs);   // listing lab to both roles

router.route('/dashboard/mycourses/:CourseId/lab/assignment').post(lab_assignment);
router.route('/dashboard/mycourses/:CourseId/lab/:Lab_ID').get(listsubmissions);

module.exports=router;  
