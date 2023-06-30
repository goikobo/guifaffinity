import { FC } from "react"
import "./styles.css"
import { Gif } from "../../interfaces/Gif"
import { GifCard } from "../GifCard/GifCard"
import arrowIcon from "../../res/icons/arrow.svg"

export const GifGrid: FC<{ gifs: Gif[] | undefined }> = ({ gifs }) => {
  const isLoading = gifs === undefined
  if (isLoading) {
    return <div>Cargando...</div>
  }

  return (
    <section className="gif-container">
      <header className="title">
        <img src={arrowIcon} alt="Arrow Icon" />
        <h2>Los guif más trendings del momento</h2>
      </header>
      <main className="grid">
        {gifs.map((trendingGif) => (
          <GifCard key={trendingGif.id} trendingGif={trendingGif} />
        ))}
      </main>
    </section>
  )
}
