import catResp from "../data/cats.json";
import dogsResp from "../data/dogs.json";
import funnyResp from "../data/funny.json";

export const searchResolver = (request, response, context) => {
  if (request.query.searchedText === "cat") {
    return response(context.json(catResp));
  }
  if (request.query.searchedText === "dog") {
    return response(context.json(dogsResp));
  }
  if (request.query.searchedText === "#funny") {
    return response(context.json(funnyResp));
  }
};
