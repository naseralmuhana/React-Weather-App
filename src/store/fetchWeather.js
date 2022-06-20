import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchExtendedForecastData, fetchWeatherData } from "../api"
import { forecastUtils, weatherUtils } from "../utils"

import { setIsInitial, setIsLoading } from "./slices/appSlice"

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, { dispatch, rejectWithValue, fulfillWithValue }) => {
    dispatch(setIsLoading(true))
    try {
      const res = await Promise.all([
        fetchWeatherData(city),
        fetchExtendedForecastData(city),
      ])
      dispatch(setIsLoading(false))
      if (res[0].cod === 200) {
        dispatch(setIsInitial(false))
        return res
      }
      return rejectWithValue(res[0].message)
    } catch (error) {
      dispatch(setIsLoading(false))
      return rejectWithValue(error)
    }
  }
)

export const transformWeatherData = (res) => {
  const weather = weatherUtils(res[0])
  const forecast = forecastUtils(res[1])

  return { weather, forecast }
}
