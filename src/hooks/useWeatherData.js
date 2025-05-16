import { useState, useEffect } from 'react';
import { parseWeatherData } from '../utils/weatherHelpers';

const useWeatherData = (latitude, longitude) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current=temperature_2m,weathercode&timezone=auto&past_days=3`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const rawData = await response.json();
        const parsedData = parseWeatherData(rawData);
        
        setData(parsedData);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchWeatherData();
  }, [latitude, longitude]);
  
  return { data, isLoading, error };
};

export default useWeatherData;