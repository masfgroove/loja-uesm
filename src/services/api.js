import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lojauesm-backendf.onrender.com'
});



export default api;