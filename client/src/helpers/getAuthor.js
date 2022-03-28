import axios from 'axios';
import { config } from '../Constants.js';

export const getAuthor = (id) => {
  return axios.get(`${config.url.API_URL}/authors/${id}`)
  .then(res => res)
  .catch(err => { throw err.response.data });
}
