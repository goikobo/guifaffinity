import { Gif } from "../../domain/Gif/Gif";
import { GifDTO } from "./GifDTO";

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
export const apiGuifRepositoryMapper = { mapGuif };
