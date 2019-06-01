import React from 'react';
import { Provider } from "mobx-react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history'

import Navigation from "./Navigation";
import Header from "../Containers/HeaderContainer";
import Store from "../Stores";

const browserHistory = createBrowserHistory()
const store = Store;


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <div className="d-flex flex-fill flex-column h-100 bg-light">
            <Header />
            <Navigation></Navigation>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;