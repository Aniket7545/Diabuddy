import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

const mockData = [
  { time: '8:00 AM', glucose: 110, carbs: '30g', exercise: '15 min' },
  { time: '12:00 PM', glucose: 140, carbs: '50g', exercise: '10 min' },
  { time: '6:00 PM', glucose: 120, carbs: '40g', exercise: '30 min' },
];

const DailyBreakdown = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Daily Breakdown
      </Typography>

      <Grid container spacing={3}>
        {mockData.map((entry, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {entry.time}
                </Typography>
                <Typography variant="body1">
                  <strong>Glucose:</strong> {entry.glucose} mg/dL
                </Typography>
                <Typography variant="body1">
                  <strong>Carbs:</strong> {entry.carbs}
                </Typography>
                <Typography variant="body1">
                  <strong>Exercise:</strong> {entry.exercise}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DailyBreakdown;
