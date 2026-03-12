/**
 * Custom Hook for Weather Data Management
 */

import { useState, useEffect, useCallback } from 'react';
import type { WeatherData } from '../lib/weatherApi';

interface UseWeatherOptions {
  autoFetch?: boolean;
  cacheTime?: number;
}

export const useWeather = (city: string, options: UseWeatherOptions = {}) => {
  const { autoFetch = true, cacheTime = 5 * 60 * 1000 } = options;
  
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [lastFetch, setLastFetch] = useState<number>(0);

  const fetchData = useCallback(async () => {
    // Check cache
    const now = Date.now();
    if (data && now - lastFetch < cacheTime) {
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      const mockData: WeatherData = {
        temperature: 25,
        humidity: 60,
        windSpeed: 10,
        condition: 'Sunny',
        feelsLike: 26,
        visibility: 10,
        pressure: 1013,
      };
      setData(mockData);
      setError(null);
      setLastFetch(now);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  }, [city, data, lastFetch, cacheTime]);

  useEffect(() => {
    if (autoFetch && city) {
      fetchData();
    }
  }, [city, autoFetch, fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export const useCitySearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const search = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      // Mock city search results
      const mockCities = [
        'Beijing',
        'Shanghai',
        'Guangzhou',
        'Shenzhen',
        'Chengdu',
      ];
      const filtered = mockCities.filter((city) =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { query, setQuery, results, loading, search };
};
