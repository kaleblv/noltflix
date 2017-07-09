import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import MovieGrid from './MovieGrid';
import ShowGrid from './ShowGrid';
import '../App.css';
import base from '../base';

class App extends React.Component {

  constructor() {
    super();

  }

  state = {
    search: {},
    movies: {},
    shows: {},
    detail: {},
    movieCount: null,
    showCount: null,
  }




  componentWillMount() {
    this.ref = base.syncState('movies', {
      context: this,
      state: 'movies'
    });

    this.ref = base.syncState('shows', {
      context: this,
      state: 'shows'
    });

  }


  componentWillUnmount() {
    base.removeBinding(this.ref);
  }




  movieCounter = (dataFromChild) => {
    this.setState({ movieCount: dataFromChild });
  }

  showCounter = (dataFromChild) => {
    this.setState({ showCount: dataFromChild });
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <div className="content">
            <h1 className="main-title">Favorites</h1>
            <h2 className="grid-title">Movies (<span className="grid_quantity">{this.state.movieCount}</span>)</h2>
            <section className="grid movie-grid" ref="movieGrid">
              {
                Object
                  .keys(this.state.movies)
                  .map(key => <MovieGrid key={key} index={key} details={this.state.movies[key]} movieCounter={this.movieCounter}/> )
              }
            </section>
            <h2 className="grid-title">Tv Shows (<span className="grid_quantity">{this.state.showCount}</span>)</h2>
            <section className="grid show-grid">
              {
                Object
                  .keys(this.state.shows)
                  .map(key => <ShowGrid key={key} index={key} details={this.state.shows[key]} showCounter={this.showCounter} /> )
              }
            </section>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default App;
