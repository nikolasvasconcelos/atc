import { inject } from 'mobx-react'
import MoviesScreen from "../../Components/MoviesScreen";

export default inject(({ store }) => ({
  movies: store.movies.getMovies(),
  loadMovies: store.movies.loadMovies,
  filtered: store.movies.filteredMovies,
  action: store.movies.action,
  total_results: store.movies.total_results,
  moviesImages: store.movies.getImages()
}))(MoviesScreen);