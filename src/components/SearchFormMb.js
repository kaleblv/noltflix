import React from 'react';
import iconSearch from '../images/icon-search.svg';
import iconBack from '../images/icon-back-arrow.svg';
import iconClose from '../images/icon-close.svg';



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



  mobileSearch () {
    const searchBtn = document.getElementsByClassName('search__submit-btn-mb');
    const search = document.getElementsByClassName('search-mb');
    const searchInput = document.getElementsByClassName('search__input-mb');
    const searchIcon = document.getElementsByClassName('search__icon');
    const logo = document.getElementsByClassName('noltflix_logo-mb');
    const user = document.getElementsByClassName('user__menu-toggle-mb');
    const headerContent = document.getElementsByClassName('header-content-mb');
    const mainHeader = document.getElementById('main-header');
    const searchClose = document.getElementsByClassName('search__close-mb');
    searchBtn[0].classList.add('show');
    search[0].classList.add('show');
    searchInput[0].classList.add('show');
    searchIcon[0].classList.add('hide');
    logo[0].classList.add('hide');
    user[0].classList.add('hide');
    headerContent[0].classList.add('searching');
    mainHeader.classList.add('searching');
    searchClose[0].classList.remove('hide');
    searchClose[0].classList.add('show');

    // add focus to search input
    const searchCool = document.getElementById('search__input-mb');
    searchCool.focus();


  }

  closeMobileSearch() {
    const searchBtn = document.getElementsByClassName('search__submit-btn-mb');
    const search = document.getElementsByClassName('search-mb');
    const searchInput = document.getElementsByClassName('search__input-mb');
    const searchIcon = document.getElementsByClassName('search__icon');
    const logo = document.getElementsByClassName('noltflix_logo-mb');
    const user = document.getElementsByClassName('user__menu-toggle-mb');
    const headerContent = document.getElementsByClassName('header-content-mb');
    const mainHeader = document.getElementById('main-header');
    const searchClose = document.getElementsByClassName('search__close-mb');
    searchBtn[0].classList.remove('show');
    search[0].classList.remove('show');
    searchInput[0].classList.remove('show');
    searchIcon[0].classList.remove('hide');
    logo[0].classList.remove('hide');
    user[0].classList.remove('hide');
    headerContent[0].classList.remove('searching');
    mainHeader.classList.remove('searching');
    searchClose[0].classList.remove('show');
    searchClose[0].classList.add('hide');

  }

  render() {
    return (
      <div className="search search-mb">
        <form className="search__form" onSubmit={this.goToDetail}>
          <div className="search__close search__close-mb hide" onClick={this.closeMobileSearch}><img src={iconClose} className="icon_back" alt=""/></div>
          <input id="search__input-mb" className="search__input search__input-mb" type="text" name="" defaultValue="" ref={(input) => {
            this.searchInput = input
          }} placeholder="Search Media"/>
          <button type="submit" className="search__submit-btn search__submit-btn-mb">
            <img src={iconSearch} className="icon-search icon-search-mb" alt=""/>
          </button>
          <span className="search__icon" onClick={this.mobileSearch}><img src={iconSearch} className="icon-search-mb" alt=""/></span>
        </form>
      </div>
    )
  }
}

SearchFormMb.contextTypes = {
  router: React.PropTypes.object
}

export default SearchFormMb;
