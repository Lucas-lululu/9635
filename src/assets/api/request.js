import axios from 'axios'
import Vue from 'vue'
const service = axios.create({
  timeout: 1000 * 30,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (Vue.cookie.get('token')) {
      config.headers['token'] = Vue.cookie.get('token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// response拦截器
service.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res.data
    } else {
      return {
        msg: res.statusText
      }
    }
  },
  err => {
    return Promise.reject(err)
  }
)
export default service
