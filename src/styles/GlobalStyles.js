import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

::-webkit-scrollbar {
  width: 10px;
  background-color: ${({ theme }) => theme.scrollBar.backgroundColor}

}
::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.scrollBar.thumbBackground};
  border-radius: 10px;
  transition: 0.3s;
}
::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.scrollBar.thumbBackgroundHover};
}
::-webkit-scrollbar-thumb:active {
  background-color: ${({ theme }) => theme.scrollBar.thumbBackgroundActive};
}
@media (max-width: 600px) {
  ::-webkit-scrollbar {
  width: 5px;
}

}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}
html {
  font-size: 16px;
}
body {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: url(${({ theme }) => theme.backgroundImage}) no-repeat center 120%
  , linear-gradient(${({ theme }) => theme.backgroundGradient.color1} 0%, 
  ${({ theme }) => theme.backgroundGradient.color2} 100%);
  background-size: auto;
}
#root {
  max-width: 960px;
  width: 100%;
  margin: auto 0;
  padding: 0 1rem;
}
`
