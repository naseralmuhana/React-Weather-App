import { selectWeatherIcon } from "../../../utils"

const WeatherIcon = ({ code, big }) => {
  const Icon = selectWeatherIcon(code)
  return big ? <Icon style={{ width: "100px", height: "100px" }} /> : <Icon />
}

export default WeatherIcon
