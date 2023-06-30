import { FC, useState } from "react"
import "./styles.css"
import searchIcon from "../../res/icons/search.svg"

export const SearchBar: FC<{ OnSearch: (text: string) => void }> = ({
  OnSearch,
}) => {
  const [searchedText, setSearchedTest] = useState<string>("")
  return (
    <section className="search-container">
      <input
        id="search-text-input"
        placeholder="¿Que quieres buscar? ¡Encuentralo!"
        onChange={(args) => setSearchedTest(args.target.value)}
      />
      <button id="search-btn" onClick={() => OnSearch(searchedText)}>
        <img className="search-icon" src={searchIcon} alt="Search Icon" />
      </button>
    </section>
  )
}
