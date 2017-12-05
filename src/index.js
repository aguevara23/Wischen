import React from 'react';
import ReactDOM from 'react-dom';
import './compiled/style.css';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import store from './store';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Root store={store} />
      </Provider>
    </AppContainer>
    ,document.getElementById('root')
  )
}

render(Root)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => { render(Root) })
}
