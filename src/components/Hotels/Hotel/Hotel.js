import React from 'react';
// import classes from './Hotel.css';
import './Hotel.css'

const hotel = (props) => {

  const { hotel, z } = props;
  const imgAlt =`${hotel.name} at ${hotel.address.street}, ${hotel.address.city}`;

  const reviews = hotel.reviews.map(review => {
    return (
      <div>
        <div>{review.comment}</div>
        <div>- {review.name}</div>
      </div>
    )
  })
  // console.log(reviews)
  return (
    <div className="hotel" style={{zIndex: z}}>
      <img className="hotel__img" src={hotel.images} alt={imgAlt} />
      <div className="hotel__info">
        <div>{hotel.name}</div>
        <div>{hotel.address.street}, {hotel.address.city}</div>
        <div>${hotel.price} per night</div>
        <div>{hotel.name}</div>
        {reviews}
      </div>
    </div>
  )
}

export default hotel;
