import axios from 'axios'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export const baseURL = 'https://books.ioasys.com.br/api/v1'

export const api = axios.create({
  baseURL,
})

api.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    if (error.response.status === 401) {
      const token = localStorage.getItem('jwt')
      api
        .post('auth/refresh-token', {
          refreshToken: token,
        })
        .catch(() => {
          localStorage.clear()
          history.push('/')
          window.location.reload()
        })
    }

    return Promise.reject(error)
  },
)

api.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('jwt')
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)
