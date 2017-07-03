import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';
import iconFavorite from '../images/icon-favorite.svg';
import iconBack from '../images/icon-back-arrow.svg';


class Detail extends React.Component {

  constructor() {
    super();
  }

  state = {
    details: {}
  }

  componentWillMount() {
    const localStorageRef = localStorage.getItem('detail-item');
    if(localStorageRef) {
      this.setState({
        details: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUpdate() {
    const localStorageRef = localStorage.getItem('detail-item');
    if(localStorageRef) {
      this.setState({
        details: JSON.parse(localStorageRef)
      });
    }
  }



  render() {

    const backgroundImage = this.state.details.poster;



    return (
      <div className="Detail">
        <Header/>
        <main className="detail-wrapper" style={{backgroundImage: `url(${backgroundImage})` }}>
          <div className="detail-controls-mb" style={{backgroundImage: `url(${backgroundImage})` }}>
            <div className="detail__back"><a href="/"><img src={iconBack} className="icon_back" alt=""/></a></div>
            <a href="" className="watch__btn">Watch now</a>
            <span className="detail__favorite"><img src={iconFavorite} className="icon_favorite" alt=""/></span>
          </div>
          <div className="detail">
            <div className="detail__back"><a href="/"><img src={iconBack} className="icon_back" alt=""/></a></div>
            <h1 className="detail__title">{this.state.details.show_title}
              <span className="detail__favorite"><img src={iconFavorite} className="icon_favorite" alt=""/></span>
            </h1>
            <p className="detail__release-year">Movie Release Year: {this.state.details.release_year}
              <span className="detail__runtime">Runtime: {this.state.details.runtime}</span>
            </p>
            <p className="detail__rating">4/5</p>
            <p className="detail__category-wrapper">
              <span className="detail__category">{this.state.details.category}</span>
            </p>
            <h3 className="detail__director-title">Director</h3>
            <p className="detail__director-copy">{this.state.details.director}</p>
            <h3 className="detail__cast-title">Cast</h3>
            <p className="detail__cast-copy">{this.state.details.show_cast}</p>
            <h3 className="detail__summary-title">Summary</h3>
            <p className="detail__summary-copy">{this.state.details.summary}</p>
          </div>
          <div className="watch watch-wrapper">
            <a href="" className="watch__btn">Watch now</a>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default Detail;
