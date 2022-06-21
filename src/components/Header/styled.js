import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.appTitleColor};
  font-size: 2.2rem;
  @media (max-width: 600px) {
    font-size: 2.1rem;
  }
  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`
export const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
  button > div {
    margin-top: -35.7px !important;
    & > div {
      width: 100%;
      height: 100%;
      overflow: hidden;
      margin: 0px auto;
      outline: none;
    }
  }
`
export const GithubLink = styled.a`
  margin-left: 1rem;
  svg {
    fill: ${({ theme }) => theme.appTitleColor};
    transition: all 0.2s ease-in-out;
  }
  &:hover svg {
    fill: ${({ theme }) => theme.appTitleColorHovered};
  }
`
