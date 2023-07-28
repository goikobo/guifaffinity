import { FC } from "react";
import "./styles.css";
import { Gif } from "../../core/domain/Gif/Gif";
import { GifCard } from "../GifCard/GifCard";
import arrowIcon from "../../res/icons/arrow.svg";
import { Link } from "react-router-dom";

export const GifGrid: FC<{ gifs: Gif[] | undefined }> = ({ gifs }) => {
  const isLoading = gifs === undefined;
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const hasAnyGifs = gifs.length > 0;
  if (!hasAnyGifs) {
    return <div>No se han encontrado guifs</div>;
  }

  return (
    <section className="gif-container">
      <header className="title">
        <img src={arrowIcon} alt="Arrow Icon" />
        <h2>Los guif más trendings del momento</h2>
      </header>
      <main className="grid">
        {gifs.map((trendingGif) => (
          <Link to={"/detail/" + trendingGif.id}>
            <GifCard key={trendingGif.id} trendingGif={trendingGif} />
          </Link>
        ))}
      </main>
    </section>
  );
};
