import { observable, action, toJS } from "mobx"
import axios from "axios";

export default class MoviesStore {
  @observable movies = []
  @observable images = {}
  @observable total_pages = 1
  @observable total_results = 0
  @observable action = "latest"
  name = ""

  constructor() {
    this.loadMovies();
  }

  getMovies = () => toJS(this.movies)

  getImages = () => toJS(this.images)

  @action
  loadMovies = (page = 1) => {
    axios.get("http://192.168.0.28/",{
      params: {
        page,
      }
    }).then((response) => {
      this.action == "filter" ? this.movies = response.data.results : this.movies = this.movies.concat(response.data.results)
      this.name = ""
      this.action = "latest"
      this.total_pages = response.data.total_pages;
      this.total_results = response.data.total_results;
      response.data.results.map((movie, i) => {
        this.getMovieImg(movie,i)
      })
    });
  }

  @action
  filteredMovies = ( page, name) => {
    if (this.action == "latest" && !name) return
    if (name) this.name = name
    axios.get("/search",{
      params: {
        name: name || this.name,
        page
      }
    }).then((response) => {
      this.action = "filter"
      page == 1 ? this.movies = response.data.results : this.movies = this.movies.concat(response.data.results)
      this.total_pages = response.data.total_pages;
      this.total_results = response.data.total_results;
      response.data.results.map((movie, i) => {
        this.getMovieImg(movie,i)
      })
    });
  }

  @action
  getMovieImg = (movie) => {
    if (!movie.poster_path) {
      this.images[`${movie.id}`] = undefined;
      return
    }
    axios.get("/movie", {
      params: { img: movie.poster_path  }
    }).then((response) => {
      this.images[`${movie.id}`] = response.request.responseURL;
    })
  }
}