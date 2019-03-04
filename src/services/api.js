import axios from "axios";

const instance = axios.create();

// instance.defaults.baseURL = `https://swapi.co/api/`;
instance.defaults.timeout = 10000;

export default instance;
