
import React, { Component } from 'react';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Movie extends Component {
  state = {
    showInfo: false
  }

  toggleInfo = () => this.setState( prevState => ({showInfo: !prevState.showInfo}) )

  render() {
    const { movie, image, genre } = this.props
    const { showInfo } = this.state
    return (
      <div className="d-flex flex-fill col-4 flex-column align-items-center mb-2" >
        { 
          image 
          ? <img className="movie-poster" src={image} alt="" /> 
          : <div className="movie-poster d-flex justify-content-center align-items-center border">
              <FontAwesomeIcon icon={["fas", "film"]} />
            </div>
        }
        <p>{movie.title}</p>
        <p>{ movie.genre_ids.map((id,i) => <span key={i}>{i > 0 && " / "}{genre(id)}</span>) }</p>
        <p>{moment(movie.release_date).format("DD/MM/YYYY")}</p>
        <button onClick={this.toggleInfo} className="bg-light border-0">
          <FontAwesomeIcon icon={["fas", showInfo ? "chevron-up" : "chevron-down"]} />
        </button>
        {
          showInfo && <p className="text-justify p-4">
            { movie.overview }
          </p>
        }
      </div>
    )
  }
}
