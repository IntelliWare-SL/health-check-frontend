import axios from 'axios';
import config from './config.json';

export default function createRequest(upload) {
  const idToken = localStorage.getItem('idToken');
  return axios.create({
    baseURL: `${config.HOSTED_URL}/`,
    headers: {
      'Content-type': !upload ? 'application/json' : 'multipart/form-data',
      Authorization: `Bearer ${idToken}`,
    },
  });
}
