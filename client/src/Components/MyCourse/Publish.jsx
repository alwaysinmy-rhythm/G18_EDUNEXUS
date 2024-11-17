import React, { useState } from "react";
import {
	TextField,
	Button,
	Box,
	MenuItem,
	Select,
	FormControl,
	InputLabel,
	IconButton,
	Chip,
	Stack,
} from "@mui/material";
import {
	AttachFile as AttachFileIcon,
	Close as CloseIcon,
	Announcement as AnnouncementIcon,
} from "@mui/icons-material";

const AnnouncementForm = ({ addAnnouncement, handleClose }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [category, setCategory] = useState("General");
	const [attachedFiles, setAttachedFiles] = useState([]);

	const [attachedLinks, setAttachedLinks] = useState([]);
	const [link, setLink] = useState("");

	const handleAddLink = () => {
		if (link.trim() !== "") {
			setAttachedLinks([...attachedLinks, link]);
			setLink(""); // Clear the input after submission
		}
	};
	const handleLinkRemove = (linkToRemove) => {
		setAttachedLinks(attachedLinks.filter((link) => link !== linkToRemove));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (title && content) {
			addAnnouncement({
				title,
				content,
				category,
				date: new Date().toISOString().split("T")[0],
				isPinned: false,
			});
			setTitle("");
			setContent("");
			setCategory("General");
			setAttachedFiles([]);
		}
	};

	// const handleFileChange = (e) => {
	// 	setAttachedFiles([...attachedFiles, ...Array.from(e.target.files)]);
	// };

	// const handleFileRemove = (file) => {
	// 	setAttachedFiles(attachedFiles.filter((f) => f !== file));
	// };

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			mb={3}
			sx={{
				backgroundColor: "#ffffff",
				padding: "20px",
				borderRadius: "12px",
				boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
				border: "1px solid #e0e0e0",
				maxWidth: "600px",
				margin: "0 auto",
				position: "relative",
			}}
		>
			{/* Close Button */}
			<IconButton
				onClick={handleClose}
				sx={{ position: "absolute", top: "10px", right: "10px" }}
			>
				<CloseIcon />
			</IconButton>

			<div
				style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
			>
				<AnnouncementIcon style={{ color: "#1976d2", marginRight: "8px" }} />
				<h2 style={{ margin: 0, color: "#1976d2", fontSize: "24px" }}>
					Create an Announcement
				</h2>
			</div>
			<TextField
				label="Title"
				variant="outlined"
				fullWidth
				margin="dense"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<TextField
				label="Content"
				variant="outlined"
				fullWidth
				multiline
				rows={3}
				margin="dense"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<FormControl variant="outlined" fullWidth margin="dense">
				<InputLabel>Category</InputLabel>
				<Select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					label="Category"
				>
					<MenuItem value="General">Lab</MenuItem>
					<MenuItem value="Exam">Class Note</MenuItem>
					<MenuItem value="Assignment">Assignment</MenuItem>
				</Select>
			</FormControl>
			<TextField
				label="Paste URL"
				variant="outlined"
				fullWidth
				margin="dense"
				value={link}
				onChange={(e) => setLink(e.target.value)}
			/>
			<Button
				onClick={handleAddLink}
				variant="outlined"
				color="primary"
				sx={{
					marginTop: "10px",
					borderColor: "#1976d2",
					color: "#1976d2",
					"&:hover": {
						backgroundColor: "#f0f4ff",
						borderColor: "#1565c0",
					},
				}}
			>
				Add Link
			</Button>

			{/* Display Attached Files */}
			<Stack direction="column" spacing={1} sx={{ marginTop: "10px" }}>
				{attachedLinks.map((link, index) => (
					<Chip
						key={index}
						label={link}
						onDelete={() => handleLinkRemove(link)}
						color="primary"
						variant="outlined"
					/>
				))}
			</Stack>

			<Button
				type="submit"
				variant="contained"
				color="primary"
				fullWidth
				sx={{
					marginTop: "20px",
					padding: "10px 0",
					fontSize: "16px",
					backgroundColor: "#1976d2",
					"&:hover": {
						backgroundColor: "#1565c0",
					},
				}}
			>
				Add Announcement
			</Button>
		</Box>
	);
};

export default AnnouncementForm;
