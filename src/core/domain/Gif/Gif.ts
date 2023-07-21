export interface Gif {
  id: string;
  title: string;
  src: {
    original: string;
    small: string;
  };
  votes: number;
  comments: string[];
  tags: string[];
  user: {
    username: string;
    display_name: string;
    is_verified: boolean;
  };
}
