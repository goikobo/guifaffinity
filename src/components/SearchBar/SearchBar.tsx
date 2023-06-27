import { FC } from "react"
import "./styles.css"
import searchIcon from "../../res/icons/search.svg"

export const SearchBar: FC<{ OnSearch: (text: string) => void }> = ({
  OnSearch,
}) => {
  return (
    <section className="search-container">
      <input
        id="search-text-input"
        placeholder="¿Que quieres buscar? ¡Encuentralo!"
      />
      <button id="search-btn" onClick={() => OnSearch("cat")}>
        <img className="search-icon" src={searchIcon} alt="Search Icon" />
      </button>
    </section>
  )
}
