import { FC } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { gifService } from "../../core/services/Gif/gifService";
import useGif from "../../hooks/useGif";
import { apiGifRepository } from "../../core/infraestructure/Gif/apiGifRepository";

export const GifDetail: FC = () => {
  const { id } = useParams();
  const { gif } = useGif(gifService(apiGifRepository), id);

  return (
    <>
      <header>
        <h1>Detalle</h1>
      </header>
      <main>
        <div>
          <h3>ID: {gif?.id}</h3>
        </div>
      </main>
      <footer></footer>
    </>
  );
};
