import React from 'react';
import { motion } from 'framer-motion';

const LoadingState = ({ locationName }) => {
  return (
    <div className="weather-card h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-white">{locationName}</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div 
          className="w-16 h-16 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <p className="mt-4 text-neutral-300">Loading weather data...</p>
      </div>
    </div>
  );
};

export default LoadingState;