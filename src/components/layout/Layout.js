import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        bgcolor: 'background.default'
      }}
    >
      <Header />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          pt: { xs: 2, sm: 4 },
          mt: '64px', // Height of the fixed header
          position: 'relative',
          zIndex: 1
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;