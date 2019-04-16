import axios from 'axios';

import { GET_GAMES, GET_GAME } from './types';
import { gameBaseServer }      from './server'

export const getGames = () => (dispatch) => {
  axios.get(`${gameBaseServer.host}/games.json`)
    .then(response => dispatch({
      type: GET_GAMES,
      payload: response.data
    })) 
}

export const getGame = (gameId) => (dispatch) => {
  axios.get(`${gameBaseServer.host}/games/${gameId}.json`)
    .then(response => dispatch({
      type: GET_GAME,
      payload: response.data
    }))
}