# Weather Dashboard API Documentation

## Overview

This document describes the Weather API integration for the Weather Dashboard application. The API provides real-time weather data and forecasts for multiple cities.

## Base URL

```
https://api.weather-dashboard.com/v1
```

## Authentication

Currently, the API does not require authentication. However, rate limiting is enforced per IP address.

## Endpoints

### GET /weather

Fetch current weather data for a specific city.

**Parameters:**
- `city` (string, required): City name or coordinates
- `units` (string, optional): Temperature units (celsius, fahrenheit). Default: celsius
- `lang` (string, optional): Response language. Default: en

**Response:**
```json
{
  "temperature": 25,
  "humidity": 60,
  "windSpeed": 10,
  "condition": "Sunny",
  "feelsLike": 26,
  "visibility": 10,
  "pressure": 1013,
  "timestamp": "2026-03-12T10:00:00Z"
}
```

**Status Codes:**
- 200: Success
- 400: Invalid parameters
- 404: City not found
- 429: Rate limit exceeded
- 500: Server error

### GET /forecast

Fetch weather forecast for a specific city.

**Parameters:**
- `city` (string, required): City name
- `days` (number, optional): Number of forecast days (1-14). Default: 7
- `units` (string, optional): Temperature units. Default: celsius

**Response:**
```json
[
  {
    "date": "2026-03-13",
    "high": 28,
    "low": 20,
    "condition": "Partly Cloudy",
    "precipitation": 0.5,
    "windSpeed": 12,
    "humidity": 65
  }
]
```

### GET /cities

Search for cities by name.

**Parameters:**
- `query` (string, required): City name or partial name
- `limit` (number, optional): Maximum results. Default: 10

**Response:**
```json
[
  {
    "name": "Beijing",
    "country": "China",
    "latitude": 39.9042,
    "longitude": 116.4074
  }
]
```

## Error Handling

All endpoints return appropriate HTTP status codes and error messages:

```json
{
  "error": "City not found",
  "code": "CITY_NOT_FOUND",
  "message": "The requested city could not be found in our database"
}
```

## Rate Limiting

API calls are rate-limited to:
- **100 requests per minute** for free tier
- **1000 requests per minute** for premium tier

Rate limit information is included in response headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1647067200
```

## Data Formats

### Temperature Units
- `celsius`: Celsius (°C)
- `fahrenheit`: Fahrenheit (°F)

### Weather Conditions
- Sunny
- Cloudy
- Partly Cloudy
- Rainy
- Snowy
- Stormy
- Foggy
- Windy

## Integration Examples

### JavaScript/TypeScript

```typescript
import { fetchWeatherData, fetchForecast } from './lib/weatherApi';

// Fetch current weather
const weather = await fetchWeatherData('Beijing');
console.log(`Temperature: ${weather.temperature}°C`);

// Fetch forecast
const forecast = await fetchForecast('Beijing', 7);
forecast.forEach(day => {
  console.log(`${day.date}: ${day.high}°C / ${day.low}°C`);
});
```

### React Hook

```typescript
import { useWeather } from './hooks/useWeather';

function WeatherDisplay() {
  const { data, loading, error } = useWeather('Beijing');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h2>Beijing</h2>
      <p>Temperature: {data?.temperature}°C</p>
      <p>Condition: {data?.condition}</p>
    </div>
  );
}
```

## Best Practices

1. **Caching**: Cache API responses for at least 5 minutes to reduce requests
2. **Error Handling**: Always implement proper error handling and fallbacks
3. **Rate Limiting**: Monitor rate limit headers and implement backoff strategies
4. **Timeout**: Set appropriate timeouts (5-10 seconds) for API requests
5. **Validation**: Validate user input before making API calls

## Changelog

### Version 1.0.0 (2026-03-12)
- Initial API release
- Weather and forecast endpoints
- City search functionality
- Rate limiting implementation

## Support

For API support and issues:
- GitHub Issues: https://github.com/yzalist/weather-dashboard/issues
- Email: support@weather-dashboard.com
