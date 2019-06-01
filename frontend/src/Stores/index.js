import axios from "axios";

import MoviesStore from "./MoviesStore";
import GenresStore from "./GenresStore";

axios.defaults.baseURL = 'http://192.168.0.28/';

class RootStore {
  constructor() {
    this.movies = new MoviesStore();
    this.genres = new GenresStore();
  }
}

const store = new RootStore();
export default store;