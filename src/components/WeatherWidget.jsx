import React from 'react';
import CurrentWeather from './CurrentWeather.jsx';
import WeatherForecast from './WeatherForecast.jsx';
import useWeatherData from '../hooks/useWeatherData.js';
import LoadingState from './LoadingState.jsx';
import ErrorState from './ErrorState.jsx';

const WeatherWidget = ({ locationName, latitude, longitude }) => {
  const { data, isLoading, error } = useWeatherData(latitude, longitude);
  
  if (isLoading) {
    return <LoadingState locationName={locationName} />;
  }
  
  if (error) {
    return <ErrorState locationName={locationName} error={error} />;
  }
  
  return (
    <div className="weather-card h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-white">{locationName}</h2>
      </div>
      
      {data && (
        <>
          <CurrentWeather 
            temperature={data.current.temperature_2m}
            weatherCode={data.current_weather_code}
            time={data.current.time}
          />
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-neutral-200 mb-4">3-Day Forecast</h3>
            <WeatherForecast forecast={data.daily} />
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherWidget;