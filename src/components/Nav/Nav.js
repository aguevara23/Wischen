import React from 'react';
import './Nav.css';

const Nav = ({viewFavorites, viewAllHotels}) => {

  return (
    <div className="nav">
      <button onClick={viewAllHotels}>View All Hotels</button>
      <button onClick={viewFavorites}>View Favorites</button>
    </div>
  )
}

export default Nav;
