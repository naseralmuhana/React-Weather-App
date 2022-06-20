import { useSelector } from "react-redux"
import { celciusToFahrenheit } from "../../../utils"

const Temperature = ({ value }) => {
  const degreeType = useSelector((store) => store.app.tempUnit)

  if (degreeType === "fahrenheit") {
    return <>{celciusToFahrenheit(value)}</>
  }
  return <>{value}</>
}

export default Temperature
