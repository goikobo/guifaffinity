import jsonResp from "../data/VDSIi6IB4727grnoIH.json";

export const getByIdResolver = (request, response, context) => {
  return response(context.json(jsonResp));
};
