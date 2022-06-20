export const kelvinToCelcius = (num) => {
  return Math.round(num - 273.15)
}

export const celciusToFahrenheit = (c) => {
  return Math.round(c * (9 / 5) + 32)
}

export const fahrenheitToCelcius = (f) => {
  return Math.round(((f - 32) * 5) / 9)
}

export const kmToMile = (n) => {
  return Math.round(n / 1.60934)
}

export const mileToKm = (n) => {
  return Math.round(n * 1.60934)
}
