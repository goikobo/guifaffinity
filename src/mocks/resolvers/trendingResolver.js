import trending20 from "../data/trending20.json"

export const trendingResolver = (request, response, context) => {
  return response(context.json(trending20))
}
