// pages/Dashboard.js
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  LinearProgress,
  CircularProgress
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { useGlucose } from '../context/GlucoseContext';

const Dashboard = () => {
  const { glucoseData } = useGlucose();

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        14-Day Progress Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Current Status with Enhanced Visuals */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current Status
              </Typography>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                  variant="determinate"
                  value={glucoseData.timeInRange}
                  size={120}
                  thickness={4}
                  sx={{
                    color: glucoseData.timeInRange >= 70 ? 'success.main' : 'warning.main'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4" component="div" color="text.secondary">
                    {glucoseData.currentReading}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Last updated: {new Date(glucoseData.lastUpdate).toLocaleTimeString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* 14-Day Progress */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              14-Day Progress
            </Typography>
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={glucoseData.fourteenDayData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(date) => new Date(date).toLocaleDateString()}
                  />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [
                      `${value}${name === 'timeInRange' ? '%' : ' mg/dL'}`,
                      name === 'timeInRange' ? 'Time in Range' : 'Average Glucose'
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="timeInRange"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.3}
                  />
                  <Area
                    type="monotone"
                    dataKey="averageGlucose"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;