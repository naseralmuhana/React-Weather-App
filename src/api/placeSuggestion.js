const baseUrl = `https://places-dsn.algolia.net/1/places/query`

// fetching `city, country` from algolia
export const fetchCities = async (search) => {
  const res = await (
    await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify({
        query: search,
        type: "city",
        language: "en",
      }),
    })
  ).json()

  return res.hits
    .filter((item) => item.is_city)
    .map((i) => i.locale_names[0] + ", " + i.country)
}
