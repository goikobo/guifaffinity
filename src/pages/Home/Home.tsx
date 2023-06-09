import { FC } from "react"
import useTrending from "../../hooks/useTrending"
import "./styles.css"
import { GifCard } from "../../components/GifCard/GifCard"

export const Home: FC = () => {
  const { trendingGifs } = useTrending()

  const isLoading = trendingGifs === undefined
  if (isLoading) return <div>Cargando...</div>

  return (
    <>
      <header>Guifaffinity</header>
      <main>
        {trendingGifs.map((trendingGif) => (
          <GifCard key={trendingGif.id} trendingGif={trendingGif} />
        ))}
      </main>
      <footer>Guifaffinity</footer>
    </>
  )
}
