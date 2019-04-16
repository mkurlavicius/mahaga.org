import axios from 'axios';

import { GET_MOVES, GET_MOVE, CREATE_MOVE } from './types';
import { gameBaseServer }                   from './server';
import { getMatch }                         from './matchActions'

export const getMoves = (gameId, matchId) => (dispatch) => {
  console.log("Getting all the moves")
  dispatch(getMatch(gameId, matchId));
  return axios.get(`${gameBaseServer.host}/games/${gameId}/matches/${matchId}/moves.json`)
    .then(response => dispatch({
      type: GET_MOVES,
      payload: response.data
    })) 
}

export const getMove = (gameId, matchId, moveId) => (dispatch) => {
  dispatch(getMatch(gameId, matchId));
  return axios.get(`${gameBaseServer.host}/games/${gameId}/matches/${matchId}/moves/${moveId}./json`)
    .then(response => dispatch({
      type: GET_MOVE,
      payload: response.data
    }))
}

export const createMove = (size, starts, gameId) => (dispatch) => {
  dispatch(getMatch(gameId, matchId))

  const move = { size: size, starts: starts }  
  return axios.post(`${gameBaseServer.host}/games/${gameId}/matches/${matchId}/moves.json`, { match })
    .then(function(response) {
      return dispatch({
        type: CREATE_MOVE,
        payload: response.data
      });
    });
    // const redirect = `/games/${game.id}/matches/${res.data.id}.html`
    // this.props.history.push(redirect);
  
}