import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Hotels from './components/Hotels/Hotels';
import Favorites from './components/Favorites/Favorites';
import Nav from './components/Nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  renderComponents = () => {
    const { allHotels, favHotels } = this.props.state;

    if (this.state.currentView) {
      return <Favorites favorites={favHotels}/>
    }

    return <Hotels hotels={allHotels} />
  }

  viewFavorites = () => {
    this.setState({currentView: 1})
  }

  viewAllHotels = () => {
    this.setState({currentView: 0})
  }

  render() {
    return (
      <div>
        <Nav viewFavorites={this.viewFavorites} viewAllHotels={this.viewAllHotels}/>
        {this.renderComponents()}
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
