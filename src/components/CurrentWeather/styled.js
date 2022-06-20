import styled from "styled-components"

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.panelBgColor};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: flex-start;
  }
`
export const CurrentWeatherStatus = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1.5rem;
  width: 25rem;
  @media (max-width: 800px) {
    margin: 2rem 0rem;
  }
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #396bae;
    margin-bottom: 2rem;
  }
  h6 {
    font-size: 1.375rem;
    text-align: left;
    color: #7b98b2;
  }
`
export const CurrentWeatherDetails = styled.div`
  display: flex;
  span {
    font-weight: 200;
    font-size: 7rem;
    color: #4a6fa1;
    margin-left: 1.5rem;
    line-height: 1;
    sup {
      line-height: 0;
    }
  }
`
export const CurrentWeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
  margin-left: 2rem;
`
export const FeelsLike = styled.p`
  font-size: 1.25rem;
  color: #4a6fa1;
`
export const HighLowContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 2rem;
`
