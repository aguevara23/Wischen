import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add_toFav} from '../../redux/actions';
import {bindActionCreators} from 'redux';
import Hotels from '../Hotels/Hotels';
import Hotel from '../Hotels/Hotel/Hotel';
import {TweenMax} from "gsap";

class DeckSlider extends Component {
  constructor(props){
    super(props)

    const hotels = [];
    const favorites = [];

    for (let x in props.hotels) hotels.push(props.hotels[x]);

    this.state = {
      hotels,
      favorites
    };
  }


  addToFavorites = () => {
    const { addToFavorites } = this.props;
    const cards = document.querySelectorAll(".deck__card");
    TweenMax.to(cards[0], 2, {
      left: "100%",
      onCompleteParams:[this],
      onComplete: (t) => {
        const { hotels } = t.state;
        // console.log("hotels", hotels)
        hotels.splice(0, 1);

        this.setState({
          hotels
        })
        // console.log("new hotels", this.state.hotels)
        // function to add hotel to favorites
      }
    });
  }

  addToDiscard = () => {
    const cards = document.querySelectorAll(".deck__card");
    TweenMax.to(cards[0], 2, {
      x: "-100%"
      // onCompleteParams:[this],
      // onComplete: (t) => {
      //   const { collection } = t.state;
      //   // function to add hotel to favorites

    });
  }
  // componentWillReceiveProps(){
  //   alert("gon receive new props!")
  // }

  // componentWillUpdate() {
  //   alert("gon update!")
  //
  // }

  // <div className="deck__card">
  //   <Hotel hotel={this.state.hotels[0]} />
  // </div>
  // <div className="deck__card">
  //   <Hotel hotel={this.state.hotels[1]} />
  // </div>
  // <div className="deck__card">
  //   <Hotel hotel={this.state.hotels[2]} />
  // </div>

  render(){

    return (
      <div>
        <Hotels hotels={this.state.hotels}/>
        <div className="deck-buttons">
          <button className="deck-btn skip" onClick={this.addToDiscard}>Skip</button>
          <button className="deck-btn add" onClick={this.addToFavorites}>Add</button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return({
        addToFavorites: (hotel) => {
          dispatch(add_toFav(hotel))
        }
    })
}

export default connect(null, mapDispatchToProps)(DeckSlider);
