/**
 * Weather API Integration Module
 * Handles API calls and data transformation
 */

export interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  feelsLike: number;
  visibility: number;
  pressure: number;
}

export interface ForecastData {
  date: string;
  high: number;
  low: number;
  condition: string;
  precipitation: number;
}

export async function fetchWeatherData(city: string): Promise<WeatherData> {
  try {
    const response = await fetch(`/api/weather?city=${city}`);
    if (!response.ok) throw new Error('Failed to fetch weather');
    return await response.json();
  } catch (error) {
    console.error('Weather API error:', error);
    throw error;
  }
}

export async function fetchForecast(city: string, days: number = 7): Promise<ForecastData[]> {
  try {
    const response = await fetch(`/api/forecast?city=${city}&days=${days}`);
    if (!response.ok) throw new Error('Failed to fetch forecast');
    return await response.json();
  } catch (error) {
    console.error('Forecast API error:', error);
    throw error;
  }
}

export function transformWeatherData(data: any): WeatherData {
  return {
    temperature: Math.round(data.temp * 10) / 10,
    humidity: data.humidity,
    windSpeed: data.wind_speed,
    condition: data.weather_condition,
    feelsLike: Math.round(data.feels_like * 10) / 10,
    visibility: data.visibility,
    pressure: data.pressure,
  };
}
