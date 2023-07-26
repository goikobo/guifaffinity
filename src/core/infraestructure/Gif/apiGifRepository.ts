import { Gif } from "../../domain/Gif/Gif";
import { GifDTO } from "../../domain/Gif/GifDTO";
import { GifRepository } from "../../domain/Gif/GifRepository";
import { mapGuif } from "../../services/Gif/Serializers/mapGuif";

export const apiGifRepository: GifRepository = {
  getTrending: async (): Promise<Gif[]> => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}/gifs?limit=50&offset=0`;
    const res = await fetch(url);
    const data: GifDTO[] = await res.json();
    return data.map(mapGuif);
  },
  search: async (searchedText: string): Promise<Gif[]> => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}/gifs/search?searchedText=${encodeURIComponent(
      searchedText
    )}&limit=50&offset=0`;
    const res = await fetch(url);
    const data: GifDTO[] = await res.json();
    return data.map(mapGuif);
  },
  getById: async (id: string): Promise<Gif | undefined> => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}/gifs/getById?id=${encodeURIComponent(id)}`;
    const res = await fetch(url);
    if (res.status === 404) return undefined;

    const data: GifDTO = await res.json();
    if (!data) return undefined;

    return mapGuif(data);
  },
};
