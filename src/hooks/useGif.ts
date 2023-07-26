import { useEffect, useState } from "react";
import { Gif } from "../core/domain/Gif/Gif";
import { GifRepository } from "../core/domain/Gif/GifRepository";

const useGif = (_gifService: GifRepository, id: string | undefined) => {
  const [gif, setGif] = useState<Gif | undefined>(undefined);

  useEffect(() => {
    const OnSearch = async () => {
      if (id) {
        const data = await _gifService.getById(id);
        setGif(data);
      }
    };
    OnSearch();
  }, [_gifService, id]);

  return { gif };
};

export default useGif;
