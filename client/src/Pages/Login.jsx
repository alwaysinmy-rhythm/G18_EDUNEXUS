import * as React from "react";
import {useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CarouselBack from "../Components/Carousel"

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";

// import Alert from "@mui/material/Alert";
const defaultTheme = createTheme();

export default function Login() {

  const [capVal,setcapVal] = useState(null);
  const [userid,setUserId] = useState("");
  const [password,setPassword] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
    return (
        
        <div className="my-glass-effect">
            <CarouselBack>
              
            </CarouselBack>
          <ThemeProvider theme={defaultTheme}>
            <Container
              component="main"
              maxWidth="sm"
              sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
            >
              <CssBaseline />
              <Box
                style={{
                  backgroundColor: "#f5f7f7",
                  boxShadow: "0px 4px 8px #f5f7f7",
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
                <Avatar sx={{ m: 1 }} style={{ backgroundColor: "#25396F" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                >
                  Sign in
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1, width: "100%" }}
                >
                  <TextField
                    id="standard-basic-1"
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
                      },
                    }}
                    // error={justVerify && emailUsername === ""}
                    // helperText={
                    // //   justVerify &&
                    // //   (emailUsername == "" ? "This field cannot be empty." : "")
                    // }
                    autoComplete="off"
                  />
                  <TextField
                    id="standard-basic-2"
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    onChange={(e)=>{
                      setPassword(e.target.value);
                      
                    }}
                    value={password}
                    // InputProps={{
                    //   style: {
                    //     fontFamily: "Quicksand",
                    //     fontWeight: "bold",
                    //     color: !validPassword ? "#f44336" : "#25396F",
                    //   },
                    // }}
                    // error={justVerify && (!validPassword || password === "")}
                    // helperText={
                    //   justVerify &&
                    //   (password === ""
                    //     ? "This field cannot be empty."
                    //     : !validPassword
                    //     ? "The password must contain at least 8 digits."
                    //     : "")
                    // }
                    autoComplete="off"
                  />
                  <ReCAPTCHA 
                    sitekey="6LdtUU0qAAAAAI11hOAM2nK48TORf7rhUTmEDuYe"
                    onChange = {val=>setcapVal(val)}
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
                    {/* {!loading ? "Sign In" : "Signing In...."} */}
                  </Button>
                  {/* <Grid container> */}
                    {/* <Grid item xs={12}> */}
                      {/* {window.localStorage.getItem("token") === null && isAlert && ( */}
                        {/* <Alert
                          variant="filled"
                          severity="error"
                          style={{ fontFamily: "Quicksand", fontWeight: "600" }}
                        >
                          Invalid Email and/or Password
                        </Alert> */}
                    
                    {/* </Grid> */}
                    
                  {/* </Grid> */}
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      );
    }