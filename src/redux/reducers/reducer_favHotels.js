// import { SET_FAVS, ADD_TO_FAV } from "../constants";

const FAVORITES = {};

export default (state=FAVORITES, action) => {
    switch (action.type) {
       // case SET_FAVS:
       //  return Object.assign({}, action.payload);

       case 'ADD_TO_FAV':
         state = {...state, [action.payload.id]: action.payload}
         return state;
        // return Object.assign({}, state, {[action.payload.id]: action.payload});

       default:
          return state;
    }
}
