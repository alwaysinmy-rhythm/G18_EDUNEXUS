// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Replace with your desired primary color
    },
    secondary: {
      main: '#ff4081', // Replace with your desired secondary color
    },
    background: {
      default: '#f4f6f8', // Light background color
      paper: '#ffffff', // White background for paper components
    },
    text: {
      primary: '#333333', // Primary text color
      secondary: '#555555', // Secondary text color
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(to top left, #FFFFFF, #ADD8E6)', // Gradient from top-left to bottom-right
          minHeight: '100vh',
          margin: 0,
          padding: 0,
        },
      },
    },
    
  },
});

export default theme;
