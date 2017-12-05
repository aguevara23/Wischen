import { combineReducers } from 'redux';
import allHotels from './reducers/reducer_hotels';
import favHotels from './reducers/reducer_favHotels';

const rootReducer = combineReducers({
   allHotels,
   favHotels
});

export default rootReducer;
