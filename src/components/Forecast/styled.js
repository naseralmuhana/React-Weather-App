import styled from "styled-components"

export const ForecastContainer = styled.div`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.forecastPanelBgColor};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1.5rem 2rem;
  overflow: hidden;
`

export const ForecastItems = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;

  > :last-child {
    margin-right: 0;
  }
`
