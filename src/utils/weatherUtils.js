import { kelvinToCelcius } from "./unitConversion"

export const weatherUtils = (res) => {
  const weather = res
  weather.weather = res.weather[0]
  weather.main = {
    ...weather.main,
    temp: kelvinToCelcius(weather.main.temp),
    feels_like: kelvinToCelcius(weather.main.feels_like),
    temp_max: kelvinToCelcius(weather.main.temp_max),
    temp_min: kelvinToCelcius(weather.main.temp_min),
  }
  weather.wind.speed = Math.round(weather.wind.speed * 3.6)

  return weather
}

export const forecastUtils = (res) => {
  const forecast = []

  res.list.forEach((weatherDay, index) => {
    const day = new Date(weatherDay.dt_txt).toLocaleDateString(undefined, {
      weekday: "long",
    })
    forecast.push({
      day: day,
      temp: {
        temp_max: kelvinToCelcius(weatherDay.main.temp_max),
        temp_min: kelvinToCelcius(weatherDay.main.temp_min),
      },
      weather: {
        id: weatherDay.weather[0].id,
        main: weatherDay.weather[0].main,
      },
    })
  })

  return forecast
}
