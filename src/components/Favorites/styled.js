import styled from "styled-components"
import { FavoriteIconSvg } from "../../assets"

export const FavoritesElement = styled.div`
  cursor: pointer;

  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FavoriteButton = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  flex: 1;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.4rem;
  background-color: ${({ theme }) => theme.panelBgColor};
  border-radius: 26px;
  height: 3.25rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  transition: background-color 0.25s;
  &:hover {
    background-color: ${({ theme }) => theme.panelBgColorHovered};
  }
  margin-bottom: 1.4rem;
`

export const FavoriteIcon = styled(FavoriteIconSvg)`
  overflow: visible;
  width: 45px;
  display: flex;
`
export const Label = styled.p`
  color: ${({ theme }) => theme.appTitleColor};
`

export const FavoritesResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${({ theme }) => theme.searchSuggestion.backgroundColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  width: 98%;
  max-height: 264.6px;
  left: 1%;
  top: 3.35rem;
  border-radius: 5px;
  overflow-x: hidden;
`

export const NoFavorites = styled.p`
  color: ${({ theme }) => theme.appTitleColor};
  padding: 0.6rem 1rem;
`
