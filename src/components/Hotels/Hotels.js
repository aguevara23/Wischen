import React, { Component } from 'react';
import Hotel from './Hotel/Hotel';
import './Hotels.css';

class Hotels extends Component {
  constructor(props){
    super(props);

    this.state = {
      hotels: this.props.hotels
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("[UPDATE Hotels.js] in componentWillReceiveProps", nextProps.hotels)
    this.setState({
      hotels: nextProps.hotels
    })
  }

  render() {
    const hotelList = [...this.state.hotels];
    let max = hotelList.length;

    const hotelComponents = hotelList.map((hotel, index) => {
      max -= 1;
      return (
        <div className="deck__card" style={{zIndex: max}}>
          <Hotel key={index} hotel={hotel}/>
        </div>
      )
    })

    return (
      <div className="deck">
        {hotelComponents}
      </div>
    )
  }
}








//
// const hotels = (props) => {
//   const { hotels } = props;
//   const hotelList = [];
//   const favorites = [];
//
//   for (let hotel in hotels) hotelList.push(hotels[hotel]);
//   let max = hotelList.length;
//
//
//
//   return (
//     <div className="deck">
//       {hotelComponents}
//     </div>
//   )
// }

export default Hotels;
