"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Cloud, Sun, CloudRain, Snowflake } from "lucide-react"

export default function WeatherBox() {
  const [weather, setWeather] = useState<any>(null)
  const [city, setCity] = useState<string>("")
  const [inputCity, setInputCity] = useState<string>("")

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords
        const weather = await fetchWeather(latitude, longitude)
        setWeather(weather)
        setCity(weather.name)
      })
    }
  }, [])

  const fetchWeather = async (cityName: string) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHERAPI_KEY;
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(cityName)}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("City not found. Please try again.");
      }
      const data = await response.json();
      setWeather(data);
      setCity(data.location.name);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("City not found. Please enter a valid city.");
      setWeather(null);
    }
  };
  

  const handleCitySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCity.trim()) return;
    await fetchWeather(inputCity);
    setInputCity("");
  };
   

  const getWeatherIcon = (condition: string) => {
    switch (condition?.toLowerCase()) {
      case "clear":
        return <Sun className="w-12 h-12 text-yellow-400 animate-pulse" />
      case "clouds":
        return <Cloud className="w-12 h-12 text-gray-400 animate-bounce" />
      case "rain":
        return <CloudRain className="w-12 h-12 text-blue-400 animate-bounce" />
      case "snow":
        return <Snowflake className="w-12 h-12 text-white animate-spin" />
      default:
        return <Sun className="w-12 h-12 text-yellow-400 animate-pulse" />
    }
  }

  return (
    <div className="pixel-border bg-[#1a1b3b] p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 pixel-font text-center">Weather Status</h2>
      {weather && (
  <div className="text-center space-y-4">
    <div className="flex justify-center">
      {getWeatherIcon(weather.current.condition.text)}
    </div>
    <p className="text-xl font-bold">{city}</p>
    <p className="text-3xl font-bold">{Math.round(weather.current.temp_c)}°C</p>
    <p className="text-blue-400">{weather.current.condition.text}</p>
  </div>
)}

      <form onSubmit={handleCitySubmit} className="mt-4 space-y-2">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name"
          className="w-full p-2 bg-[#0a0b1e] border-2 border-blue-500 text-white pixel-border focus:outline-none focus:border-green-500 transition-colors"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white pixel-border transition-colors pixel-font"
        >
          Search
        </button>
      </form>
    </div>
  )
}
