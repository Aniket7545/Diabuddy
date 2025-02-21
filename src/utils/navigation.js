// utils/navigation.js
import {
    Home,
    Dashboard,
    CalendarToday,
    TrendingUp,
    School,
    People,
    Stars,
    Settings,
    Assignment
  } from '@mui/icons-material';
  
  export const navigationItems = [
    { text: 'Home', path: '/', icon: <Home /> },
    { text: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
    { text: 'Daily Breakdown', path: '/daily', icon: <CalendarToday /> },
    { text: 'Weekly Analysis', path: '/weekly', icon: <TrendingUp /> },
    { text: 'Personalized Plan', path: '/plan', icon: <Assignment /> },
    { text: 'Education Hub', path: '/education', icon: <School /> },
    { text: 'Community', path: '/community', icon: <People /> },
    { text: 'Rewards', path: '/rewards', icon: <Stars /> },
    { text: 'Settings', path: '/settings', icon: <Settings /> }
  ];