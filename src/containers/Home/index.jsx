import { useSelector } from "react-redux"
// prettier-ignore
import { CurrentWeather, Footer, Forecast, Header, Search, Spinner } from "../../components"

const Home = () => {
  const isLoading = useSelector((state) => state.app.isLoading)

  return (
    <>
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
