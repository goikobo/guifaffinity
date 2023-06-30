import { FC } from "react"
import useTrending from "../../hooks/useTrending"
import "./styles.css"
import { GifGrid } from "../../components/GifGrid/GifGrid"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { Title } from "../../components/Title/Title"

export const Home: FC = () => {
  const { gifs, searchText } = useTrending()
  const isLoading = gifs === undefined

  return (
    <>
      <header>
        <Title />
      </header>
      <main>
        <SearchBar OnSearch={searchText} />
        {isLoading && <div>Cargando...</div>}
        {!isLoading && <GifGrid gifs={gifs} />}
      </main>
      <footer></footer>
    </>
  )
}
