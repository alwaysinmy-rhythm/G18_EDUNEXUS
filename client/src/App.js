// import "./App.css";
// import { Grid } from "@mui/material";
// import Navbar from "./Components/Navbar";
// import Login from "./Pages/Login";
// import Dashboard from "./Pages/Dashboard";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./Components/theme";
// import CssBaseline from "@mui/material/CssBaseline";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Sample from "./Pages/sample";
// import { Avatar, Box } from "@mui/material";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import Courses from "./Components/Courses";
// import CourseDetails from "./Components/Courses";

// function Layout() {
// 	return (
// 		<Grid container>
// 			<Grid item md={3} xs={3} sm={2}>
// 				<Navbar />
// 			</Grid>

// 			<Grid item md={9} xs={9} sm={10} sx={{ position: "relative" }}>
// 				<Box
// 					sx={{
// 						position: "absolute",
// 						top: 0,
// 						right: 0,
// 						padding: "16px",
// 						display: "flex",
// 					}}
// 				>
// 					<NotificationsNoneIcon
// 						fontSize="large"
// 						sx={{ marginRight: "30px", marginTop: "5px" }}
// 					></NotificationsNoneIcon>
// 					<Avatar alt="User image" src="./favicon.ico" />
// 				</Box>
// 				<Outlet />
// 			</Grid>
// 		</Grid>
// 	);
// }

// const router = createBrowserRouter([
// 	{
// 		path: "/login",
// 		element: <Login />,
// 	},
// 	{
// 		element: <Layout />,

// 		children: [
// 			{
// 				path: "/",
// 				element: <Dashboard />,
// 			},
// 			{
// 				path: "/dashboard",
// 				element: <Dashboard />,
// 			},
// 			{
// 				path: "/sample",
// 				element: <Sample />,
// 			},
// 			// {
// 			// 	path: "/courses/course-details",
// 			// 	element: <CourseDetails />,
// 			// },
// 		],
// 	},
// 	{
// 		path: "/courses/course-details",
// 		element: <CourseDetails />, // Make sure this is your course details component
// 	},
// 	{
// 		path: "/courses",
// 		element: <Courses />,
// 		// element: <CourseDetails />,
// 	},
// 	{
// 		path: "*",
// 		element: <NotFound />,
// 	},
// ]);

// function NotFound() {
// 	return (
// 		<div style={{ textAlign: "center", marginTop: "50px" }}>
// 			<h1>404 - Page Not Found</h1>
// 			<p>The page you are looking for doesn't exist.</p>
// 		</div>
// 	);
// }

// function App() {
// 	return (
// 		<>
// 			<ThemeProvider theme={theme}>
// 				<CssBaseline />
// 				<RouterProvider exact router={router}></RouterProvider>
// 			</ThemeProvider>
// 		</>
// 	);
// }

// export default App;




import "./App.css";
import { Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Components/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Sample from "./Pages/sample";
import { Avatar, Box } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Courses from "./Components/Courses";
import CourseDetails from "./Components/CourseDetails"; // Correct import for CourseDetails
import CourseDetails2 from "./Components/CourseDetails2"; // Correct import for CourseDetails
import CourseDetails3 from "./Components/CourseDetails3"; // Correct import for CourseDetails

function Layout() {
	return (
		<Grid container>
			<Grid item md={3} xs={3} sm={2}>
				<Navbar />
			</Grid>
			<Grid item md={9} xs={9} sm={10} sx={{ position: "relative" }}>
				<Box
					sx={{
						position: "absolute",
						top: 0,
						right: 0,
						padding: "16px",
						display: "flex",
					}}
				>
					<NotificationsNoneIcon
						fontSize="large"
						sx={{ marginRight: "30px", marginTop: "5px" }}
					/>
					<Avatar alt="User image" src="./favicon.ico" />
				</Box>
				<Outlet />
			</Grid>
		</Grid>
	);
}

function NotFound() {
	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h1>404 - Page Not Found</h1>
			<p>The page you are looking for doesn't exist.</p>
		</div>
	);
}

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Routes>
						{/* Define routes individually */}
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<Layout />}>
							<Route index element={<Dashboard />} /> {/* Default route */}
							<Route path="dashboard" element={<Dashboard />} />
							<Route path="sample" element={<Sample />} />
						</Route>
						<Route path="/courses" element={<Courses />} />
						<Route path="/courses/course-details" element={<CourseDetails3 />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
