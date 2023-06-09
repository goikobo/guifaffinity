import { FC } from "react"
import "./styles.css"
import { Gif } from "../../interfaces/Gif"
import { GifCard } from "../GifCard/GifCard"

export const GifGrid: FC<{ gifs: Gif[] }> = ({ gifs }) => {
  return (
    <section className="gif-grid">
      {gifs.map((trendingGif) => (
        <GifCard key={trendingGif.id} trendingGif={trendingGif} />
      ))}
    </section>
  )
}
