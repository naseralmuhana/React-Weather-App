import { configureStore } from "@reduxjs/toolkit"
import { appSlice } from "./slices/appSlice"
import { weatherSlice } from "./slices/weatherSlice"

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    weather: weatherSlice.reducer,
  },
})
