import { Gif } from "../../domain/Gif/Gif";
import { GifDTO } from "./GifDTO";
import { GifRepository } from "../../domain/Gif/GifRepository";
import { apiGuifRepositoryMapper } from "./apiGuifRepositoryMapper";

export const apiGifRepository: GifRepository = {
  getTrending: async (): Promise<Gif[]> => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}/gifs?limit=50&offset=0`;
    const res = await fetch(url);
    const data: GifDTO[] = await res.json();
    return data.map(apiGuifRepositoryMapper.mapGuif);
  },
  search: async (searchedText: string): Promise<Gif[]> => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}/gifs/search?searchedText=${encodeURIComponent(
      searchedText
    )}&limit=50&offset=0`;
    const res = await fetch(url);
    const data: GifDTO[] = await res.json();
    return data.map(apiGuifRepositoryMapper.mapGuif);
  },
  getById: async (id: string): Promise<Gif | undefined> => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}/gifs/getById?id=${encodeURIComponent(id)}`;
    const res = await fetch(url);
    if (res.status === 404) return undefined;

    const data: GifDTO = await res.json();
    if (!data) return undefined;

    return apiGuifRepositoryMapper.mapGuif(data);
  },
};
