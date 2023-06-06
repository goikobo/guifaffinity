import useTrending from "../../hooks/useTrending"
import "./styles.css"

export const Home = () => {
  const { trendingGifs, loading } = useTrending()

  if (loading || !trendingGifs) return <div>Cargando...</div>

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
