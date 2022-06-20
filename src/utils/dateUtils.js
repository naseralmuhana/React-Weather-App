export const getNextSevenDays = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const next7Days = []
  for (let index = 0; index < 7; index++) {
    next7Days.push(
      days[new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000).getDay()]
    )
  }
  return next7Days
}
