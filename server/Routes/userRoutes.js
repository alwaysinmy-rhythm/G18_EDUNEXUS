const express= require("express");
const {authUser,viewProfile,editProfile} = require("../controller/authUser");
const {dashboard} = require("../controller/dashboard");
const {mycourses} = require("../controller/mycourses");
const {lab_assignment,lab_submission,listlabs,listsubmissions} = require("../controller/lab_assignment");

const router = express.Router();
router.route('/login').post(authUser);
router.route('/viewprofile').get(viewProfile);
router.route('/editprofile').post(editProfile);




router.route('/dashboard').get(dashboard);
router.route('/dashboard/mycourses').get(mycourses);



router.route('/dashboard/mycourses/:CourseId/lab/:Lab_ID/submission').post(lab_submission);

router.route('/dashboard/mycourses/:CourseId/lab').get(listlabs);   // listing lab to both roles

router.route('/dashboard/mycourses/:CourseId/lab/assignment').post(lab_assignment);
router.route('/dashboard/mycourses/:CourseId/lab/:Lab_ID').get(listsubmissions);

module.exports=router;  
