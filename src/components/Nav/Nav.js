import React from 'react';
import './Nav.css';

const Nav = ({viewFavorites, viewAllHotels}) => {

  return (
    <div className="nav">
      <button className="nav__button nav__all" onClick={viewAllHotels}>All Hotels</button>
      <button className="nav__button nav__fav" onClick={viewFavorites}>Favorites</button>
    </div>
  )
}

export default Nav;
