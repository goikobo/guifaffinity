// src/mocks/handlers.js
import { rest } from "msw"
import { trendingResolver } from "./resolvers/trendingResolver"
import { searchResolver } from "./resolvers/searchResolver"
const apiUrl = process.env.REACT_APP_API_URL

export const handlers = [
  rest.get(`${apiUrl}/gifs`, trendingResolver),
  rest.get(`${apiUrl}/gifs/search`, searchResolver),
]
