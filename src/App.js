import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
//import { theme } from './theme/theme';
import Layout from './components/layout/Layout';
import Routes from './routes';
import { GlucoseProvider } from './context/GlucoseContext';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlucoseProvider>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </GlucoseProvider>
    </ThemeProvider>
  );
}

export default App;