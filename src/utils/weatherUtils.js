import { kelvinToCelcius } from "./unitConversion"
// prettier-ignore
import {
  CloudyIcon, HazeIcon, HeavyRainIcon, PartlyCloudyIcon, RainIcon, SleetIcon, SnowIcon, SunnyIcon, ThunderstormIcon, CloudyIconComponent,
  HazeIconComponent,
  HeavyRainIconComponent,
  PartlyCloudyIconComponent,
  RainIconComponent,
  SleetIconComponent,
  SnowIconComponent,
  SunnyIconComponent,
  ThunderstormIconComponent
} from "../assets"

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

  let updatedForecast = []
  const currentDay = new Date().toLocaleDateString(undefined, {
    weekday: "long",
  })

  for (let index = 0; index < forecast.length; index++) {
    const element = forecast[index]
    if (element.day === currentDay) {
      continue
    }

    if (updatedForecast.length === 0) {
      updatedForecast.push(element)
    } else if (
      updatedForecast[updatedForecast.length - 1].day !== element.day
    ) {
      updatedForecast.push(element)
    }
  }

  return updatedForecast
}

export const selectWeatherIcon = (code, favicon = false) => {
  let Icon = null
  switch (code) {
    // Clear
    case 800:
      Icon = favicon ? SunnyIcon : SunnyIconComponent
      break

    // Cloud
    case 801:
    case 802:
      Icon = favicon ? PartlyCloudyIcon : PartlyCloudyIconComponent
      break
    case 803:
    case 804:
      Icon = favicon ? CloudyIcon : CloudyIconComponent
      break

    // Rain
    case 500:
    case 501:
    case 520:
    case 521:
    case 511:
      Icon = favicon ? RainIcon : RainIconComponent
      break
    case 502:
    case 503:
    case 504:
    case 522:
    case 531:
      Icon = favicon ? HeavyRainIcon : HeavyRainIconComponent
      break

    // Drizzle
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      Icon = favicon ? RainIcon : RainIconComponent
      break

    // Thunderstorm
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      Icon = favicon ? ThunderstormIcon : ThunderstormIconComponent
      break

    // Snow
    case 600:
    case 601:
    case 602:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      Icon = favicon ? SnowIcon : SnowIconComponent
      break
    case 611:
      Icon = favicon ? SleetIcon : SleetIconComponent
      break

    // Atmosphere
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      Icon = favicon ? HazeIcon : HazeIconComponent
      break

    default:
      Icon = favicon ? SunnyIcon : SunnyIconComponent
  }
  return Icon
}
