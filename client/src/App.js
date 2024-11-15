import './App.css';
import React from 'react'; 
import Chat from './Components/Chat/Chat'; 
import AllCourse from './Pages/AllCourse'; 
import { Grid } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Components/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sample from "./Pages/sample";
import { Avatar, Box } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ProfDashboard from "./Pages/ProfDashboard";
import Courses from "./Components/MyCourse/Courses";
import CourseRegistration from './Pages/CourseRegistration';
import FeesPayment from './Pages/FeePays';
import Scholarship from './Pages/Scholarship';
import Profile from './Pages/Profile'
import { useNavigate } from 'react-router-dom';



function Layout() {
  const navigate = useNavigate();

    const handleAvatarClick = () => {
        navigate('/Profile'); // Navigate to the profile page
    };

  	return (
		<Grid container>
			<Grid item md={3} xs={3} sm={2}>
				<Navbar />
			</Grid>

			<Grid item md={8} xs={7} sm={8} sx={{ position: "relative" }} >
				
				<Chat></Chat>
				

				<Outlet />
			</Grid>
			<Grid md={1} xs={2} sm={2} sx={{ position: "relative" }} >
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
					<Avatar alt="User image" src="./favicon.ico"onClick={handleAvatarClick} 
                        style={{ cursor: "pointer" }}/>
				</Box>
			</Grid>
		</Grid>
	);
}

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/sample',
        element: <Sample />,
      },
      {
        path: 'ProfDashboard',
        element: <ProfDashboard />,
      },
      {
        path: 'AllCourse',
        element: <AllCourse />,
      },
	    {
		    path: "/courses",
		    element: <Courses />
	    },
      {
        path:"/CourseRegistration",
        element: <CourseRegistration />,
      },
      {
        path:'/FeesPayment',
        element:<FeesPayment />,
      },
      {
        path:'/scholarship',
        element: <Scholarship/>,
      },
      {
        path: '/Profile',
        element: <Profile />
      }

    ],
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

