import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// prettier-ignore
import { HighIcon, HumidityIcon, LowIcon, PressureIcon, WindIcon } from "../../assets"
import { changeTempUnit } from "../../store"
import { kmToMile } from "../../utils"
import { FavoriteBtn, SectionTitle, ToggleSwitch } from ".."
// prettier-ignore
import { Temperature, WeatherDegree, WeatherIcon, WeatherInfoRow } from "./components"
// prettier-ignore
import { CurrentWeatherContainer, CurrentWeatherDetails, CurrentWeatherInfo, CurrentWeatherStatus, FeelsLike, HeaderContainer, HighLowContainer, WeatherContainer } from "./styled"

const CurrentWeather = () => {
  const dispatch = useDispatch()
  const { weather, degreeType, isInitial, isError } = useSelector((store) => ({
    weather: store.weather.weatherData,
    degreeType: store.app.tempUnit,
    isInitial: store.app.isInitial,
    isError: store.weather.isError,
  }))

  const handleTempUnit = () => dispatch(changeTempUnit())
  useEffect(() => {
    if (isError) {
      console.log("Cannot load weather for this place")
    }
  }, [isError])

  if (isInitial) return <></>

  return (
    <WeatherContainer>
      <HeaderContainer>
        <SectionTitle title="Current Weather" />
        <ToggleSwitch onClick={handleTempUnit} />
        <FavoriteBtn cityName={weather.name} />
      </HeaderContainer>
      <CurrentWeatherContainer>
        <CurrentWeatherStatus>
          <h4>{weather.name}</h4>
          <CurrentWeatherDetails>
            <WeatherIcon code={weather.weather.id} big />
            <span>
              <Temperature value={weather.main.temp} />
              <sup>&deg;</sup>
            </span>
          </CurrentWeatherDetails>
          <h6>{weather.weather.description}</h6>
        </CurrentWeatherStatus>
        <CurrentWeatherInfo>
          <FeelsLike>
            Feels like <Temperature value={weather.main.feels_like} />
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree icon={<HighIcon />} value={weather.main.temp_max} />
            <WeatherDegree icon={<LowIcon />} value={weather.main.temp_min} />
          </HighLowContainer>
          <WeatherInfoRow icon={<HumidityIcon />} label="Humidity">
            {weather.main.humidity}%
          </WeatherInfoRow>
          <WeatherInfoRow icon={<WindIcon />} label="Wind">
            {degreeType === "celcius"
              ? weather.wind.speed
              : kmToMile(weather.wind.speed)}
            {degreeType === "celcius" ? "kph" : "mph"}
          </WeatherInfoRow>
          <WeatherInfoRow icon={<PressureIcon />} label="Pressure">
            {weather.main.pressure}hPa
          </WeatherInfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
    </WeatherContainer>
  )
}

export default CurrentWeather
