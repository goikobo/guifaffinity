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
          <section className="single-gif-container">
            <GifCard trendingGif={gif}></GifCard>
          </section>
          <section className="user-and-tags">
            <h3>{gif.user.display_name}</h3>
            <section className="tags-list">
              {gif.tags.map((tag) => (
                <div className="tag">{tag}</div>
              ))}
            </section>
          </section>
        </div>
      </main>
    </>
  );
};
