import { observable, action, toJS } from "mobx"
import axios from "axios";

export default class GenresStore {
  @observable genres = {}

  constructor() {
    this.loadGenres();
  }

  getGenre = (id) => toJS(this.genres[String(id)])

  @action
  loadGenres = (page = 1) => {
    axios.get("/genres").then((response) => {
      response.data.genres.map((g) => this.genres[`${g.id}`] = g.name);
      console.log(toJS(this.genres))
    });
  }
}