import axios from 'axios';
import { config } from '../Constants.js';

export const putAuthor = (id, data) => {
  return axios.put(`${config.url.API_URL}/authors/${id}`, data)
  .then(res => res)
  .catch(err => { throw err.response.data });
}
