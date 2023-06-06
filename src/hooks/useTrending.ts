import { useEffect, useState } from "react"
import { Gif } from "../interfaces/Gif"
import { getTrendingGifs } from "../services/getTrendingGifs"

const useTrending = () => {
  const [trendingGifs, setTrendingGifs] = useState<Gif[]>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    console.log("Call")
    getTrendingGifs().then((data) => {
      console.log({ data, result: data.result })
      setTrendingGifs(data.result)
      setLoading(false)
    })
  }, [])

  return { trendingGifs, loading }
}
export default useTrending
