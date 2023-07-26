import { Gif } from "../../domain/Gif/Gif";
import { GifRepository } from "../../domain/Gif/GifRepository";

export const gifService = (gifRepository: GifRepository) => {
  return {
    getTrending: async (): Promise<Gif[]> => {
      return gifRepository.getTrending();
    },
    search: async (searchedText: string): Promise<Gif[]> => {
      return gifRepository.search(searchedText);
    },
    getById: async (id: string): Promise<Gif | undefined> => {
      return gifRepository.getById(id);
    },
  };
};
