import React from 'react';

class ShowGrid extends React.Component {

  constructor() {
    super();

    this.goToDetail = this.goToDetail.bind(this);

  }

  goToDetail(event) {
    const { details, index } = this.props;

    localStorage.setItem(`detail-item`,JSON.stringify(details));

    this.context.router.transitionTo('/detail/' + details.show_title);
  };


  render() {

    const { details, index } = this.props;

    return (

      <div className="grid-item" onClick={(e) => this.goToDetail(e)}>
        <div className="grid-item__poster-wrapper">
          <img src={details.poster} alt="" className="grid-item__poster"/>
        </div>
        <div className="grid-item__main-info">
          <h3 className="grid-item__title">{details.title}</h3>
          <p className="grid-item__main-info-details">
            <span className="grid-item__category">{details.category}</span>
            <span className="grid-item__runtime">{details.runtime}</span>
          </p>
        </div>
        <div className="grid-item__secondary-info">
          <p className="grid-item__secondary-info-details">
            <span className="grid-item__type">Show / <span className="grid-item__release_year">{details.release_year}</span></span>
            <span className="grid-item__rating">{details.rating}</span>
          </p>
        </div>
      </div>)
  }
}


ShowGrid.contextTypes = {
  router: React.PropTypes.object
}

export default ShowGrid;
