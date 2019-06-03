import axios from "axios";

import MoviesStore from "./MoviesStore";
import GenresStore from "./GenresStore";

axios.defaults.baseURL = 'https://arcane-plains-18081.herokuapp.com';

class RootStore {
  constructor() {
    this.movies = new MoviesStore();
    this.genres = new GenresStore();
  }
}

const store = new RootStore();
export default store;