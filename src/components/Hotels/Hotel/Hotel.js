import React from 'react';
import './Hotel.css'
import Map from '../../Map';

const hotel = (props) => {

  const { hotel, style } = props;
  const imgAlt =`${hotel.name} at ${hotel.address.street}, ${hotel.address.city}`;

  const reviews = hotel.reviews.map(review => {
    return (
      <div>
        <div>{review.comment}</div>
        <div>- {review.name}</div>
      </div>
    )
  })

  const amenities = hotel.amenities.map(amenity => {
    return <li>{amenity}</li>
  })

  return (
    <div className="hotel" style={style}>
      <div className="hotel__img">
        <img src={hotel.images} alt={imgAlt} />
      </div>
      <div className="hotel__info__top">
        <div className="hotel__top__name">
          <div className="hotel__name">{hotel.name}</div>
          <div className="hotel__address">{hotel.address.street}, {hotel.address.city}</div>
        </div>
        <div className="hotel__price">${hotel.price} per night</div>
      </div>
      <div className="hotel__info">
        <div className="hotel__info__block">
          <div className="hotel__info__title">Amenities:</div>
          <ul className="hotel__amenities">{amenities}</ul>
        </div>
        <div className="hotel__info__block">
          <div className="hotel__info__title">Reviews:</div>
          {reviews}
        </div>
        <div className="hotel__map" id="map">
          <Map
            containerElement={<div style={{height:100+'%'}} />}
            mapElement={<div style={{height:100+'%'}} />}
          />
        </div>
      </div>
    </div>
  )
}


export default hotel;
