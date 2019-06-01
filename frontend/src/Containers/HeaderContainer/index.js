import { inject } from 'mobx-react'
import { Header } from "../../Components/Shared";

export default inject(({ store }) => ({
  search: store.movies.filteredMovies,
  refresh: store.movies.loadMovies,
}))(Header);