export function getWeatherBackground(weather: string): string {
  switch (weather.toLowerCase()) {
    case "clear":
      return "bg-gradient-to-r from-blue-400 to-blue-200 animate-sunny"
    case "cloudy":
      return "bg-gradient-to-r from-gray-400 to-gray-200 animate-cloudy"
    case "rainy":
      return "bg-gradient-to-r from-blue-600 to-blue-400 animate-rainy"
    case "snowy":
      return "bg-gradient-to-r from-blue-100 to-white animate-snowy"
    default:
      return "bg-gradient-to-r from-blue-400 to-blue-200"
  }
}

