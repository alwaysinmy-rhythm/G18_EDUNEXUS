import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import Movable from './Movable';
import TimeTable from './TimeTable';
import PersonIcon from '@mui/icons-material/Person';

function DashCards() {
  return (
    <Box>
      <Grid container>
        <Grid item md={3} xs={6} sm={3}>
          {/* Left sidebar can go here */}
        </Grid>
        <Grid item md={9} xs={6} sm={9} sx={{ position: 'relative' }}>
          <h1>Welcome, Students</h1>
          {/* Box for the PersonIcon with position absolute */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: '16px',
            }}
          >
            <PersonIcon fontSize="large" />
          </Box>
          <Grid container spacing={2} sx={{ marginTop: '16px' }}>
            {/* Add margin top for spacing */}
            <Grid item md={4} xs={12}>
              <Paper>
                <h1>Today</h1>
              </Paper>
            </Grid>
            <Grid item md={4} xs={12} sx={{ marginTop: '16px' }}>
              <Paper>
                <TimeTable />
              </Paper>
            </Grid>
            <Grid item md={4} xs={12}>
              <Movable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashCards;
