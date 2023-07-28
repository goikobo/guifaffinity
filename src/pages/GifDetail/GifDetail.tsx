import { FC } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import useGif from "../../hooks/useGif";
import { GifRepository } from "../../core/domain/Gif/GifRepository";

export const GifDetail: FC<{ gifRepository: GifRepository }> = ({
  gifRepository,
}) => {
  const { id } = useParams();
  const { gif } = useGif(gifRepository, id);

  return (
    <>
      <main>
        <div>
          <h2>
            {gif?.title.split(" by ")[0]}
            <span className="author"> by {gif?.user.display_name}</span>
          </h2>
        </div>
      </main>
    </>
  );
};
