import { GET_GAMES, GET_GAME } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_GAMES:
      return {
        ...state,
        items: action.payload
      }
    case GET_GAME:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}