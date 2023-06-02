// src/mocks/handlers.js
import { rest } from "msw"
import { trendingResolver } from "./resolvers/trendingResolver"

export const handlers = [
  rest.get(
    "https://guifaffinity/api/trending?limit=20&offset=0",
    trendingResolver
  ),
]
