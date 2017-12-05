import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux';
import { createLogger }  from 'redux-logger';
// import { createSession } from 'redux-session';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, createLogger());
const persistedState = sessionStorage.getItem('reduxState') ? JSON.parse(sessionStorage.getItem('reduxState')) : {}

const store = createStore(rootReducer, persistedState, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
  sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
