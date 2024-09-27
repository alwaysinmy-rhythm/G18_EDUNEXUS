import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Component that combines CircularProgress with a label inside it
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "block" ,marginLeft:'30%',marginTop:'20px',justifyContent:'center',alignItems:'center'}}>
      <CircularProgress
        variant="determinate"
        size={120}
        thickness={5}
        
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          // border:'2px solid red',
          paddingLeft:'20%',
          paddingBottom:'20%'         
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>

      </Box>
      <h4>Attendance</h4>
    </Box>
  );
}

export default function CircularStatic() {
 
  return <CircularProgressWithLabel value={70} />;
}
