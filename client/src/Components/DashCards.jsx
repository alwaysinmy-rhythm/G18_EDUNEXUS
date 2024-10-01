import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Movable from './Movable';
import TimeTable from './TimeTable';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Events from './Events';
import ProgressBar from './ProgressBar';
import '../CSS/DashCards.css'
import DashCourse from './DashCourse';

function DashCards() {
  return (
    <Box>
      <Grid container>
        <h1>Welcome, Students</h1>
        {/* Box for the PersonIcon with position absolute */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: '16px',
            display:'flex',
          }}
        >
          <NotificationsNoneIcon 
          fontSize="large" 
          sx={{marginRight:'30px',marginTop:'5px'}}>

          </NotificationsNoneIcon>
          <Avatar alt="User image" src="./favicon.ico" />
        </Box>
        <Grid container spacing={2} sx={{ marginTop: '16px' }}>
          {/* Add margin top for spacing */}
          <Grid item md={4} xs={12}>
            
              <Paper sx={{ marginTop: '16px', borderRadius:'20px 20px 20px 20px', overflow:'hidden' }}>

              <DashCourse/>
              </Paper>
              <Paper sx={{ marginTop: '20px', borderRadius:'20px 20px 20px 20px' }}>

              <Events/>
              </Paper>
          </Grid>
          <Grid item md={4} xs={12} sx={{ marginTop: '16px' }}>
              <ProgressBar />
              <TimeTable />
            
          </Grid>
          
          <Grid item md={4} xs={12}>
            <Movable />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashCards;
