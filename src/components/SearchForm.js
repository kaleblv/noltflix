import React from 'react';
import iconSearch from '../images/icon-search.svg';



class SearchForm extends React.Component {

  constructor() {
    super();
    this.goToDetail = this.goToDetail.bind(this);

    this.state = {
      search: {}
    }
  }


  goToDetail(event) {

    event.preventDefault();

    fetch('https://netflixroulette.net/api/api.php?title=' + this.searchInput.value )
    .then((response) => {
        return response.json()
    })
    .then((search) => {

        this.setState({ search });

        if (this.state.search.show_title) {
          localStorage.setItem(`detail-item`,JSON.stringify(this.state.search));
          this.context.router.transitionTo('/detail/' + this.state.search.show_title)
        }
    })

  };

  render() {
    return (
      <div className="search">
        <form className="search__form" onSubmit={this.goToDetail}>
          <input className="search__input" type="text" name="" defaultValue="" ref={(input) => {
            this.searchInput = input
          }} placeholder="Search Media"/>
          <button type="submit" className="search__submit-btn">
            <img src={iconSearch} className="icon-search" alt=""/>
          </button>
        </form>
      </div>
    )
  }
}

SearchForm.contextTypes = {
  router: React.PropTypes.object
}

export default SearchForm;
