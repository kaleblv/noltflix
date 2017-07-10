import React from 'react';
import iconSearch from '../images/icon-search.svg';
import Notification from './Notification';



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

    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        if (error.response.status === 404) {
          const notification = document.getElementsByClassName('notification');
          notification[0].classList.remove('hide');
          notification[0].classList.add('show');
          setTimeout(() => { notification[0].classList.remove('show'); notification[0].classList.add('hide'); }, 2500);
        }
        throw error
      }
    }

    fetch('https://netflixroulette.net/api/api.php?title=' + this.searchInput.value )
    .then(checkStatus)
    .then((response) => {
        return response.json()
    })
    .then((search) => {

        this.setState({ search });

        if (this.state.search.show_title) {
          localStorage.setItem(`detail-item`,JSON.stringify(this.state.search));
          this.context.router.transitionTo('/detail/' + this.state.search.show_title)
        }
    }).catch((error) => {
      console.log('request failed', error)
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
        <Notification/>
      </div>
    )
  }
}

SearchForm.contextTypes = {
  router: React.PropTypes.object
}

export default SearchForm;
