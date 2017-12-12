import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add_toFav, set_newHotels} from '../../redux/actions';
// import {bindActionCreators} from 'redux';
import Hotels from '../Hotels/Hotels';
import Hotel from '../Hotels/Hotel/Hotel';
import {TimelineMax} from "gsap";

class DeckSlider extends Component {
  constructor(props){
    super(props)

    const hotels = [];

    for (let x in props.hotels) hotels.push(props.hotels[x]);

    this.state = {
      hotels
    };
  }


  addToFavs = () => {
    const { addToFavorites, setNewHotels } = this.props;
    const cards = document.querySelectorAll(".deck__card");
    const tl = new TimelineMax();
    tl.to(cards[0], .3, {
      y: '-=30'
    })
    .to(cards[0], 1, {
      left: "100%",
      onCompleteParams:[this],
      onComplete: (t) => {
        const { hotels } = t.state

        const splicedHotel = hotels.splice(0, 1);
        // cards[0].parentNode.removeChild(cards[0])
        addToFavorites(splicedHotel[0])
        setNewHotels(hotels)
        // console.log(splicedHotel[0])
      }
    })
    .to(cards, 0, {
      left: '0',
      y: '0'
    })
  }

  addToDiscard = () => {
    const cards = document.querySelectorAll(".deck__card");
    let tl = new TimelineMax();
    tl.to(cards[0], .5, {
      left: "-100%",
      onCompleteParams:[this],
      onComplete: (t) => {
        console.log(cards[0])
        cards[0].parentNode.removeChild(cards[0])
      }
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

  // <Hotels hotels={this.state.hotels}/>

  render(){
    const style= {
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translateX(-50%)",
      boxShadow: '0 14px 28px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.10)'
    }

    return (
      <div>
        <div className="deck">
          <div className="deck__card">
            <Hotel style={{...style, zIndex:'100'}} hotel={this.state.hotels[0]} hotels={this.state.hotels} />
          </div>
          <div className="deck__card">
            <Hotel style={{...style, zIndex:'90'}} hotel={this.state.hotels[1]} hotels={this.state.hotels} />
          </div>
          <div className="deck__card">
            <Hotel style={{...style, zIndex:'80'}} hotel={this.state.hotels[2]} hotels={this.state.hotels} />
          </div>
        </div>
        <div className="deck-buttons">
          <button className="deck-btn skip" onClick={this.addToDiscard}>Skip</button>
          <button className="deck-btn add" onClick={this.addToFavs}>Add</button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return({
        addToFavorites: (hotel) => {
          dispatch(add_toFav(hotel))
        },
        setNewHotels: (hotels) => {
          dispatch(set_newHotels(hotels))
        }
    })
}

export default connect(null, mapDispatchToProps)(DeckSlider);
