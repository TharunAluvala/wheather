import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { getWeatherIcon } from '../utils/weatherHelpers';

const WeatherForecast = ({ forecast }) => {
  if (!forecast || !forecast.weathercode) {
    return null;
  }
  
  // Get last 3 days of forecast (since the API includes past_days=3)
  const forecastDays = forecast.weathercode.slice(-3);
  const minTemps = forecast.temperature_2m_min.slice(-3);
  const maxTemps = forecast.temperature_2m_max.slice(-3);
  const dates = forecast.time.slice(-3);
  
  return (
    <div className="grid grid-cols-3 gap-3">
      {forecastDays.map((weatherCode, index) => {
        const WeatherIcon = getWeatherIcon(weatherCode);
        const date = new Date(dates[index]);
        const formattedDate = format(date, 'EEE');
        const minTemp = Math.round(minTemps[index]);
        const maxTemp = Math.round(maxTemps[index]);
        
        return (
          <motion.div 
            key={dates[index]}
            className="forecast-item flex flex-col items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="text-sm font-medium mb-2">{formattedDate}</div>
            <div className="text-2xl text-accent my-1">
              <WeatherIcon />
            </div>
            <div className="text-sm mt-2">
              <span className="text-white font-medium">{maxTemp}°</span>
              <span className="text-neutral-400 mx-1">/</span>
              <span className="text-neutral-400">{minTemp}°</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default WeatherForecast;