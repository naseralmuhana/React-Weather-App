import styled from "styled-components"
import { SearchIconSvg, LocationIconSvg } from "../../assets"

export const SearchElement = styled.div`
  @media (max-width: 768px) {
    flex: 2;
  }
  flex: 3;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
  background-color: ${({ theme }) => theme.panelBgColor};
  border-radius: 26px;
  height: 3.25rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`
export const SearchIcon = styled(SearchIconSvg)`
  margin-left: 1.2rem;
  fill: #4a6fa1;
`
export const SearchInput = styled.input`
  flex: 1;
  margin-left: 1rem;
  height: 3.25rem;
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.panelBgColor};
  color: ${({ theme }) => theme.searchInput.color};
  font-size: 1.125rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.searchInput.placeholderColor};
  }
`
export const LocationButton = styled.button`
  border: none;
  cursor: pointer;
  height: 100%;
  background-color: transparent;
  display: contents;
  &:hover svg {
  }
`
export const LocationIcon = styled(LocationIconSvg)`
  margin-right: 1.2rem;
  fill: #4a6fa1;
`

export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.forecastPanelBgColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  width: 98%;
  max-height: 264.6px;
  left: 1%;
  z-index: 3;
  top: 3.35rem;
  border-radius: 5px;
  overflow-x: hidden;
`
