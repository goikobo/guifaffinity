import { FC } from "react"
import "./styles.css"
import { Gif } from "../../interfaces/Gif"

export const GifCard: FC<{ trendingGif: Gif }> = ({ trendingGif }) => {
  return (
    <article className="gif-card">
      <img className="image" src={trendingGif.src} alt={trendingGif.title} />
    </article>
  )
}
