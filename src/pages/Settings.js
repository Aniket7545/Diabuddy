import React from 'react';
import {
  Box,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
        }
        label="Enable Notifications"
      />

      <FormControlLabel
        control={
          <Switch
            checked={darkModeEnabled}
            onChange={() => setDarkModeEnabled(!darkModeEnabled)}
          />
        }
        label="Enable Dark Mode"
      />
    </Box>
  );
};

export default Settings;
