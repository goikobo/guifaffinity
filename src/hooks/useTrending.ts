import { useEffect, useState } from "react"

const useTrending = () => {
  const [trendingGifs, setTrendingGifs] = useState(undefined)
  const [loading, setLoading] = useState(false)
  //const [error, setError] = useState(undefined)
  //
  //useEffect(() => {
  //  getPokemons(1400).then((data) => {
  //    setPokemons(data)
  //    setLoading(false)
  //    setError("")
  //  })
  //}, [])

  return { trendingGifs, loading }
}
export default useTrending
