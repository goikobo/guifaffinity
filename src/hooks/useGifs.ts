import { useEffect, useState } from "react";
import { Gif } from "../core/domain/Gif/Gif";
import { GifRepository } from "../core/domain/Gif/GifRepository";

const useGifs = (_gifRepository: GifRepository) => {
  const [gifs, setGifs] = useState<Gif[] | undefined>(undefined);
  const [searchedText, setSearchedText] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const OnSearch = async () => {
      let data;
      const hasSearchedText = searchedText && searchedText.length > 0;
      if (hasSearchedText) {
        data = await _gifRepository.search(searchedText);
      } else {
        data = await _gifRepository.getTrending();
      }
      setGifs(data);
    };
    OnSearch();
  }, [_gifRepository, searchedText]);

  function searchText(text: string) {
    if (searchedText !== text) {
      setGifs(undefined);
      setSearchedText(text);
    }
  }

  return { gifs, searchText };
};

export default useGifs;
