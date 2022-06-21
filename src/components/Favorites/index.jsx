import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useClickOutside } from "../../hooks"
// prettier-ignore
import { FavoriteButton, FavoriteIcon, FavoritesElement, FavoritesResult, Label, NoFavorites } from "./styled"
import Suggestion from "./Suggestion"

const Favorites = () => {
  const favoritesRef = useRef(null)

  const favorites = useSelector((store) => store.app.favorites)
  const [showFavorites, setShowFavorites] = useState(false)

  const handleHideSuggestions = (e) => setShowFavorites(false)
  useClickOutside(favoritesRef, handleHideSuggestions)

  return (
    <FavoritesElement ref={favoritesRef}>
      <FavoriteButton onClick={() => setShowFavorites((state) => !state)}>
        <FavoriteIcon />
        <Label>Favorites</Label>
      </FavoriteButton>
      {showFavorites && (
        <FavoritesResult>
          {favorites.length > 0 ? (
            favorites?.map((f, i) => (
              <Suggestion
                key={`${i}-${f}`}
                label={f}
                hideSuggestionFn={handleHideSuggestions}
              />
            ))
          ) : (
            <NoFavorites>No favorites yet</NoFavorites>
          )}
        </FavoritesResult>
      )}
    </FavoritesElement>
  )
}

export default Favorites
