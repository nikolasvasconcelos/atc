import React, { Component } from 'react'
import { observer } from 'mobx-react';
import InfiniteScroll from "react-infinite-scroller";

import Movie from "./Movie"

@observer
class MoviesScreen extends Component {
  state = {
    page: 1
  }

  _renderMovie = () => {
    const { movies } = this.props
    return (
      <div className="row">
        {
          movies.map((movie,i) => {
            return (
             <Movie key={i} movie={movie} image={this.props.moviesImages[String(movie.id)]} />
            )
          })
        }
      </div>
    )
  }

  _loadMore = (page) => {
    const { action, loadMovies, filtered } = this.props
    action == "latest" ? loadMovies(page) : filtered(page)
  }

  render() {
    const { movies, total_results } = this.props
    return (
      <div className="bg-light">
        <InfiniteScroll
          ref={this.scroll}
          pageStart={1}
          initialLoad={false}
          loadMore={this._loadMore}
          hasMore={movies.length < total_results}
          loader={<div className="flex-fill p-5 text-center" key={0}>Loading ...</div>}
          threshold={300}
        >
          {this._renderMovie()}
        </InfiniteScroll>
      </div>
    )
  }
}

export default MoviesScreen;