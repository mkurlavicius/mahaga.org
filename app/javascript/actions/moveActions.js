import axios from 'axios';

import { GET_MOVES, GET_MOVE, CREATE_MOVE } from './types';
import { gameBaseServer }                   from './server';
import { getMatch }                         from './matchActions'

export const getMoves = (gameId, matchId, withMatch = true) => (dispatch) => {
  withMatch ? dispatch(getMatch(gameId, matchId)) : null

  return axios.get(`/games/${gameId}/matches/${matchId}/moves.json`)
    .then(response => dispatch({
      type:    GET_MOVES,
      payload: response.data
    }));
}

export const getMove = (gameId, matchId, moveId, withMatch = true) => (dispatch) => {
  withMatch ? dispatch(getMatch(gameId, matchId)) : null

  return axios.get(`/games/${gameId}/matches/${matchId}/moves/${moveId}./json`)
    .then(response => dispatch({
      type:    GET_MOVE,
      payload: response.data
    }));
}

export const createMove = (gameId, matchId, move) => (dispatch) => {
  return axios.post(`/games/${gameId}/matches/${matchId}/moves.json`, { move })
    .then(response => dispatch({
      type:    CREATE_MOVE,
      payload: response.data
    }));
}