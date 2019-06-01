import React from 'react';
import { Provider } from "mobx-react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
import axios from "axios";

import Navigation from "./Navigation";
import Header from "../Containers/HeaderContainer";
import Store from "../Stores";

const browserHistory = createBrowserHistory()
const store = Store;

axios.defaults.baseURL = 'http://192.168.0.28';

class App extends React.Component {
  constructor() {
    super()
  }
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