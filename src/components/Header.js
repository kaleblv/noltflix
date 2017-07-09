import React from 'react';
import SearchForm from './SearchForm';
import SearchFormMb from './SearchFormMb';
import logo from '../images/noltflix-logo.svg';
import iconUser from '../images/icon-user.svg';
import iconDownArrow from '../images/icon-down-arrow.svg';




class Header extends React.Component {

  showResults(event) {
    event.preventDefault();
  };


  render() {
    return (
      <header id="main-header">
        <div className="content">
          <div className="header-content">
            <a href="/" className="header-logo"><img src={logo} className="noltflix_logo" alt=""/></a>
            <div className="header-controls">
              <div className="user">
                <p className="user__menu-wrapper">
                  <a href="" className="user__menu-toggle">
                    <img src={iconUser} className="user__icon" alt=""/>
                    <span className="user__name">John Smith</span>
                    <img src={iconDownArrow} className="user__down-arrow" alt=""/>
                  </a>
                </p>
              </div>
            <SearchForm/>
            </div>
          </div>
          <div className="header-content-mb">
            <div className="user">
              <p className="user__menu-wrapper">
                <a href="" className="user__menu-toggle user__menu-toggle-mb">
                  <img src={iconUser} className="user__icon" alt=""/>
                  <span className="user__name">John Smith</span>
                  <img src={iconDownArrow} className="user__down-arrow" alt=""/>
                </a>
              </p>
            </div>
            <a href="/" className="header-logo"><img src={logo} className="noltflix_logo noltflix_logo-mb" alt=""/></a>
            <SearchFormMb/>
          </div>
        </div>
      </header>)
  }
}

export default Header;
