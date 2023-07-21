import { Gif } from "../../domain/Gif/Gif";
import { GifDTO } from "../../domain/Gif/GifDTO";
import { GifRepository } from "../../domain/Gif/GifRepository";

export class gifService implements GifRepository {
  constructor() {}
  getTrending = async (): Promise<Gif[]> => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}/gifs?limit=50&offset=0`;
    const res = await fetch(url);
    const data: GifDTO[] = await res.json();
    return data.map(mapGuif);
  };
  search = async (searchedText: string): Promise<Gif[]> => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}/gifs/search?searchedText=${encodeURIComponent(
      searchedText
    )}&limit=50&offset=0`;
    const res = await fetch(url);
    const data: GifDTO[] = await res.json();
    return data.map(mapGuif);
  };
}

const mapGuif = (gif: GifDTO): Gif => {
  return {
    id: gif.id,
    title: gif.title,
    src: {
      original: gif.images?.original?.url,
      small: gif.images?.small?.url,
    },
    votes: 0,
    comments: [],
    tags: gif.tags,
    user: {
      username: gif.username,
      display_name: gif.user?.display_name || "",
      is_verified: gif.user?.is_verified || false,
    },
  };
};
