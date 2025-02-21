import React from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';

const Emergency = () => {
  const handleEmergencyCall = () => {
    alert('Calling Emergency Contact...');
    // Add logic to trigger an actual call or notification
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom color="error">
        Emergency Contact
      </Typography>

      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={handleEmergencyCall}
      >
        Call Emergency Contact
      </Button>
    </Box>
  );
};

export default Emergency;
