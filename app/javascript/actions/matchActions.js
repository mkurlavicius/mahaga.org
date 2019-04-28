import axios from 'axios';

import { GET_MATCHES, GET_MATCH, CREATE_MATCH } from './types';
import { gameBaseServer }                       from './server';
import { getGame }                              from './gameActions'

export const getMatches = (gameId, withGame = true) => (dispatch) => {
  withGame ? dispatch(getGame(gameId)) : null

  return axios.get(`/games/${gameId}/matches.json`)
    .then(response => dispatch({
      type: GET_MATCHES,
      payload: response.data
    })) 
}

export const getMatch = (gameId, matchId, withGame = true) => (dispatch) => {
  withGame ? dispatch(getGame(gameId)) : null

  return axios.get(`/games/${gameId}/matches/${matchId}.json`)
    .then(response => dispatch({
      type:    GET_MATCH,
      payload: response.data
    }));
}

export const createMatch = (gameId, match) => (dispatch) => {
  return axios.post(`/games/${gameId}/matches.json`, { match })
    .then(response => dispatch({
      type:    CREATE_MATCH,
      payload: response.data
    }));
}

