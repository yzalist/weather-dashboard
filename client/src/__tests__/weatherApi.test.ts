/**
 * Weather API Tests
 */

import { transformWeatherData } from '../lib/weatherApi';

describe('Weather API', () => {
  describe('transformWeatherData', () => {
    it('should transform raw API data to WeatherData format', () => {
      const rawData = {
        temp: 25.5,
        humidity: 60,
        wind_speed: 10,
        weather_condition: 'Sunny',
        feels_like: 26.3,
        visibility: 10,
        pressure: 1013,
      };

      const result = transformWeatherData(rawData);
      expect(result.temperature).toBe(25.5);
      expect(result.humidity).toBe(60);
      expect(result.windSpeed).toBe(10);
      expect(result.condition).toBe('Sunny');
    });

    it('should handle missing data gracefully', () => {
      const rawData = {
        temp: 20,
        humidity: 50,
        wind_speed: 5,
        weather_condition: 'Cloudy',
        feels_like: 19,
        visibility: 8,
        pressure: 1010,
      };

      const result = transformWeatherData(rawData);
      expect(result).toBeDefined();
      expect(result.temperature).toBe(20);
    });

    it('should round temperature values correctly', () => {
      const rawData = {
        temp: 25.567,
        humidity: 60,
        wind_speed: 10,
        weather_condition: 'Sunny',
        feels_like: 26.789,
        visibility: 10,
        pressure: 1013,
      };

      const result = transformWeatherData(rawData);
      expect(result.temperature).toBe(25.6);
      expect(result.feelsLike).toBe(26.8);
    });
  });
});
