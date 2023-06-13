import { FC } from "react";
import useTrending from "../../hooks/useTrending";
import "./styles.css";
import { GifGrid } from "../../components/GifGrid/GifGrid";
import searchIcon from "../../res/icons/search.svg";

export const Home: FC = () => {
  const { trendingGifs } = useTrending();

  const isLoading = trendingGifs === undefined;
  if (isLoading) return <div>Cargando...</div>;

  return (
    <>
      <header>Guifaffinity</header>
      <main>
        <section>
          <input placeholder="¿Que quieres buscar? ¡Encuentralo!" />
          <img src={searchIcon} alt="Search Icon" />
        </section>
        <GifGrid gifs={trendingGifs} />
      </main>
      <footer>Guifaffinity</footer>
    </>
  );
};
