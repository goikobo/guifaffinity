import { FC } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import useGif from "../../hooks/useGif";
import { GifRepository } from "../../core/domain/Gif/GifRepository";
import { GifCard } from "../../components/GifCard/GifCard";

export const GifDetail: FC<{ gifRepository: GifRepository }> = ({
  gifRepository,
}) => {
  const { id } = useParams();
  const { gif } = useGif(gifRepository, id);

  if (!gif) {
    return <div></div>;
  }
  return (
    <>
      <main>
        <div>
          <h2>
            {gif?.title.split(" by ")[0]}
            <span className="author"> by {gif.user.display_name}</span>
          </h2>
          <section className="gif-container">
            <GifCard trendingGif={gif}></GifCard>
          </section>
        </div>
      </main>
    </>
  );
};
