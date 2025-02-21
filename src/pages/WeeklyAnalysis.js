// pages/WeeklyAnalysis.js
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Tabs,
  Tab,
  ButtonGroup,
  Button
} from '@mui/material';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from 'recharts';

const WeeklyAnalysis = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [timeFrame, setTimeFrame] = useState('week');

  // Mock data for different correlations
  const correlationData = {
    exercise: Array(7).fill().map((_, i) => ({
      day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i],
      glucose: Math.floor(Math.random() * (180 - 70) + 70),
      exerciseMinutes: Math.floor(Math.random() * 60),
      timeInRange: Math.floor(Math.random() * (100 - 60) + 60)
    })),
    sleep: Array(7).fill().map((_, i) => ({
      day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i],
      glucose: Math.floor(Math.random() * (180 - 70) + 70),
      sleepHours: Math.floor(Math.random() * (10 - 4) + 4),
      timeInRange: Math.floor(Math.random() * (100 - 60) + 60)
    })),
    stress: Array(7).fill().map((_, i) => ({
      day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i],
      glucose: Math.floor(Math.random() * (180 - 70) + 70),
      stressLevel: Math.floor(Math.random() * 10),
      timeInRange: Math.floor(Math.random() * (100 - 60) + 60)
    }))
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Comprehensive Weekly Analysis
      </Typography>

      <ButtonGroup sx={{ mb: 3 }}>
        <Button 
          variant={timeFrame === 'week' ? 'contained' : 'outlined'}
          onClick={() => setTimeFrame('week')}
        >
          Week
        </Button>
        <Button
          variant={timeFrame === 'month' ? 'contained' : 'outlined'}
          onClick={() => setTimeFrame('month')}
        >
          Month
        </Button>
      </ButtonGroup>

      <Tabs 
        value={activeTab} 
        onChange={(_, newValue) => setActiveTab(newValue)}
        sx={{ mb: 3 }}
      >
        <Tab label="Exercise Impact" />
        <Tab label="Sleep Quality" />
        <Tab label="Stress Levels" />
      </Tabs>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            {activeTab === 0 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Exercise Impact Analysis
                </Typography>
                <Box sx={{ height: 400 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={correlationData.exercise}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        yAxisId="left"
                        dataKey="exerciseMinutes" 
                        fill="#8884d8" 
                        name="Exercise (minutes)"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="glucose"
                        stroke="#82ca9d"
                        name="Glucose (mg/dL)"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            )}
            
            {/* Similar sections for Sleep and Stress tabs */}
          </Paper>
        </Grid>

        {/* Insights Panel */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Key Insights
              </Typography>
              <Typography variant="body2" paragraph>
                • Morning exercise sessions show 30% better glucose control
              </Typography>
              <Typography variant="body2" paragraph>
                • 7+ hours of sleep correlates with 25% better time in range
              </Typography>
              <Typography variant="body2" paragraph>
                • High stress days show 40% more glucose variability
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeeklyAnalysis;