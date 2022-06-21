const baseUrl = "https://api.openweathermap.org/data/2.5"

// fetching weather data for a city at the moment
export const fetchWeatherData = async (city) => {
  let url = `${baseUrl}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  if (typeof city === "object") {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  }
  return await (await fetch(url)).json()
}

// fetching weather for the next 10 days
export const fetchExtendedForecastData = async (city) => {
  let url = `${baseUrl}/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

  if (typeof city === "object") {
    url = `${baseUrl}/forecast?lat=${city.lat}&lon=${city.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  }

  return await (await fetch(url)).json()
}
