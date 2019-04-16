import { GET_MOVES, GET_MOVE, CREATE_MOVE } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MOVES:
      return {
        ...state,
        items: action.payload
      }
    case GET_MOVE:
      return {
        ...state,
        item: action.payload
      }
    case CREATE_MOVE:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}