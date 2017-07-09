import React from 'react';


class HeaderMenuMb extends React.Component {
  render() {
    return(
      <ul className="header-menu header-menu-mb hide">
        <li className="header-menu__item">Home</li>
        <li className="header-menu__item"><a href="/">My Favorites</a></li>
        <li className="header-menu__item sign-out">Sign Out</li>
      </ul>
    )
  }
}

export default HeaderMenuMb;
