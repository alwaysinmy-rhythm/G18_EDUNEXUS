import React, { useEffect, useState } from "react";
import {
	Tabs,
	Tab,
	Box,
	Card,
	CardContent,
	Typography,
	Avatar,
} from "@mui/material";
import { Divider, Button, TextField } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import NoteIcon from "@mui/icons-material/Note";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import axios from "axios";
// import config from "../config";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
	border: "1px solid #e0e0e0",
	borderRadius: "10px",
	padding: "20px",
	marginBottom: "20px",
	boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
});

const convertTimestampToDate = (timestamp) => {
	const date = new Date(timestamp);
	const day = String(date.getDate()).padStart(2, "0"); // Pad with 0 if single digit
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
	const year = String(date.getFullYear()).slice(0); // Get last two digits of the year

	return `${day}/${month}/${year}`;
};

const token = "your_token_here";

// Custom Tab Panel component
const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
};

const CourseDetails = () => {
	console.log("sdf");
	const { coursecode } = useParams();

	const [ann, setAnn] = useState([]);
	const [labs, setLabs] = useState([]);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		setSelectedFile((prev) => event.target.files[0]);
	};

	// Function to handle form submission (currently a placeholder)
	const handleSubmit = async (id) => {
		// const formData = new FormData();
		// formData.append("file", selectedFile);
		// formData.append("lab_id", id);
		// formData.append("studentemail", "parthivva227@gmail.com");

		// try {
		// 	const res = await axios.post(config.BACKEND_API + "/upload", formData, {
		// 		headers: { "Content-Type": "multipart/form-data" },
		// 	});
		// 	console.log("File uploaded: ", res.data.msg);
		// } catch (error) {
		// 	console.error("Error uploading file:", error);
		// }
		
		console.log("handlesunmit");
	};
	
	const getAnn = async (courseCode) => {
		console.log("getann");
		// if (courseCode === "") return;
		// try {
		// 	const headers = {
		// 		"Content-Type": "application/json",
		// 		authorization: `Bearer ${token}`,
		// 	};

		// 	const results = await axios.get(
		// 		config.BACKEND_API + `/announcement/${courseCode}`,
		// 		{
		// 			headers,
		// 		}
		// 	);
		// 	// console.log(results.data);

		// 	setAnn((prev) => results.data);
		// } catch (err) {
		// 	console.log("error ->", err);
		// }

	};

	const getLabs = async (courseCode) => {
		// if (courseCode === "") return;
		// try {
		// 	const headers = {
		// 		"Content-Type": "application/json",
		// 		authorization: `Bearer ${token}`,
		// 	};

		// 	const results = await axios.get(
		// 		config.BACKEND_API + `/lab/${courseCode}`,
		// 		{
		// 			headers,
		// 		}
		// 	);
		// 	console.log("lab", results.data);

		// 	setLabs((prev) => results.data);
		// } catch (err) {
		// 	console.log("error ->", err);
		// }
		console.log("getlabs");
	};
	useEffect(() => {
		getAnn(coursecode);
		getLabs(coursecode);
	}, [coursecode]);

	const [value, setValue] = useState(0);
	const navigate = useNavigate(); // Using the navigate function from react-router

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	// // Function to navigate to the Lab component when a lab card is clicked
	// const handleLabClick = (labId) => {
	// 	navigate(`/courses/course-inside/lab/${labId}`);
	// };

	return (
		<Box sx={{ width: "100%" }}>
			{/* Tabs */}
			<Tabs value={value} onChange={handleChange} centered>
				<Tab label="Lab" />
				<Tab label="Lecture Notes" />
				<Tab label="Announcements" />
				<Tab label="Attendance" />
				<Tab label="Studens" />
			</Tabs>
			{/* Tab Content */}

			<TabPanel value={value} index={0}>
				{labs &&
					labs.length > 0 &&
					labs.map((lab, index) => (
						<Card key={index} sx={{ mb: 2 }}>
							<CardContent
								sx={{ display: "flex", justifyContent: "space-between" }}
							>
								<div>
									{" "}
									<Avatar>
										<FolderIcon />
									</Avatar>
									<Typography variant="h6">{lab.title}</Typography>
									<Typography variant="body2">
										Date: {convertTimestampToDate(lab.createdAt)}
									</Typography>
									<Typography variant="body2">{lab.description}</Typography>
									<Box mt={2} mb={2}>
										<Typography variant="body1">PDF File:</Typography>
										<Button
											variant="contained"
											href="#"
											target="_blank"
											sx={{ mt: 1 }}
										>
											Lab07-Wireshark TCP UDP.pdf
										</Button>
									</Box>
								</div>
								{lab.submissions.map((submission, index) => {
									if (submission.studentemail === "parthivva227@gmail.com") {
										// Student has submitted their work, display "Submitted" button
										return (
											<Box
												sx={{
													width: "25%",
												}}
												key={index}
											>
												<StyledCard>
													<Typography variant="h6">Your Work</Typography>
													<Divider sx={{ mt: 1, mb: 2 }} />

													{/* Display Submitted Button */}
													<Button
														sx={{
															my: 2,
														}}
														style={{
															display: "flex",
															justifyContent: "center",
															backgroundColor: "#f0f0f0",
															padding: "10px",
															borderRadius: "5px",
															width: "100%",
															height: "100%",
														}}
														onClick={() => {
															const url = submission.submissionFileUrl;
															window.open(url, "_blank", "noopener,noreferrer");
														}}
													>
														OPEN FILE
													</Button>
													<Button variant="contained" color="primary" fullWidth>
														Submitted
													</Button>
												</StyledCard>
											</Box>
										);
									}
									// If there are no submissions for this student, render the upload option
									return (
										<Box
											sx={{
												width: "25%",
												filter: "blue(10px)",
											}}
											key={`upload-${index}`} // Ensure unique key for the upload section
										>
											<StyledCard>
												<Typography variant="h6">Your Work</Typography>
												<Divider sx={{ mt: 1, mb: 2 }} />

												{/* File Upload */}
												<input
													style={{ display: "none" }}
													id="upload-file"
													type="file"
													onChange={handleFileChange}
												/>
												<label htmlFor="upload-file">
													<Button
														variant="outlined"
														component="span"
														fullWidth
														sx={{ mb: 2 }}
													>
														+ Add or Create
													</Button>
												</label>

												{/* Display selected file name */}
												{selectedFile && (
													<Typography
														variant="body2"
														color="textSecondary"
														sx={{ mb: 2 }}
													>
														Selected file: {selectedFile.name}
													</Typography>
												)}

												{/* Submit Assignment */}
												<Button
													variant="contained"
													color="primary"
													fullWidth
													onClick={() => handleSubmit(lab._id)} // Simulate form submission
												>
													Mark as Done
												</Button>
											</StyledCard>
										</Box>
									);
								})}
							</CardContent>
						</Card>
					))}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{/* Cards for Lecture Notes tab */}
				<Card sx={{ mb: 2 }}>
					<CardContent>
						<Avatar>
							<NoteIcon />
						</Avatar>
						<Typography variant="h6">Lecture Note 1</Typography>
						<Typography variant="body2">Date: Sep 20, 2024</Typography>
						<Typography variant="body2">
							This is the description for Lecture Note 1.
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ mb: 2 }}>
					<CardContent>
						<Avatar>
							<NoteIcon />
						</Avatar>
						<Typography variant="h6">Lecture Note 2</Typography>
						<Typography variant="body2">Date: Sep 22, 2024</Typography>
						<Typography variant="body2">
							This is the description for Lecture Note 2.
						</Typography>
					</CardContent>
				</Card>
			</TabPanel>
			<TabPanel value={value} index={2}>
				{/* Cards for Announcements tab */}

				{ann.map((announcement, index) => (
					<Card key={index} sx={{ mb: 2 }}>
						<CardContent>
							<Avatar>
								<AnnouncementIcon />
							</Avatar>
							<Typography variant="h6">
								{announcement.announcementBy}
							</Typography>
							<Typography variant="body2">
								Date: {convertTimestampToDate(announcement.Postedat)}
							</Typography>
							<Typography variant="body2">
								{announcement.description}
							</Typography>
						</CardContent>
					</Card>
				))}
			</TabPanel>
			<TabPanel value={value} index={3}>
				{/* Cards for Attendance tab */}
				<Card sx={{ mb: 2 }}>
					<CardContent>
						<Avatar>
							<PeopleIcon />
						</Avatar>
						<Typography variant="h6">Attendance Record 1</Typography>
						<Typography variant="body2">Date: Sep 25, 2024</Typography>
						<Typography variant="body2">
							This is the description for Attendance Record 1.
						</Typography>
					</CardContent>
				</Card>
				<Card sx={{ mb: 2 }}>
					<CardContent>
						<Avatar>
							<PeopleIcon />
						</Avatar>
						<Typography variant="h6">Attendance Record 2</Typography>
						<Typography variant="body2">Date: Sep 27, 2024</Typography>
						<Typography variant="body2">
							This is the description for Attendance Record 2.
						</Typography>
					</CardContent>
				</Card>
			</TabPanel>

			<TabPanel value={value} index={4}>
				<p>students</p>
			</TabPanel>
		</Box>
	);
};

export default CourseDetails;
