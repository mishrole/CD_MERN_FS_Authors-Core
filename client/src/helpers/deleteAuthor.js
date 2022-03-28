import axios from 'axios';
import { config } from '../Constants.js';

export const deleteAuthor = (id, data) => {
  return axios.delete(`${config.url.API_URL}/authors/${id}`, data)
  .then(res => res)
  .catch(err => { throw err.response.data });
}
