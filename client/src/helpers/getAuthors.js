import axios from 'axios';
import { config } from '../Constants.js';

export const getAuthors = () => {
  return axios.get(`${config.url.API_URL}/authors`)
  .then(res => res)
  .catch(err => { throw err.response.data });
}
