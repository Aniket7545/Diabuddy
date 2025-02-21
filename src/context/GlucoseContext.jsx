// context/GlucoseContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const GlucoseContext = createContext();

export const GlucoseProvider = ({ children }) => {
  const [glucoseData, setGlucoseData] = useState({
    currentReading: 112,
    lastUpdate: new Date(),
    timeInRange: 75,
    weeklyStats: {
      averageGlucose: 130,
      highEvents: 3,
      lowEvents: 1
    },
    fourteenDayData: Array(14).fill().map((_, i) => ({
      date: new Date(Date.now() - (13-i) * 24 * 60 * 60 * 1000),
      averageGlucose: Math.floor(Math.random() * (180 - 70) + 70),
      timeInRange: Math.floor(Math.random() * (100 - 60) + 60)
    }))
  });

  return (
    <GlucoseContext.Provider value={{ glucoseData, setGlucoseData }}>
      {children}
    </GlucoseContext.Provider>
  );
};

export const useGlucose = () => useContext(GlucoseContext);