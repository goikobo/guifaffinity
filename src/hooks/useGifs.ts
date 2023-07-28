import { useEffect, useState } from "react";
import { Gif } from "../core/domain/Gif/Gif";
import { GifRepository } from "../core/domain/Gif/GifRepository";
import { gifService } from "../core/services/Gif/gifService";

const useGifs = (gifRepository: GifRepository) => {
  const [gifs, setGifs] = useState<Gif[] | undefined>(undefined);
  const [searchedText, setSearchedText] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const OnSearch = async () => {
      let data;
      const hasSearchedText = searchedText && searchedText.length > 0;
      if (hasSearchedText) {
        data = await gifService(gifRepository).search(searchedText);
      } else {
        data = await gifService(gifRepository).getTrending();
      }
      setGifs(data);
    };
    OnSearch();
  }, [gifRepository, searchedText]);

  function searchText(text: string) {
    if (searchedText !== text) {
      setGifs(undefined);
      setSearchedText(text);
    }
  }

  return { gifs, searchText };
};

export default useGifs;
