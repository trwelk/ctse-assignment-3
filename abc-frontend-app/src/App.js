import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
function App() {
  
let theme = createTheme();
theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
    <div className="App" >
      <Router>
      <ToastContainer />
        <Main />
      </Router>
    </div>
  </ThemeProvider>
  );
}

export default App;
