import { GET_MATCHES, GET_MATCH, CREATE_MATCH } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MATCHES:
      return {
        ...state,
        items: action.payload
      }
    case GET_MATCH:
      return {
        ...state,
        item: action.payload
      }
    case CREATE_MATCH:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}