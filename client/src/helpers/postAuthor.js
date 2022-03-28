import axios from 'axios';
import { config } from '../Constants.js';

export const postAuthor = (data) => {
  return axios.post(`${config.url.API_URL}/authors`, data)
  .then(res => res)
  .catch(err => { throw err.response.data });
}
