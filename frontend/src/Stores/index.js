import MoviesStore from "./MoviesStore";

class RootStore {
  constructor() {
    this.movies = new MoviesStore();
  }
}

const store = new RootStore();
export default store;