import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Link,
  styled,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart, 
  Timer, 
  Insights, 
  Group, 
  ArrowForward 
} from '@mui/icons-material';

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0061ff 0%, #60efff 100%)',
  minHeight: '85vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    '& .arrow-icon': {
      transform: 'translateX(5px)',
    }
  }
}));

const CTAButton = styled(Button)(({ theme }) => ({
  padding: '12px 32px',
  borderRadius: '30px',
  fontSize: '1.1rem',
  textTransform: 'none',
  background: theme.palette.secondary.main,
  '&:hover': {
    background: theme.palette.secondary.dark,
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const features = [
    {
      icon: <BarChart fontSize="large" />,
      title: '14-Day Optimization',
      description: 'Achieve stable blood glucose through personalized insights and continuous monitoring.',
      route: '/dashboard',
      actionText: 'View Dashboard'
    },
    {
      icon: <Insights fontSize="large" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced pattern recognition and predictive analytics for proactive diabetes management.',
      route: '/WeeklyAnalysis',
      actionText: 'View Analysis'
    },
    {
      icon: <Timer fontSize="large" />,
      title: 'Real-time Monitoring',
      description: 'Track glucose levels, medication, and lifestyle factors with precision and ease.',
      route: '/monitoring',
      actionText: 'Start Monitoring'
    },
    {
      icon: <Group fontSize="large" />,
      title: 'Community Support',
      description: 'Connect with peers, share experiences, and access expert guidance on your journey.',
      route: '/community',
      actionText: 'Join Community'
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 2
                  }}
                >
                   Diabetes Management Made Simple
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4,
                    opacity: 0.9,
                    fontWeight: 400
                  }}
                >
                  Take control of your health with AI-powered insights and personalized care
                </Typography>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CTAButton
                    variant="contained"
                    onClick={() => navigate('/dashboard')}
                  >
                    Start Your Journey
                  </CTAButton>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Box
                  component="img"
                  src="/diabetesmanagement.jpg"
                  alt="Diabetes Management"
                  sx={{ width: '100%', maxWidth: 600 }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Empowering Features
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FeatureCard onClick={() => handleCardClick(feature.route)}>
                  <IconWrapper>
                    {feature.icon}
                    <ArrowForward 
                      className="arrow-icon" 
                      sx={{ 
                        transition: 'transform 0.3s ease',
                        fontSize: '1.2rem'
                      }} 
                    />
                  </IconWrapper>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ mb: 2, flex: 1 }}
                  >
                    {feature.description}
                  </Typography>
                  <Typography 
                    variant="button" 
                    color="primary"
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    {feature.actionText}
                  </Typography>
                </FeatureCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: 'background.paper',
          py: 6,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* Footer content remains the same */}
      </Box>
    </Box>
  );
};

export default Home;