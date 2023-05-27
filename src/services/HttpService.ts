import axios, { AxiosAdapter } from 'axios'
import { userStore } from "../services/UserStore";
import URLs from '../helpers/urls';

let adapter: AxiosAdapter | undefined = undefined

// instance
const http = axios.create({
  baseURL: URLs.baseUrl,
  adapter,
})

// interceptors
http.interceptors.request.use(function (config: any) {
  config.headers = {
    "Authorization": `Bearer ${localStorage.getItem('user.token')}`,
    'Content-Type': 'application/json',
    ...config.headers,
  }

  return config
}, function (error) {
  return Promise.reject(error)
})
http.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default http