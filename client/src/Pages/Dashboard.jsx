import React from 'react'
import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Navbar from "../Components/Navbar"
import DashCards from '../Components/DashCards';

function Dashboard() {
    return (
        <>
        <Box>
        <Navbar />
            <DashCards>
              
            </DashCards>
        </Box>
        </>
      
    );
  }

export default Dashboard;