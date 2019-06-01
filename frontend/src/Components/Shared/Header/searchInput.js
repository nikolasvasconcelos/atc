import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class index extends Component {
  state = {
    name: ""
  }

  setName = (e) => this.setState({ name: e.target.value })

  search = () => {
    this.props.search(1,this.state.name)
  }

  render() {
    const { name } = this.state
    return (
      <div className="d-flex mb-3 border-bottom border-white px-2 pt-2 align-items-center">
        <input onChange={this.setName} value={name} id="search-movie-input" type="text" className="border-0 bg-danger text-white" placeholder="Search" />
        <button onClick={this.search} className="bg-danger border-0">
          <FontAwesomeIcon className="text-white" icon={["fas","search"]} />
        </button>
      </div>
    )
  }
}
