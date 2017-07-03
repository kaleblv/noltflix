import React from 'react';
import iconSearch from '../images/icon-search.svg';



class SearchFormMb extends React.Component {

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

  }



  showInput () {
    const searchBtn = document.getElementsByClassName('search__submit-btn-mb');
    const searchInput = document.getElementsByClassName('search-mb');
    const searchIcon = document.getElementsByClassName('search__icon');
    const logo = document.getElementsByClassName('noltflix_logo-mb');
    const user = document.getElementsByClassName('user__menu-toggle-mb');
    searchInput[0].classList.add('show');
    searchBtn[0].classList.add('show');
    logo[0].classList.add('hide');
    user[0].classList.add('hide');
    searchIcon[0].classList.add('hide')
  }

  render() {
    return (
      <div className="search search-mb">
        <form className="search__form" onSubmit={this.goToDetail}>
          <input className="search__input search__input-mb" type="text" name="" defaultValue="" ref={(input) => {
            this.searchInput = input
          }} placeholder="Search Media"/>
          <button type="submit" className="search__submit-btn search__submit-btn-mb">
            <img src={iconSearch} className="icon-search icon-search-mb" alt=""/>
          </button>
          <span className="search__icon" onClick={this.showInput}><img src={iconSearch} className="icon-search-mb" alt=""/></span>
        </form>
      </div>
    )
  }
}

SearchFormMb.contextTypes = {
  router: React.PropTypes.object
}

export default SearchFormMb;
