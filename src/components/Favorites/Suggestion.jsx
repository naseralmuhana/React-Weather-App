import styled from "styled-components"
import { useDispatch } from "react-redux"
import { fetchWeather } from "../../store"

const Suggestion = ({ label, hideSuggestionFn }) => {
  const dispatch = useDispatch()
  const handleClickSuggestion = () => {
    dispatch(fetchWeather(label))
    setTimeout(() => {
      hideSuggestionFn()
    }, 400)
  }

  return (
    <SuggestionItem onClick={handleClickSuggestion}>{label}</SuggestionItem>
  )
}

export default Suggestion

const SuggestionItem = styled.a`
  color: #2079c9;
  text-decoration: none;
  padding: 0.6rem 1rem;
  display: block;
  text-align: left;
  border-bottom: 1px dotted
    ${({ theme }) => theme.searchSuggestion.separatorLineColor};
  font-size: 1rem;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme.searchSuggestion.hoverBackgroundColor};
  }
`
