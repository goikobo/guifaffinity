import { Gif } from "../interfaces/Gif";

export async function getTrendingGifs(): Promise<Gif[]> {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}/memes?limit=50&offset=0`;
  const res = await fetch(url);
  const data = await res.json();
  return data.map(mapGuif);
}

const mapGuif = (gif: any): Gif => {
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
      display_name: gif.user?.display_name,
      is_verified: gif.user?.is_verified,
    },
  };
};
