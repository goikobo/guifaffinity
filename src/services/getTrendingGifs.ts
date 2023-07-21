import { GifDTO } from "../core/domain/Gif/GifDTO";
import { Gif } from "../core/domain/Gif/Gif";

export async function getTrendingGifs(): Promise<Gif[]> {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}/gifs?limit=50&offset=0`;
  const res = await fetch(url);
  const data: GifDTO[] = await res.json();
  return data.map(mapGuif);
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
