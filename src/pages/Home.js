// pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: "14-Day Optimization",
      description: "Achieve stable blood glucose through personalized insights",
      icon: "📈"
    },
    {
      title: "AI-Powered Analysis",
      description: "Smart pattern recognition for better diabetes management",
      icon: "🤖"
    },
    {
      title: "Real-time Monitoring",
      description: "Track your glucose levels with precision",
      icon: "⚡"
    },
    {
      title: "Community Support",
      description: "Connect with others on similar journeys",
      icon: "👥"
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ py: 8 }}>
          {/* Hero Section */}
          <Grid item xs={12} md={6}>
            <motion.div {...fadeIn}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                DiaBuddy
              </Typography>
              <Typography variant="h5" sx={{ mt: 2, mb: 4, color: '#666' }}>
                Your AI-powered companion for optimal diabetes management
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => navigate('/dashboard')}
                sx={{
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  borderRadius: '25px',
                  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                  color: 'white',
                  padding: '10px 30px'
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </Grid>

          {/* Animated Stats Display */}
          <Grid item xs={12} md={6}>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Add animated circular progress or stats visualization here */}
            </motion.div>
          </Grid>

          {/* Features Grid */}
          <Grid item xs={12}>
            <Grid container spacing={3} sx={{ mt: 4 }}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card 
                      sx={{ 
                        height: '100%',
                        borderRadius: '15px',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                        transition: '0.3s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
                        }
                      }}
                    >
                      <CardContent>
                        <Typography variant="h1" sx={{ mb: 2 }}>
                          {feature.icon}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;