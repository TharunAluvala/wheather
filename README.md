# Weather App

A modern React application that displays weather data for different locations around the world.

## Features

- Reusable weather widget component
- Current weather display with temperature, description, and icons
- 3-day weather forecast for each location
- Multiple locations showing different weather data
- Error handling and loading states
- Responsive design for all device sizes

## Technologies Used

- React (with hooks)
- Tailwind CSS for styling
- Framer Motion for animations
- Date-fns for date formatting
- Fetch API for data fetching

## API

This application uses the Open-Meteo Weather API to fetch weather data.

## Component Structure

- **WeatherWidget**: Main reusable component that displays weather for a specific location
- **CurrentWeather**: Displays current temperature and weather condition
- **WeatherForecast**: Shows a 3-day forecast with temperatures and conditions
- **LoadingState**: Displayed while data is being fetched
- **ErrorState**: Shown when there's an error fetching data

## Custom Hooks

- **useWeatherData**: Manages API data fetching, loading states, and error handling

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`

## Usage

To add a new location, simply add an entry to the `locations` array in `App.jsx`:

```jsx
const locations = [
  { name: "Berlin", latitude: 52.52, longitude: 13.41 },
  // Add your new location here
  { name: "Paris", latitude: 48.85, longitude: 2.35 }
];
```

## License

MIT