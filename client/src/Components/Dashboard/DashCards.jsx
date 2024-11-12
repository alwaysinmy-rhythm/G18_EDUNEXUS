import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Movable from './Movable';
import TimeTable from './TimeTable';
import Events from './Events';
import ProgressBar from './ProgressBar';
import '../../CSS/DashCards.css';
import DashCourse from './DashCourse';


function DashCards() {
  return (
    <Box>
      <Grid container>
        <h1>Welcome, Students</h1>
       
        <Grid container spacing={2} sx={{ marginTop: '16px' }}>
          <Grid item md={4} xs={12}>
            
              <Paper sx={{ marginTop: '16px', borderRadius:'20px 20px 20px 20px', overflow:'hidden' }}>

              <DashCourse/>
              </Paper>
              <Paper sx={{ marginTop: '20px', borderRadius:'20px 20px 20px 20px' }}>

              <Events height={'250px'}/>
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
