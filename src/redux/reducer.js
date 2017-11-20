import {combineReducers} from 'redux';
import {GET_DOLLS, GET_SINGLE_DOLL, UPDATE_DOLL, ADD_DOLL} from './actions'

export const dolls = (state = {}, action) => {
  switch (action.type) {
    case GET_DOLLS:
      return action.payload.data;
    default:
      return state;
  }
};

export const activeDoll = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_DOLL:
      return { ...state, ...action.payload };
    case ADD_DOLL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  dolls,
  activeDoll
});
