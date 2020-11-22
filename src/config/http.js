import axios from 'axios';

//add authorization header to every request
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if(token)
  	config.headers.Authorization = `Bearer ${token}`;
  //set base url for every request
  config.baseURL = 'http://localhost:3000/api/'
  return config;
});

export default axios;
