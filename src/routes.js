// routes/index.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DailyBreakdown from './pages/DailyBreakdown';
import WeeklyAnalysis from './pages/WeeklyAnalysis';
import Emergency from './pages/Emergency';
import Settings from './pages/Settings';
import Education from './pages/Education';
import Community from './pages/Community';
import PersonalizedPlan from './pages/PersonalizedPlan';
import Rewards from './pages/Rewards';
import Monitoring from './pages/Monitoring';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/daily" element={<DailyBreakdown />} />
    <Route path="/weeklyanalysis" element={<WeeklyAnalysis />} />
    <Route path="/emergency" element={<Emergency />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/education" element={<Education />} />
    <Route path="/community" element={<Community />} />
    <Route path="/plan" element={<PersonalizedPlan />} />
    <Route path="/rewards" element={<Rewards />} />
    <Route path="/monitoring" element={<Monitoring />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;