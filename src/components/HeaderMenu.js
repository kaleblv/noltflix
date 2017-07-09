import React from 'react';


class HeaderMenu extends React.Component {
  render() {
    return(
      <ul className="header-menu hide">
        <li className="header-menu__item">Home</li>
        <li className="header-menu__item"><a href="/">My Favorites</a></li>
        <li className="header-menu__item sign-out">Sign Out</li>
      </ul>
    )
  }
}

export default HeaderMenu;
