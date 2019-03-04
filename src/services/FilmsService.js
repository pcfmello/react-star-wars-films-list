import API from "./api";
import { Promise } from "es6-promise";

export default {
  getAllFilms: () => API.get("https://swapi.co/api/films/"),
  getListOf: urlList =>
    Promise.all(urlList.map(url => API.get(url))).then(
      urlList.map((url, index) => `response${index}`)
    )
};
