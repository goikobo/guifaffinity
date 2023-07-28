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
          <h3>ID: {gif?.id}</h3>
        </div>
      </main>
    </>
  );
};
