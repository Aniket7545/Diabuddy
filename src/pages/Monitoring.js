import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Alert,
  IconButton,
  LinearProgress,
  Chip,
  Button,
  styled,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  Notifications,
  Warning,
  CheckCircle,
  AccessTime,
  Bloodtype,
  Restaurant,
  DirectionsRun,
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Styled Components
const GlucoseCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  position: 'relative',
  overflow: 'visible',
}));

const StatusChip = styled(Chip)(({ theme, status }) => ({
  position: 'absolute',
  top: -12,
  right: 16,
  padding: '0 8px',
  backgroundColor: 
    status === 'high' ? theme.palette.error.main :
    status === 'low' ? theme.palette.warning.main :
    theme.palette.success.main,
  color: '#fff',
}));

const EventCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: '12px',
  transition: 'transform 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateX(5px)',
  },
}));

const Monitoring = () => {
  // Mock data - in real app, this would come from your CGM integration
  const [currentGlucose] = useState(142);
  const [glucoseTrend] = useState('stable');
  const [inRange] = useState(true);
  
  const mockData = [
    { time: '8:00', glucose: 120 },
    { time: '9:00', glucose: 135 },
    { time: '10:00', glucose: 142 },
    { time: '11:00', glucose: 138 },
    { time: '12:00', glucose: 145 },
    { time: '13:00', glucose: 142 },
  ];

  const recentEvents = [
    { type: 'meal', time: '1 hour ago', description: 'Lunch - 45g carbs' },
    { type: 'exercise', time: '3 hours ago', description: '30 min walk' },
    { type: 'medication', time: '4 hours ago', description: 'Insulin - 4 units' },
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'rising':
        return <TrendingUp />;
      case 'falling':
        return <TrendingDown />;
      default:
        //return <Trending />;
    }
  };

  const getStatusText = (value) => {
    if (value > 180) return { text: 'High', status: 'high' };
    if (value < 70) return { text: 'Low', status: 'low' };
    return { text: 'In Range', status: 'normal' };
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'meal':
        return <Restaurant />;
      case 'exercise':
        return <DirectionsRun />;
      default:
        return <Bloodtype />;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Alert Banner */}
      {!inRange && (
        <Alert 
          severity="warning" 
          sx={{ mb: 3 }}
          action={
            <Button color="inherit" size="small">
              View Details
            </Button>
          }
        >
          Glucose level outside target range. Take action as per your care plan.
        </Alert>
      )}

      <Grid container spacing={4}>
        {/* Current Glucose Card */}
        <Grid item xs={12} md={6}>
          <GlucoseCard>
            <StatusChip 
              label={getStatusText(currentGlucose).text}
              status={getStatusText(currentGlucose).status}
            />
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" color="text.secondary">
                  Current Glucose
                </Typography>
                <IconButton size="small" sx={{ ml: 'auto' }}>
                  <Notifications />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                  {currentGlucose}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                  mg/dL
                </Typography>
                {getTrendIcon(glucoseTrend)}
              </Box>
              <Typography variant="body2" color="text.secondary">
                Updated just now
              </Typography>
            </CardContent>
          </GlucoseCard>
        </Grid>

        {/* Stats Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', borderRadius: '16px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Today's Stats
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Time in Range
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Typography variant="h6">75%</Typography>
                    <CheckCircle color="success" sx={{ ml: 1 }} />
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={75} 
                    sx={{ mt: 1 }} 
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    Average Glucose
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    138 mg/dL
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Graph Card */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: '16px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Glucose Trend
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={[60, 200]} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="glucose" 
                      stroke="#2196f3" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Events */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Recent Events
          </Typography>
          {recentEvents.map((event, index) => (
            <EventCard key={index}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {getEventIcon(event.type)}
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle1">
                      {event.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <AccessTime sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'text-bottom' }} />
                      {event.time}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </EventCard>
          ))}
        </Grid>

        {/* Alerts & Notifications */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Alerts & Notifications
          </Typography>
          <Card sx={{ borderRadius: '16px' }}>
            <CardContent>
              <Alert severity="info" sx={{ mb: 2 }}>
                Next calibration due in 4 hours
              </Alert>
              <Alert severity="success" sx={{ mb: 2 }}>
                Great job! You've been in range for the last 6 hours
              </Alert>
              <Alert severity="warning">
                Sensor change required in 2 days
              </Alert>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Monitoring;