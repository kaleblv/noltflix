import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';
import iconFavorite from '../images/icon-favorite.svg';
import iconFavoriteAdded from '../images/icon-favorite-added.svg';
import iconBack from '../images/icon-back-arrow.svg';
import base from '../base';


class Detail extends React.Component {

  constructor() {
    super();
    this.addFavorite = this.addFavorite.bind(this)
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

  componentDidMount() {
    let detail = JSON.parse(localStorage.getItem('detail-item'));
    let refMovie = base.database().ref('/movies');
    let refShow = base.database().ref('/shows');

    if (detail.mediatype === 0) {
      // Attach an asynchronous callback to read the data at our posts reference
      refMovie.on("value", function(snapshot) {

        let moviesObj = snapshot.val();
        const moviesArray = [];

        for (var key in moviesObj) {
          let showId = moviesObj[key].show_id;
          moviesArray.push(showId);
        }

        for (var i = 0; i < moviesArray.length ; i++) {
            if (moviesArray[i] === detail.show_id) {
              let detailIcon = Array.from(document.getElementsByClassName('icon_favorite'));
              detailIcon.forEach(function(el) {
                el.classList.add('added');
                el.setAttribute("src", iconFavoriteAdded);
              });
              break;
            }
        }

      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    } else {
      // Attach an asynchronous callback to read the data at our posts reference
      refShow.on("value", function(snapshot) {


        let showsObj = snapshot.val();
        const showsArray = [];

        for (var key in showsObj) {
          let showId = showsObj[key].show_id;
          showsArray.push(showId);
        }

        for (var i = 0; i < showsArray.length ; i++) {
            if (showsArray[i] === detail.show_id) {
              let detailIcon = Array.from(document.getElementsByClassName('icon_favorite'));
              detailIcon.forEach(function(el) {
                el.classList.add('added');
                el.setAttribute("src", iconFavoriteAdded);
              });
              break;
            }
        }

      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
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

  componentWillUnmount() {
    base.removeBinding(this.refMovie);
    base.removeBinding(this.refShow);
  }



  addFavorite() {
    let detail = JSON.parse(localStorage.getItem('detail-item'));
    let refMovie = base.database().ref('/movies');
    let refShow = base.database().ref('/shows');
    let detailIcon = Array.from(document.getElementsByClassName('icon_favorite'));
    detailIcon.forEach(function(el) {
      el.classList.add('added');
      el.setAttribute("src", iconFavoriteAdded);
    });
    detail.mediatype === 0 ? refMovie.push(detail) : refShow.push(detail);
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
            <span className="detail__favorite" onClick={this.addFavorite}><img src={iconFavorite} className="icon_favorite" alt=""/></span>
          </div>
          <div className="detail">
            <div className="detail__back"><a href="/"><img src={iconBack} className="icon_back" alt=""/></a></div>
            <h1 className="detail__title">{this.state.details.show_title}
              <span className="detail__favorite" onClick={this.addFavorite}><img src={iconFavorite} className="icon_favorite" alt=""/></span>
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
