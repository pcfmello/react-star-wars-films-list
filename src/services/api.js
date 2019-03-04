import axios from "axios";

const instance = axios.create();
instance.defaults.timeout = 30000;

export default instance;
