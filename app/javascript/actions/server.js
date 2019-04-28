import axios from "axios";

axios.defaults.withCredentials = true;

export const gameBaseServer = {
  production:  'https://www.mahaga.org',
  development: 'http://localhost:3000',
  host:        'http://localhost:3000'
}

axios.defaults.baseUrl = gameBaseServer.production;