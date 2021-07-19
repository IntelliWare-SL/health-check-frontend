import axios from 'axios';
import config from './config.json';

// Here we creating the axios http request base
// if a user is already logged in we take the token and send it as the Bearer Token
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
