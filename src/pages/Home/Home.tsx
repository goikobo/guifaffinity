import { FC } from "react"
import useTrending from "../../hooks/useTrending"
import "./styles.css"

export const Home: FC = () => {
  const { trendingGifs } = useTrending()

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
