import React, { Component } from 'react'
import { Link } from "react-router-dom";

import SearchInput from "./searchInput";

export default class index extends Component {
  refresh = () => this.props.refresh()

  render() {
    return (
      <div className="d-flex flex-fill justify-content-between align-items-center border px-5 py-3 bg-danger" >
        <Link onClick={this.refresh} className="text-white text-decoration-none" to="/">
          <h3>ArcMovies</h3>
        </Link>
        <SearchInput search={this.props.search} />
      </div>
    )
  }
}