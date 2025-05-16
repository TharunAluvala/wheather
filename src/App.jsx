import React from 'react';
import { motion } from 'framer-motion';
import WeatherWidget from './components/WeatherWidget';

// A list of cities with their coordinates
const locations = [
  { name: "Berlin", latitude: 52.52, longitude: 13.41 },
  { name: "New York", latitude: 40.71, longitude: -74.01 },
  { name: "Tokyo", latitude: 35.68, longitude: 139.69 },
  { name: "Sydney", latitude: -33.87, longitude: 151.21 },
  { name: "Cape Town", latitude: -33.92, longitude: 18.42 },
  { name: "Rio de Janeiro", latitude: -22.91, longitude: -43.17 }
];

function App() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <motion.header 
        className="max-w-6xl mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-primary to-accent">
            Weather Forecast
          </span>
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          Real-time weather data from various locations around the world.
        </p>
      </motion.header>
      
      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={`${location.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WeatherWidget 
                locationName={location.name}
                latitude={location.latitude}
                longitude={location.longitude}
              />
            </motion.div>
          ))}
        </div>
      </main>
      
      <footer className="max-w-6xl mx-auto mt-16 text-center text-neutral-400 text-sm">
        <p>Data provided by Open-Meteo API</p>
        <p className="mt-2">© {new Date().getFullYear()} Weather App</p>
      </footer>
    </div>
  );
}

export default App;