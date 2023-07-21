import { FC } from "react";
import useGifs from "../../hooks/useGifs";
import "./styles.css";
import { GifGrid } from "../../components/GifGrid/GifGrid";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Title } from "../../components/Title/Title";
import { gifService } from "../../core/services/Gif/gifService";
import { apiGifRepository } from "../../core/infraestructure/Gif/apiGifRepository";

export const Home: FC = () => {
  const { gifs, searchText } = useGifs(gifService(apiGifRepository));

  return (
    <>
      <header>
        <Title />
      </header>
      <main>
        <SearchBar OnSearch={searchText} />
        <GifGrid gifs={gifs} />
      </main>
      <footer></footer>
    </>
  );
};
