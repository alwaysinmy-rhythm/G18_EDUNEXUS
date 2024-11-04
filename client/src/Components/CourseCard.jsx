import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Avatar,
	Box,
	Divider,
	IconButton,
	Tooltip,
	CardMedia, // Added for image
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
	card: {
		width: "95%",
		borderRadius: "8px",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
		overflow: "hidden",
		borderRadius: "10px",
	},
	header: {
		padding: "16px",
		color: "#000",
		textAlign: "center",
	},
	avatar: {
		backgroundColor: "#A1887F",
		color: "white",
		width: 55,
		height: 55,
		border: "3px solid white",
		transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
		"&:hover": {
			transform: "scale(1.2)",
			boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
		},
	},
	content: {
		padding: "20px 16px",
		textAlign: "center",
		animation: `$fadeIn 0.8s ease-in-out`,
	},
	divider: {
		margin: "24px 0",
	},
	iconBox: {
		display: "flex",
		justifyContent: "center",
		gap: "16px",
		marginTop: "16px",
	},
	footer: {
		borderTop: "1px solid #E0E0E0",
		marginTop: "16px",
		paddingTop: "16px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	instructorText: {
		marginRight: "auto",
	},
	"@keyframes fadeIn": {
		"0%": {
			opacity: 0,
		},
		"100%": {
			opacity: 1,
		},
	},
});

const ClassroomCard = ({
	courseName,
	instructor,
	avatarLetter,
	courseCode,
}) => {
	const classes = useStyles();
	const navigate = useNavigate();

	return (
		<Card
			className={classes.card}
			sx={{
				transition: "all 0.2s ease-in-out",
				"&:hover": {
					transform: "scale(1.05)",
					boxShadow:
						"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
				},
			}}
		>
			{/* Add online image in the header */}
			{/* <CardMedia
				component="img"
				height="140"
				image="https://picsum.photos/" // Replace with any valid image URL
				alt="Course header image"
			/> */}
			{/* <CardMedia
				component="img"
				height="140"
				image="https://source.unsplash.com/random/600x140" // Unsplash random image
				alt="Course header image"
			/> */}

			{/* Header Section with course name */}
			<Box
				className={classes.header}
				onClick={() => {
					navigate("/courses/course-inside");
				}}
				sx={{ cursor: "pointer" }}
			>
				<Typography
					variant="h6"
					sx={{ textDecoration: "underline", "&:hover": { color: "blue" } }}
				>
					{courseName}
				</Typography>
			</Box>

			<Divider className={classes.divider} />

			{/* Content Section */}
			<CardContent className={classes.content}>
				<Typography variant="body2" className={classes.details}>
					3 Total Enrolled
				</Typography>

				<Typography variant="body2" className={classes.details}>
					April 1, 2021 Last Updated
				</Typography>

				{/* Icon Box */}
				<Box className={classes.iconBox}>
					<Tooltip title="Contacts" arrow placement="top">
						<IconButton aria-label="fingerprint" color="info">
							<ContactsIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="View Folder" arrow placement="top">
						<IconButton aria-label="fingerprint" color="info">
							<FolderOpenOutlinedIcon />
						</IconButton>
					</Tooltip>
				</Box>

				{/* Footer */}
				<Box className={classes.footer}>
					<Typography variant="body2" className={classes.instructorText}>
						A course by {instructor}
					</Typography>
					<Avatar className={classes.avatar}>{avatarLetter}</Avatar>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ClassroomCard;
