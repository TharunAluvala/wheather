import React from 'react';
import { motion } from 'framer-motion';

const ErrorState = ({ locationName, error }) => {
  return (
    <div className="weather-card h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-white">{locationName}</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.div 
          className="text-5xl text-error mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </motion.div>
        <h3 className="text-lg font-medium text-error mb-2">Unable to load weather data</h3>
        <p className="text-sm text-neutral-400">{error.message || "Please try again later"}</p>
      </div>
    </div>
  );
};

export default ErrorState;