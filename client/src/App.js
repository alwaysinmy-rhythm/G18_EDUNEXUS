import React from "react";
import "./App.css";
import { Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Components/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sample from "./Pages/sample";
import { Avatar, Box } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import Courses from "./Components/Courses";

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
					></NotificationsNoneIcon>
					<Avatar alt="User image" src="./favicon.ico" />
				</Box>
				<Outlet />
			</Grid>
		</Grid>
	);
}

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/sample",
				element: <Sample />,
			},
		],
	},
	{
		path: "/courses",
		element: <Courses />,
		// element: <CourseDetails />,
	},
]);

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<RouterProvider router={router}></RouterProvider>
			</ThemeProvider>
		</>
	);
}
Layout.propTypes = {};
export default App;
