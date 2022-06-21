import styled from "styled-components"
import { Temperature, WeatherIcon } from "../CurrentWeather/components"
import { useMediaQuery } from "react-responsive"

const ForecastItem = ({ item }) => {
  const { day, temp, weather } = item
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" })
  return (
    <ForecastItemContainer>
      <h6>{isSmallScreen ? day.substring(0, 3) : day}</h6>
      <WeatherIcon code={weather.id} />
      <p>{weather.main}</p>
      <span>
        <Temperature value={temp.temp_max} />
        <sup>&deg;</sup>
        <small>/</small>
        <Temperature value={temp.temp_min} />
        <sup>&deg;</sup>
      </span>
    </ForecastItemContainer>
  )
}

export default ForecastItem

const ForecastItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  h6 {
    font-weight: 600;
    font-size: 1.125rem;
    color: #4581c5;
  }
  svg {
    width: 4rem;
    height: 4rem;
    margin: 0.7rem 0;
  }
  p {
    font-weight: 600;
    font-size: 1.125rem;
    color: #4a6fa1;
  }
  span {
    font-size: 1.125rem;
    color: #4a6fa1;
    width: 5rem;
    text-align: center;
  }
`
