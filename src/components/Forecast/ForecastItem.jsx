import styled from "styled-components"
import { Temperature, WeatherIcon } from "../CurrentWeather/components"

const ForecastItem = ({ item }) => {
  const { day, temp, weather } = item
  return (
    <ForecastItemContainer>
      <h6>{day}</h6>
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
    @media (max-width: 400px) {
      font-size: 1rem;
    }
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
