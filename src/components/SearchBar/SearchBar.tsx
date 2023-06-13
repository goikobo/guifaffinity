import { FC } from "react";
import "./styles.css";
import searchIcon from "../../res/icons/search.svg";

export const SearchBar: FC<{}> = () => {
  return (
    <section className="search-container">
      <input placeholder="¿Que quieres buscar? ¡Encuentralo!" />
      <button>
        <img className="search-icon" src={searchIcon} alt="Search Icon" />
      </button>
    </section>
  );
};
