
import './App.css';
import HomePage from './pages/HomePage';
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <HomePage />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
