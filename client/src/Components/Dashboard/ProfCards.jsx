import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Movable from './Movable';
import TimeTable from './TimeTable';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Events from './Events';
import '../../CSS/DashCards.css';
import DashCourse from './DashCourse';


function ProfCards() {
  return (
    <Box>
      <Grid container>
        <h1>Welcome, Sir</h1>
        
        <Grid container spacing={2} sx={{ marginTop: '16px' }}>
          <Grid container md={8} sx={{ marginTop: '30px' }}>
            <TimeTable />
            <Grid item md={6}>

            <Events height={'200px'} />
            </Grid>
            <Grid item md={6}>

            <Paper sx={{ marginTop: '20px', borderRadius:'20px 20px 20px 20px', overflow:'hidden' }}>

              <DashCourse/>
              </Paper>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Movable />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfCards;
