import { useEffect, useRef, useState } from "react"
import { DebounceInput } from "react-debounce-input"
import { useDispatch } from "react-redux"
import { fetchCities, fetchWeatherData } from "../../api"
import { useClickOutside } from "../../hooks"
import { fetchWeather } from "../../store"
// prettier-ignore
import { 
    LocationButton, LocationIcon, SearchElement, SearchIcon, SearchInput, SearchResult 
} from "./styled"
import Suggestion from "./Suggestion"

const Search = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState(null)
  const [suggestions, setSuggestions] = useState(null)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionRef = useRef(null)

  useClickOutside(suggestionRef, () => setShowSuggestions(false))

  const handleSearchInput = (e) => setSearchTerm(e.target.value)
  const handleHideSuggestions = (e) => setShowSuggestions(false)

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          fetchWeather({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        )
      })
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  }

  useEffect(() => {
    if (!searchTerm) return
    setShowSuggestions(true)
    fetchCities(searchTerm).then((data) => setSuggestions(data))
  }, [searchTerm])

  return (
    <SearchElement>
      <SearchIcon />
      <DebounceInput
        element={SearchInput}
        debounceTimeout={300}
        onChange={handleSearchInput}
        placeholder="Search for location"
      />
      <LocationButton onClick={handleLocation}>
        <LocationIcon />
      </LocationButton>
      {showSuggestions && (
        <SearchResult ref={suggestionRef}>
          {suggestions?.map((s, i) => (
            <Suggestion
              key={`${i}-${s}`}
              dispatch={dispatch}
              label={s}
              hideSuggestionFn={handleHideSuggestions}
            />
          ))}
        </SearchResult>
      )}
    </SearchElement>
  )
}

export default Search
