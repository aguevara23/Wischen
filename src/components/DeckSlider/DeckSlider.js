import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add_toFav} from '../../redux/actions';
import {bindActionCreators} from 'redux';
import Hotels from '../Hotels/Hotels';

import {TweenMax} from "gsap";

class DeckSlider extends Component {
  constructor(props){
    super(props)
  }

  good = () => {
  const {addToFavorites} = this.props;
  const cards = document.querySelectorAll(".deck-card");

  TweenMax.to(cards[0], .3, {
    left: "100%",
    onCompleteParams:[this],
    onComplete: (t) => {
      const { collection } = t.state;
      // function to add hotel to favorites
      addToFavorites(collection[0]);

      collection.splice(0, 1);

      this.setState({
        collection
      })


    },
  });
}

bad = () => {
  const cards = document.querySelectorAll(".deck-card");

  TweenMax.to(cards[0], .3, {
    left: 0,
    onCompleteParams:[this],
    onComplete: (t) => {
      const { collection } = t.state;
      collection.splice(0, 1);

      this.setState({
        collection
      })
    },
  });
}

  render(){
    return (
      <div>
        <Hotels hotels={this.props.hotels}/>
        <div className="deck-buttons">
          <button className="deck-btn skip" onClick={this.bad}>Skip</button>
          <button className="deck-btn add" onClick={this.good}>Add</button>
        </div>
      </div>
    )
  }
}

export default DeckSlider;
