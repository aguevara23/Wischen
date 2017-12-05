import React from 'react';
import './compiled/style.css';

import PropTypes from 'prop-types';

import App from './App';

const Root = ({ store }) => (
  <div>
    <App />
  </div>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
