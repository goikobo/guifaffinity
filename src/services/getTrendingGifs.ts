async function getTrendingGifs() {
  const url = `https://guifaffinity/api/trending?limit=20&offset=0`
  const res = await fetch(url)
  const data = await res.json()
  return data
}
