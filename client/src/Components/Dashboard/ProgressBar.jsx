import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import PropTypes from "prop-types"; // Import PropTypes

// Component that combines CircularProgress with a label inside it
function CircularProgressWithLabel(props) {
  return (
    <Paper sx={{ width: '100%', borderRadius: '20px' }}>
      <Box sx={{ position: "relative", display: "block", marginLeft: '30%', justifyContent: 'center', alignItems: 'center', paddingTop: '10%' }}>
        <CircularProgress
          variant="determinate"
          size={130}
          thickness={5}
          {...props}
        />

        <Box
          sx={{
            top: '20%',
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            paddingLeft: '20%',
            paddingBottom: '20%'
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
    </Paper>
  );
}

// Add propTypes for CircularProgressWithLabel
CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired, // Validate value prop
};

export default function CircularStatic() {
  return <CircularProgressWithLabel value={70} />;
}
