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
`
export const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
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
