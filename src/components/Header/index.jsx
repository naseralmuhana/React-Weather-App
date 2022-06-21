import DarkModeToggle from "react-dark-mode-toggle"
import { useDispatch, useSelector } from "react-redux"
import { GithubIconSvg } from "../../assets"
import { toggleDarkMode } from "../../store"
// prettier-ignore
import { GithubLink, HeaderContainer, HeaderIconsContainer, Title } from "./styled"

const Header = () => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector((state) => state.app.darkMode)

  return (
    <HeaderContainer>
      <Title>React Weather</Title>
      <HeaderIconsContainer>
        <DarkModeToggle
          checked={isDarkMode}
          onChange={() => dispatch(toggleDarkMode())}
          size={60}
        />
        <GithubLink href="https://github.com/naseralmuhana/React-Weather-App">
          <GithubIconSvg />
        </GithubLink>
      </HeaderIconsContainer>
    </HeaderContainer>
  )
}

export default Header
