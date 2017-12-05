import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Hotels from './components/Hotels/Hotels';

class App extends Component {

  render() {
    return (
      <div>
        <Hotels hotels={this.props.state.allHotels}/>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
