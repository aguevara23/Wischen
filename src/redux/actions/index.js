import {
  // GET_HOTELS,
  ADD_TO_FAV
} from '../constants';

// export function get_allHotels () {};

export function add_toFav(hotel) {
  return {
    type: 'ADD_TO_FAV',
    payload: hotel
  }
};
