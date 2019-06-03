import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Movies from "../Containers/MoviesContainer"

export default class Navigation extends Component {
  render() {
    return (
      <main className="d-flex flex-fill">
        <Switch>
          <Route exact component={Movies} path="/" ></Route>
        </Switch>
      </main>
    )
  }
}