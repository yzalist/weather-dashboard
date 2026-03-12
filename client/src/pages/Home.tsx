import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  feelsLike: number;
  icon: string;
}

interface ForecastData {
  date: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
}

const MOCK_WEATHER: WeatherData = {
  city: "San Francisco",
  country: "United States",
  temperature: 72,
  condition: "Partly Cloudy",
  humidity: 65,
  windSpeed: 12,
  visibility: 10,
  pressure: 1013,
  feelsLike: 70,
  icon: "partly-cloudy",
};

const MOCK_FORECAST: ForecastData[] = [
  { date: "Mon", high: 75, low: 62, condition: "Sunny", icon: "sunny" },
  { date: "Tue", high: 73, low: 61, condition: "Cloudy", icon: "cloudy" },
  { date: "Wed", high: 68, low: 58, condition: "Rainy", icon: "rainy" },
  { date: "Thu", high: 70, low: 59, condition: "Partly Cloudy", icon: "partly-cloudy" },
  { date: "Fri", high: 76, low: 63, condition: "Sunny", icon: "sunny" },
  { date: "Sat", high: 78, low: 65, condition: "Sunny", icon: "sunny" },
  { date: "Sun", high: 74, low: 62, condition: "Cloudy", icon: "cloudy" },
];

const TEMP_CHART_DATA = [
  { time: "12 AM", temp: 62 },
  { time: "3 AM", temp: 60 },
  { time: "6 AM", temp: 58 },
  { time: "9 AM", temp: 65 },
  { time: "12 PM", temp: 72 },
  { time: "3 PM", temp: 75 },
  { time: "6 PM", temp: 70 },
  { time: "9 PM", temp: 65 },
];

const CITIES = [
  "San Francisco",
  "New York",
  "London",
  "Tokyo",
  "Sydney",
  "Paris",
  "Dubai",
  "Singapore",
];

function WeatherIcon({ condition }: { condition: string }) {
  switch (condition) {
    case "sunny":
      return <Sun className="w-24 h-24 text-orange-400" />;
    case "cloudy":
      return <Cloud className="w-24 h-24 text-gray-400" />;
    case "rainy":
      return <CloudRain className="w-24 h-24 text-blue-400" />;
    case "partly-cloudy":
      return <Cloud className="w-24 h-24 text-gray-300" />;
    default:
      return <Sun className="w-24 h-24 text-orange-400" />;
  }
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData>(MOCK_WEATHER);
  const [forecast, setForecast] = useState<ForecastData[]>(MOCK_FORECAST);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("San Francisco");

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    // In a real app, fetch weather for this city
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSelectedCity(searchQuery);
      setSearchQuery("");
      // In a real app, fetch weather for searched city
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold text-foreground">Weather Dashboard</h1>
          <form onSubmit={handleSearch} className="flex gap-2 flex-1 max-w-md mx-4">
            <Input
              type="text"
              placeholder="Search city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-lg"
            />
            <Button type="submit" variant="default" className="rounded-lg">
              Search
            </Button>
          </form>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Main Weather Card */}
          <div className="lg:col-span-2">
            <Card className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white dark:from-slate-700 dark:to-slate-800">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-2">{weather.city}</h2>
                  <p className="text-muted-foreground">{weather.country}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Feels like</p>
                  <p className="text-2xl font-semibold text-foreground">{weather.feelsLike}°F</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6">
                  <WeatherIcon condition={weather.icon} />
                  <div>
                    <div className="text-7xl font-bold text-foreground">{weather.temperature}°</div>
                    <p className="text-xl text-muted-foreground mt-2">{weather.condition}</p>
                  </div>
                </div>
              </div>

              {/* Weather Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/50 dark:bg-slate-600/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Humidity</span>
                  </div>
                  <p className="text-2xl font-semibold text-foreground">{weather.humidity}%</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-600/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Wind Speed</span>
                  </div>
                  <p className="text-2xl font-semibold text-foreground">{weather.windSpeed} mph</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-600/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Visibility</span>
                  </div>
                  <p className="text-2xl font-semibold text-foreground">{weather.visibility} mi</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-600/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Pressure</span>
                  </div>
                  <p className="text-2xl font-semibold text-foreground">{weather.pressure} mb</p>
                </div>
              </div>
            </Card>

            {/* Temperature Chart */}
            <Card className="mt-8 p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">Temperature Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={TEMP_CHART_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="time" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="temp"
                    stroke="var(--chart-2)"
                    strokeWidth={3}
                    dot={{ fill: "var(--chart-2)", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Cities List */}
            <Card className="p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">Cities</h3>
              <div className="space-y-2">
                {CITIES.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCity === city
                        ? "bg-primary text-white"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </Card>

            {/* 7-Day Forecast */}
            <Card className="p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">7-Day Forecast</h3>
              <div className="space-y-3">
                {forecast.map((day, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{day.date}</p>
                      <p className="text-sm text-muted-foreground">{day.condition}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{day.high}°</p>
                        <p className="text-xs text-muted-foreground">{day.low}°</p>
                      </div>
                      <div className="w-8">
                        {day.icon === "sunny" && <Sun className="w-6 h-6 text-orange-400" />}
                        {day.icon === "cloudy" && <Cloud className="w-6 h-6 text-gray-400" />}
                        {day.icon === "rainy" && <CloudRain className="w-6 h-6 text-blue-400" />}
                        {day.icon === "partly-cloudy" && (
                          <Cloud className="w-6 h-6 text-gray-300" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
