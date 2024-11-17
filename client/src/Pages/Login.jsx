import * as React from "react";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import StudentLogin from "../Images/student_login.png";
import FacultyLogin from "../Images/faculty.png";
import AdminLogin from "../Images/admin.png"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CarouselBack from "../Components/Login/Carousel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useContextState } from "../context/context";


const ENDPOINT="http://localhost:3001";

const defaultTheme = createTheme();
const UserRole = {
  STUDENT: "student",
  FACULTY: "faculty",
  ADMIN:"admin"
};

export default function Login() {
  const navigate = useNavigate();
  const [capVal, setcapVal] = useState(null);
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(UserRole.STUDENT);
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo || !userInfo.token) {
      navigate('/');
    } else {
      roleCheck(userInfo);
    }
  }, [navigate]);

  const roleCheck = async (userInfo) => {
    console.log("Current User Role:", currentUser);
    try {
      const response = await axios.post(
        `${ENDPOINT}/api/user/authRole`, 
        {
          SID: userInfo.SID,
          role: userInfo.role
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}` 
          }
        }
      );
      // console.log(response.data);
      if (response.data.success) {
        console.log("Login Successful", response.data);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        if (response.data.role === "student") {
          navigate("/dashboard");
        } else if (response.data.role === "faculty") {
          navigate("/profdashboard");
        }else if (response.data.role === "admin") {
          navigate("/admindashboard");
        }
      }
    } catch (error) {
      console.error("Login failed", error.response.data);
      navigate('/'); // Redirect to login on error
    }
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Current User Role:", currentUser);
    localStorage.removeItem("userinfo");
    try {
      const response = await axios.post(`${ENDPOINT}/api/user/login`, {
        SID: userid,
        password: password,
        role: currentUser
      });
      console.log(response.data.success);
      if (response.data.success) {
        // console.log( response.data);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        if (currentUser === UserRole.STUDENT) {
          navigate("/dashboard");
        } else if (currentUser === UserRole.FACULTY) {
          navigate("/profdashboard");
        }else if (currentUser === UserRole.ADMIN) {
          navigate("/admindashboard");
        }
      }
    } catch (error) {
      console.error("Login failed", error.response.data.message);
    }
  };

  const handleLogout = () =>{
    localStorage.removeItem("userinfo");
    localStorage.removeItem("_grecaptcha");

    navigate('/');

  }

  const handleStudentLogin = () => {
    setCurrentUser(UserRole.STUDENT);
  };

  const handleFacultyLogin = () => {
    setCurrentUser(UserRole.FACULTY);
  };
  const handleAdminLogin =()=>{
    setCurrentUser(UserRole.ADMIN);
  }

  // Define a border style for the selected avatar
  const avatarStyle = (role) => ({
    boxShadow: currentUser === role ? "5px 3px 10px black" : "none",
    cursor: "pointer",
  });

  return (
    <div className="my-glass-effect" >
      {/* <CarouselBack /> */}
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="sm"
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <CssBaseline />
          <Box
            style={{
              // backgroundColor: "#f5f7f7",
              boxShadow: "0px 0px 8px  black",
            
              background: "transparent",

            }}
            sx={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "2em",
              padding: "3em",
              height: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                sx={{ mr: 4, width: 56, height: 56 }}
                style={{ backgroundColor: "#25396F", ...avatarStyle(UserRole.STUDENT) }} // Apply border style
                src={StudentLogin}
                onClick={handleStudentLogin}
              />
              <Avatar
                sx={{ mr:4,ml: 4, width: 56, height: 56 }}
                style={{ backgroundColor: "#25396F", ...avatarStyle(UserRole.FACULTY) }} // Apply border style
                src={FacultyLogin}
                onClick={handleFacultyLogin}
              />
              <Avatar
                sx={{ ml: 4, width: 56, height: 56 }}
                style={{ backgroundColor: "#25396F", ...avatarStyle(UserRole.ADMIN) }} // Apply border style
                src={AdminLogin}
                onClick={handleAdminLogin}
              />
            </Box>

            <Typography
              component="h1"
              variant="h5"
              sx={{ fontFamily: "Quicksand", fontWeight: "bold", m:3 }}
            >
              Login in As {currentUser}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                id="filled-basic"
                variant="standard"
                margin="normal"
                required
                fullWidth
                label="User Id "
                name="userid"
                autoFocus
                value={userid}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                InputProps={{
                  style: {
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                    color: "#25396F",
                    // backgroundColor: "white",
                  },
                }}
                autoComplete="off"
              />
              <TextField
                id="filled-basic"
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                autoComplete="off"
              />
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={(val) => setcapVal(val)}
              />
              <Button
                type="submit"
                fullWidth
                disabled={!capVal}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: "bold",
                  backgroundColor: "#25396F",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}