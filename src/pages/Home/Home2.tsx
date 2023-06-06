import { useEffect, useState, FC } from "react"
import "./styles.css"
import { getTrendingGifs } from "../../services/getTrendingGifs"
import { Gif } from "../../interfaces/Gif"

export const Home: FC = () => {
  const [trendingGifs, setTrendingGifs] = useState<Gif[] | undefined>(undefined)

  useEffect(() => {
    const onLoad = async () => {
      const data = await getTrendingGifs()
      setTrendingGifs(data.result)
    }
    onLoad()
  }, [])

  const isLoading = trendingGifs === undefined

  if (isLoading) return <div>Cargando...</div>

  return (
    <>
      <header>Guifaffinity</header>
      <main>
        {trendingGifs.map((trendingGif) => (
          <img src={trendingGif.src} alt={trendingGif.title} />
        ))}
      </main>
      <footer>Guifaffinity</footer>
    </>
  )
}
