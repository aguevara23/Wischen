import React from 'react';
import Hotel from './Hotel/Hotel';
import './Hotels.css';

const hotels = (props) => {
    const { hotels } = props;
    const hotelList = [];
    for (let hotel in hotels) hotelList.push(hotels[hotel]);
    let max = hotelList.length;

    const hotelComponents = hotelList.map((hotel, index) => {
      max -= 1;

      return (
        <div className="deck__card">
          <Hotel key={index} hotel={hotel} z={max}/>
        </div>
      )
    })

    return (
      <div>
        <div className="deck">
          {hotelComponents}
        </div>
        <div className="deck-buttons">
          <button className="deck-btn skip" onClick={this.bad}>Skip</button>
          <button className="deck-btn add" onClick={this.good}>Add</button>
        </div>
      </div>

    )
}

export default hotels;