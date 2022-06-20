import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tempUnit: "celcius",
  isLoading: false,
  isInitial: true,
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
  },
})

export const { changeTempUnit, toggleDarkMode, setIsLoading, setIsInitial } =
  appSlice.actions
