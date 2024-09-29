import './App.css';
// import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Components/theme';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
   <>
   <ThemeProvider theme={theme}>
   <CssBaseline />

  {/* <Login />  */}
    <Dashboard />
    </ThemeProvider>
   </>
  );
}

export default App;
