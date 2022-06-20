import styled from "styled-components"

const WeatherInfoRow = ({ icon, label, children }) => {
  return (
    <Container>
      <div>
        {icon} {label}
      </div>
      <span>{children}</span>
    </Container>
  )
}

export default WeatherInfoRow

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  div {
    color: ${({ theme }) => theme.smallIconTextColor};
    display: flex;
    align-items: center;
    font-size: 1rem;
    width: 8rem;
    svg {
      fill: ${({ theme }) => theme.smallIconColor};
      margin-right: 1rem;
      width: 1.6rem;
      margin-left: -0.3rem;
    }
  }
  span {
    color: #3080c8;
    font-weight: 500;
    font-size: 1rem;
  }
`
