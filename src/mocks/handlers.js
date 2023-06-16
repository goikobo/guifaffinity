// src/mocks/handlers.js
import { rest } from "msw";
import { trendingResolver } from "./resolvers/trendingResolver";
const apiUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.get(`${apiUrl}/memes?limit=50&offset=0`, trendingResolver),
];
