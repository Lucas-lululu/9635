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
    if (Vue.cookie.get('authorization')) {
      config.headers['authorization'] = Vue.cookie.get('authorization')
    }
    config.headers['authorization'] = 'c030965a77fa4cc0bcb0fbda05935287'
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
      if (res.data.errorCode === 101) {
        console.log(res)
      } else {
        return res.data
      }
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