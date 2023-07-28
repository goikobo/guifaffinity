import { FC, useRef } from "react";
import useGifs from "../../hooks/useGifs";
import "./styles.css";
import { GifGrid } from "../../components/GifGrid/GifGrid";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { GifRepository } from "../../core/domain/Gif/GifRepository";

export const Home: FC<{ gifRepository: GifRepository }> = ({
  gifRepository,
}) => {
  const { gifs, searchText } = useGifs(gifRepository);

  return (
    <>
      <main>
        <SearchBar OnSearch={searchText} />
        <GifGrid gifs={gifs} />
      </main>
    </>
  );
};
