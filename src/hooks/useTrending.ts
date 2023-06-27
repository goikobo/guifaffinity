import { useEffect, useState } from "react"
import { Gif } from "../interfaces/Gif"
import { getTrendingGifs } from "../services/getTrendingGifs"
import { searchGif } from "../services/searchGif"

const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[] | undefined>(undefined)
  const [searchedText, setSearchedText] = useState<string | undefined>(
    undefined
  )

  useEffect(() => {
    const OnSearch = async () => {
      let data
      const hasSearchedText = searchedText && searchedText.length > 0
      if (hasSearchedText) {
        data = await searchGif(searchedText)
      } else {
        data = await getTrendingGifs()
      }
      setGifs(data)
    }
    OnSearch()
  }, [searchedText])

  function searchText(text: string) {
    setGifs(undefined)
    setSearchedText(text)
  }

  return { gifs, searchText }
}

export default useGifs
