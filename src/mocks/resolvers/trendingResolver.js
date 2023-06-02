import trending20 from "../data/trending20.json"

export const trendingResolver = (req, res, ctx) => {
  return res(ctx.json(trending20))
}
