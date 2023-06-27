import catResp from "../data/cats.json"
import dogsResp from "../data/dogs.json"
import funnyResp from "../data/funny.json"

export const searchResolver = (request, response, context) => {
  const searchedText = request.url.searchParams.get("searchedText")
  if (searchedText === "cat") {
    return response(context.json(catResp))
  }
  if (searchedText === "dog") {
    return response(context.json(dogsResp))
  }
  if (searchedText === "#funny") {
    return response(context.json(funnyResp))
  }
}
