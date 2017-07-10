import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Rating from './Rating';
import iconFavoriteAdded from '../images/icon-favorite-added.svg';


class MovieGrid extends React.Component {

  constructor() {
    super();

    this.goToDetail = this.goToDetail.bind(this);

  }

  goToDetail(event) {

    const { details, index } = this.props;

    localStorage.setItem(`detail-item`,JSON.stringify(details));


    this.context.router.transitionTo('/detail/' + details.show_title);
  };


  componentDidMount() {
    const counter = document.getElementsByClassName("grid-item__movie");
    this.props.movieCounter(counter.length);
  }

  render() {

    const { details, index } = this.props;

    const detailRating = Math.floor(details.rating);

    let gridPoster;


    if (details.poster !== "") {
      console.log('have image');
      gridPoster = details.poster
    } else {
      console.log('dont have image');
      gridPoster = iconFavoriteAdded
    }

    return (

      <div className="grid-item grid-item__movie" ref="itemMovie" onClick={(e) => this.goToDetail(e)}>
        <div className="grid-item__poster-wrapper">
          <img src={gridPoster} alt="" className="grid-item__poster"/>
        </div>
        <div className="grid-item__main-info">
          <h3 className="grid-item__title">{details.show_title}</h3>
          <p className="grid-item__main-info-details">
            <span className="grid-item__category">{details.category}</span>
            <span className="grid-item__runtime">{details.runtime}</span>
          </p>
        </div>
        <div className="grid-item__secondary-info">
          <p className="grid-item__secondary-info-details">
            <span className="grid-item__type">Movie / <span className="grid-item__release_year">{details.release_year}</span></span>
            <span className="grid-item__rating">{details.rating}</span>
          </p>
        </div>
      </div>)
  }
}


MovieGrid.contextTypes = {
  router: React.PropTypes.object
}
export default MovieGrid;
