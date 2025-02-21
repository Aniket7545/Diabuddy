import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { Call, HelpOutline } from '@mui/icons-material';

const Emergency = () => {
  const handleEmergencyCall = () => {
    alert('Calling Emergency Contact...');
    // Add logic to trigger an actual call or notification
  };

  const emergencyContacts = [
    { name: 'Diabetes Helpline', number: '1-800-DIABETES' },
    { name: 'Local Emergency Services', number: '911' },
    { name: 'Doctor On Call', number: '+1-234-567-890' },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Header */}
      <Typography variant="h4" gutterBottom align="center">
        Emergency Assistance
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
        In case of an emergency, please contact the nearest medical services or use the helpline numbers below.
      </Typography>

      {/* Emergency Call Button */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Button
          variant="contained"
          color="error"
          size="large"
          startIcon={<Call />}
          onClick={handleEmergencyCall}
        >
          Call Emergency Contact
        </Button>
      </Box>

      {/* Helpline Numbers */}
      <Grid container spacing={4}>
        {emergencyContacts.map((contact, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {contact.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {contact.number}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<Call />}
                  sx={{ mt: 2 }}
                  onClick={() => alert(`Calling ${contact.name}...`)}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Emergency Guide */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          What to Do in Case of an Emergency
        </Typography>
        <Typography variant="body2" color="text.secondary">
          - If you experience severe hypoglycemia or hyperglycemia, contact emergency services immediately.<br />
          - Keep glucose tablets or sugary snacks available to manage low blood sugar.<br />
          - Inform someone nearby about your condition and ask for assistance.<br />
          - Stay calm and follow your doctor's emergency protocol.
        </Typography>
      </Box>
    </Container>
  );
};

export default Emergency;
