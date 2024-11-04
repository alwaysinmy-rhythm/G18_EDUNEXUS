import React from 'react';
import { Box } from '@mui/material';
import CourseIcon from '@mui/icons-material/AutoStories';
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const DashCourse = () => {
    const navigate = useNavigate();
    return (
			<Box
				sx={{
					display: "flex",
					gap: "16px", // Adds some space between the two boxes
				}}
			>
				<Box
					sx={{
						width: "200px",
						height: "220px",
						backgroundColor: "lightgray",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<CourseIcon fontSize="large" />
					<Typography
						sx={{ padding: "20px" }}
						onClick={() => {
							navigate(`/courses`);
						}}
						style={{ cursor: "pointer" }}
					>
						My Courses
					</Typography>
				</Box>

				<Box
					sx={{
						width: "200px",
						height: "220px",
						backgroundColor: "lightgray",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<CourseIcon fontSize="large" />
					<Typography sx={{ padding: "20px" }}>No Courses</Typography>
				</Box>
			</Box>
		);
};

export default DashCourse;
