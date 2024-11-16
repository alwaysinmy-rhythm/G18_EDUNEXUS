const { json } = require("express");
const pool = require("../config/db");

const mycourses = async (req,res)=>{

    const StudentID = req.query.ID;

    if(StudentID[0] === 'S'){  
    const Semester = req.query.Semester;
    const year = await pool.query(`SELECT year FROM student_academic WHERE SID = $1`,[StudentID]);
    
    const enrollment_year = year.rows[0].year;    
    console.log(enrollment_year);
    const course_year = parseInt(enrollment_year)-1+Math.floor((parseInt(Semester) + 1)/2);

    let semester_period;
    if(parseInt(Semester) % 2)
        semester_period = 'Autumn';
    else
        semester_period = 'Winter';
    console.log([StudentID,course_year,semester_period]);
    
    try {
        const courses = await pool.query(`SELECT c.cid,c.course_code,c.prof_id,c.credit FROM 
            (course AS c JOIN course_enrolled_list AS cel ON c.cid = cel.cid ) 
            JOIN student_academic as s on cel.sid = s.sid 
            WHERE s.sid = $1 AND c.year = $2 AND c.semester = $3`,[StudentID,course_year,semester_period]);

        res.json({mycourses : courses.rows}) 
    } catch (error) {
        console.error("Error in fetching courses",error);
        res.status(500);
        
    }
}
   
}

module.exports = {mycourses}