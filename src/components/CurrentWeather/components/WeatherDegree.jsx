import React from "react"
import styled from "styled-components"
import Temperature from "./Temperature"

const WeatherDegree = ({ icon, value }) => {
  return (
    <Container>
      {icon}
      <Temperature value={value} />
      <sup>&deg;</sup>
    </Container>
  )
}

export default WeatherDegree

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  color: #3a86ca;
  margin-top: 0.8rem;
  margin-right: 2.5rem;
  svg {
    fill: ${({ theme }) => theme.smallIconColor};
    margin-right: 1rem;
  }
`
