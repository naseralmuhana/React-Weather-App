import { useSelector } from "react-redux"
import SectionTitle from "../UI/SectionTitle"
import ForecastItem from "./ForecastItem"
import { ForecastContainer, ForecastItems } from "./styled"

const Forecast = () => {
  const { forecast, isInitial } = useSelector((state) => ({
    isInitial: state.app.isInitial,
    forecast: state.weather.extendedWeatherData,
  }))

  if (isInitial) return <></>
  return (
    <ForecastContainer>
      <SectionTitle title="Extended Forecast" />
      <ForecastItems>
        {forecast.map((item, i) => (
          <ForecastItem key={i} item={item} />
        ))}
      </ForecastItems>
    </ForecastContainer>
  )
}

export default Forecast
