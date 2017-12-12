import React from 'react';
import Hotel from '../Hotels/Hotel/Hotel';

const favorites = (props) => {
  const style={
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '15px',
    gridRowGap: '20px',
    margin: '50px 30px'
  }

  const favStyling={
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  }

  const favoriteHotels = Object.keys(props.favorites)
    .map((favId) => {
      return <Hotel favorite={true} hotel={props.favorites[favId]} style={favStyling}/>
    });

  return (
    <div style={style}>{favoriteHotels}</div>
  )
}

export default favorites;
