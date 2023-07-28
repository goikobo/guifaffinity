import { useEffect, useState } from "react";
import { Gif } from "../core/domain/Gif/Gif";
import { GifRepository } from "../core/domain/Gif/GifRepository";
import { gifService } from "../core/services/Gif/gifService";

const useGif = (gifRepository: GifRepository, id: string | undefined) => {
  const [gif, setGif] = useState<Gif | undefined>(undefined);

  useEffect(() => {
    const OnSearch = async () => {
      if (id) {
        const data = await gifService(gifRepository).getById(id);
        setGif(data);
      }
    };
    OnSearch();
  }, [gifRepository, id]);

  return { gif };
};

export default useGif;
