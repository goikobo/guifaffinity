import { FC } from "react";
import useTrending from "../../hooks/useTrending";
import "./styles.css";
import { GifGrid } from "../../components/GifGrid/GifGrid";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const Home: FC = () => {
  const { trendingGifs } = useTrending();

  const isLoading = trendingGifs === undefined;
  if (isLoading) return <div>Cargando...</div>;

  return (
    <>
      <header>Guifaffinity</header>
      <main>
        <SearchBar />
        <GifGrid gifs={trendingGifs} />
      </main>
      <footer>Guifaffinity</footer>
    </>
  );
};
