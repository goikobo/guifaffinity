import { FC } from "react";
import useTrending from "../../hooks/useTrending";
import "./styles.css";
import { GifGrid } from "../../components/GifGrid/GifGrid";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Title } from "../../components/Title/Title";

export const Home: FC = () => {
  const { trendingGifs } = useTrending();

  const isLoading = trendingGifs === undefined;
  if (isLoading) return <div>Cargando...</div>;

  return (
    <>
      <header>
        <Title />
      </header>
      <main>
        <SearchBar />
        <GifGrid gifs={trendingGifs} />
      </main>
      <footer>Guifaffinity</footer>
    </>
  );
};
