export const calculateTimeInRange = (readings, targetRange) => {
    if (!readings || readings.length === 0) return 0;
    
    const inRange = readings.filter(reading => 
      reading.glucose >= targetRange.min && reading.glucose <= targetRange.max
    );
    return (inRange.length / readings.length) * 100;
  };
  
  export const calculateDailyStats = (readings) => {
    if (!readings || readings.length === 0) {
      return {
        average: 0,
        min: 0,
        max: 0,
        standardDeviation: 0
      };
    }
  
    const glucoseValues = readings.map(r => r.glucose);
    const sum = glucoseValues.reduce((a, b) => a + b, 0);
    const avg = sum / glucoseValues.length;
    
    const variance = glucoseValues.reduce((acc, val) => 
      acc + Math.pow(val - avg, 2), 0) / glucoseValues.length;
    
    return {
      average: Math.round(avg),
      min: Math.min(...glucoseValues),
      max: Math.max(...glucoseValues),
      standardDeviation: Math.round(Math.sqrt(variance))
    };
  };
  
  export const calculateGlucoseTrend = (readings) => {
    if (!readings || readings.length < 3) return 'Stable';
  
    const recent = readings.slice(-3);
    const changes = recent.map((reading, i) => 
      i > 0 ? reading.glucose - recent[i-1].glucose : 0
    ).slice(1);
    
    const avgChange = changes.reduce((a, b) => a + b, 0) / changes.length;
  
    if (Math.abs(avgChange) < 3) return 'Stable';
    if (avgChange > 0) return avgChange > 10 ? 'Rising Rapidly' : 'Rising';
    return avgChange < -10 ? 'Falling Rapidly' : 'Falling';
  };
  
  export const getGlucoseLevel = (value) => {
    if (value < 54) return { status: 'Severe Low', color: '#d32f2f' };
    if (value < 70) return { status: 'Low', color: '#f57c00' };
    if (value <= 180) return { status: 'In Range', color: '#388e3c' };
    if (value <= 250) return { status: 'High', color: '#f57c00' };
    return { status: 'Very High', color: '#d32f2f' };
  };
  
  export const formatGlucoseData = (readings) => {
    return readings.map(reading => ({
      ...reading,
      time: new Date(reading.time).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    }));
  };