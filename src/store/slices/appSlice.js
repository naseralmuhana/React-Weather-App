import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tempUnit: "celcius",
  isLoading: false,
  isInitial: true,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  darkMode: JSON.parse(localStorage.getItem("darkMode")),
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      localStorage.setItem("darkMode", (!state.darkMode).toString())
      state.darkMode = !state.darkMode
    },
    changeTempUnit: (state) => {
      state.tempUnit = state.tempUnit === "celcius" ? "fahrenheit" : "celcius"
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setIsInitial: (state, action) => {
      state.isInitial = action.payload
    },
    addToFavorite: (state, action) => {
      const city = action.payload
      if (state.favorites?.includes(city)) {
        state.favorites = state.favorites.filter((c) => c !== city)
        localStorage.setItem("favorites", JSON.stringify(state.favorites))
      } else {
        state.favorites.push(city)
        localStorage.setItem("favorites", JSON.stringify(state.favorites))
      }
    },
  },
})

export const {
  changeTempUnit,
  toggleDarkMode,
  setIsLoading,
  setIsInitial,
  addToFavorite,
} = appSlice.actions
