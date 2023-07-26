import { Gif } from "./Gif";

export interface GifRepository {
  getTrending: () => Promise<Gif[]>;
  search: (searchedText: string) => Promise<Gif[]>;
  getById: (id: string) => Promise<Gif | undefined>;
}
