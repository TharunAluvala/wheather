import React from 'react';
import { motion } from 'framer-motion';
import { getWeatherDescription, getWeatherIcon } from '../utils/weatherHelpers';

const CurrentWeather = ({ temperature, weatherCode, time }) => {
  const weatherDescription = getWeatherDescription(weatherCode);
  const WeatherIcon = getWeatherIcon(weatherCode);
  
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div 
        className="text-6xl font-light mb-2"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {temperature !== undefined ? `${Math.round(temperature)}°` : '--°'}
      </motion.div>
      
      <motion.div 
        className="text-7xl text-accent mb-4"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <WeatherIcon />
      </motion.div>
      
      <motion.div
        className="text-lg text-neutral-200"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {weatherDescription}
      </motion.div>
    </div>
  );
};

export default CurrentWeather;