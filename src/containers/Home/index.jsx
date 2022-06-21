import { useSelector } from "react-redux"
import { Helmet } from "react-helmet"
// prettier-ignore
import { CurrentWeather, Footer, Forecast, Header, Search, Spinner, Favorites } from "../../components"
import { selectWeatherIcon } from "../../utils"
import styled from "styled-components"

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
      <Wrapper>
        <Search />
        <Favorites />
      </Wrapper>
      <CurrentWeather />
      <Forecast />
      <Footer />
    </>
  )
}

export default Home

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 0;
    align-items: stretch;
  }
`
