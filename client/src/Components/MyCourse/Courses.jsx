import React, { useState } from "react";
import { Grid } from "@mui/material";
import CourseCard2 from "./CourseCard2"; // Import the ClassroomCard component

const parentstyle= {
	marginTop: "100px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "5px",
	margin: "5px",
	
}
const Courses = () => {
	// List of courses (already present in your original code)
	const [courses] = useState([
		{
			id: "1",
			courseName: "IT305-LAB-2024",
			instructor: "Sanjay Srivastava",
			avatarLetter: "S",
			courseCode: "IT305",
		},
		{
			id: "2",
			courseName: "CS101-INTRO-2024",
			instructor: "Jane Doe",
			avatarLetter: "J",
			courseCode: "CS101",
		},
		{
			id: "3",
			courseName: "CS102-ADV-2024",
			instructor: "John Smith",
			avatarLetter: "J",
			courseCode: "CS102",
		},
		{
			id: "4",
			courseName: "EE201-CIRCUITS-2024",
			instructor: "Anita Gupta",
			avatarLetter: "A",
			courseCode: "EE201",
		},
		{
			id: "5",
			courseName: "ME101-MECH-2024",
			instructor: "Mike Johnson",
			avatarLetter: "M",
			courseCode: "ME101",
		},
		{
			id: "6",
			courseName: "MA202-MATHS-2024",
			instructor: "Emily Davis",
			avatarLetter: "E",
			courseCode: "MA202",
		},
		{
			id: "7",
			courseName: "PH201-PHYSICS-2024",
			instructor: "Robert Brown",
			avatarLetter: "R",
			courseCode: "PH201",
		},
		{
			id: "8",
			courseName: "CS103-DATA-2024",
			instructor: "Linda Taylor",
			avatarLetter: "L",
			courseCode: "CS103",
		},
		{
			id: "9",
			courseName: "CH101-CHEM-2024",
			instructor: "Sophia Wilson",
			avatarLetter: "S",
			courseCode: "CH101",
		},
	]);
	return (
		<>
		<h1 style={{position:'fixed', zIndex:'1', width:"100%", margin: 0}}>My Courses</h1>
		<div style={{marginTop:"50px"}}>
			<Grid container>
				{/* Sidebar with Navbar */}
				
								{/* Course Cards Section */}
				<Grid item md={12} xs={9} sm={10} sx={{ position: "relative" }}  style={parentstyle}>
					<Grid container spacing={4} style={{padding:"5px" , margin:"5px" ,}}>
						{/* Map through courses and render ClassroomCard for each */}
						{courses.map((course) => (
							<div key={course.id} style={{padding:"5px" , margin:"5px"}}>
								<CourseCard2
									courseName={course.courseName}
									instructor={course.instructor}
									avatarLetter={course.avatarLetter}
									courseCode={course.courseCode}
								/>
							</div>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
		</>
	);
};
export default Courses;