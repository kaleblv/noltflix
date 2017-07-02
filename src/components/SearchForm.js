import React from 'react';


class SearchForm extends React.Component {

  constructor() {
    super();
    this.state = {
      search: {}
    }
  }

  showResults(event) {
    event.preventDefault();

    fetch('http://netflixroulette.net/api/api.php?title=' + this.searchInput.value )
    .then((response) => {
        return response.json()
    })
    .then((search) => {
        this.setState({ search });
    })
  };

  goToDetail(event) {
      if (this.state.search.show_title) {
        this.context.router.transitionTo('/detail/' + this.state.search.show_title)
    }
  };

  render() {
    return (
      <div className="search">
        <form className="search__form" onSubmit={(e) => this.showResults(e)}>
          <input className="search__input" type="text" name="" defaultValue="" ref={(input) => {
            this.searchInput = input
          }} placeholder="Search Media"/>
          <button type="submit">Search</button>
        </form>
        <h1 onClick={(e) => this.goToDetail(e)}>go to detail</h1>
      </div>
    )
  }
}

SearchForm.contextTypes = {
  router: React.PropTypes.object
}

export default SearchForm;
