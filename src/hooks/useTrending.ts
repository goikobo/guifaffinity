import { useEffect, useState } from "react"
import { Gif } from "../interfaces/Gif"
import { getTrendingGifs } from "../services/getTrendingGifs"

const useTrending = () => {
  const [trendingGifs, setTrendingGifs] = useState<Gif[] | undefined>(undefined)

  useEffect(() => {
    const OnLoad = async () => {
      const data = await getTrendingGifs()
      setTrendingGifs(data.result)
    }
    OnLoad()
  }, [])

  return { trendingGifs }
}
export default useTrending
