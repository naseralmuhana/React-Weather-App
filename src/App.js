import { ThemeProvider } from "styled-components"
import { Home } from "./containers"
import { useSelector } from "react-redux"
import { darkTheme, GlobalStyles, lightTheme } from "./styles"

const App = () => {
  const darkMode = useSelector((state) => state.app.darkMode)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
