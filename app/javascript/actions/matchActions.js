import axios from 'axios';

import { GET_MATCHES, GET_MATCH, CREATE_MATCH } from './types';
import { gameBaseServer }                       from './server';
import { getGame        }                       from './gameActions';

export const getMatches = (gameId) => (dispatch) => {
  console.log("We are getting game")
  dispatch(getGame(gameId));
 
  console.log("We are getting matches")
  axios.get(`${gameBaseServer.host}/games/${gameId}/matches.json`)
    .then(response => dispatch({
      type: GET_MATCHES,
      payload: response.data
    })) 
}

export const getMatch = (gameId, matchId) => (dispatch) => {
  dispatch(getGame(gameId))

  return axios.get(`${gameBaseServer.host}/games/${gameId}/matches/${matchId}.json`)
    .then(response => dispatch({
      type: GET_MATCH,
      payload: response.data
    }))
}

export const createMatch = (size, starts, gameId) => (dispatch) => {
  dispatch(getGame(gameId))

  const match = { size: size, starts: starts }  
  return axios.post(`${gameBaseServer.host}/games/${gameId}/matches.json`, { match })
    .then(function(response) {
      return dispatch({
        type: CREATE_MATCH,
        payload: response.data
      });
    });
    // const redirect = `/games/${game.id}/matches/${res.data.id}.html`
    // this.props.history.push(redirect);
  
}

