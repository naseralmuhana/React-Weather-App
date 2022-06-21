import { useSelector } from "react-redux"
import { Helmet } from "react-helmet"
// prettier-ignore
import { CurrentWeather, Footer, Forecast, Header, Search, Spinner } from "../../components"
import { selectWeatherIcon } from "../../utils"

const Home = () => {
  const { weather, isLoading } = useSelector((store) => ({
    weather: store.weather.weatherData,
    isLoading: store.app.isLoading,
  }))

  const title = weather.name === "" ? "Weather" : `Weather | ${weather?.name}`
  const icon = selectWeatherIcon(weather?.weather.id, true)
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" type="image/svg" href={icon} />
      </Helmet>
      {isLoading && <Spinner />}
      <Header />
      <Search />
      <CurrentWeather />
      <Forecast />
      <Footer />
    </>
  )
}

export default Home
