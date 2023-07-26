import { FC } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";

export const GifDetail: FC = () => {
  const { id } = useParams();

  return (
    <>
      <header>
        <h1>Detalle</h1>
      </header>
      <main>
        <div>
          <h3>ID: {id}</h3>
        </div>
      </main>
      <footer></footer>
    </>
  );
};
