import Axios from './request'
import { BASE_URL } from './config'

export default function request (config) {
  if (config.method === 'GET' || config.method === 'get') {
    return Axios.get(BASE_URL + config.url, {
      params: config.data,
      ...config,
    })
  } else if (config.method === 'DELETE' || config.method === 'delete') {
    return Axios.delete(BASE_URL + config.url, {
      params: config.data,
      ...config,
    })
  } else if (config.method === 'POST' || config.method === 'post') {
    return Axios.post(BASE_URL + config.url, config.data, { ...config })
  } else if (config.method === 'PUT' || config.method === 'put') {
    return Axios.put(BASE_URL + config.url, config.data, { ...config })
  } else if (config.method === 'PATCH' || config.method === 'patch') {
    return Axios.patch(BASE_URL + config.url, config.data, { ...config })
  }
}
