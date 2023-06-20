import { FC } from "react";
import "./styles.css";
import searchIcon from "../../res/icons/search.svg";

export const SearchBar: FC<{}> = () => {
  return (
    <section className="search-container">
      <input
        id="search-text-input"
        placeholder="¿Que quieres buscar? ¡Encuentralo!"
      />
      <button id="search-btn">
        <img className="search-icon" src={searchIcon} alt="Search Icon" />
      </button>
    </section>
  );
};
