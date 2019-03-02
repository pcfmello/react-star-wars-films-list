import API from "./api";

export default {
  getAllFilms: () => API.get("films")
};
