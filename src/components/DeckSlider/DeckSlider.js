import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add_toFav} from '../../redux/actions';
import {bindActionCreators} from 'redux';
import Hotels from '../Hotels/Hotels';

import {TweenMax} from "gsap";

class DeckSlider extends Component {

  addToFavorites = () => {
    alert("test")
  }

  addToDiscard = () => {
    alert("bad")
  }



  render(){
    return (
      <div>
        <Hotels hotels={this.props.hotels}/>
        <div className="deck-buttons">
          <button className="deck-btn skip" onClick={this.addToDiscard}>Skip</button>
          <button className="deck-btn add" onClick={this.addToFavorites}>Add</button>
        </div>
      </div>
    )
  }
}

export default DeckSlider;
