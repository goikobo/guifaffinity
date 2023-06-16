import { Gif } from "../interfaces/Gif";

export async function getTrendingGifs(): Promise<Gif[]> {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}/memes?limit=50&offset=0`;
  const res = await fetch(url);
  const data = await res.json();
  return data.result;
}
