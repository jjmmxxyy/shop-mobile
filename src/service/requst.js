//封装axios
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'antd-mobile'
import { BASE_URL, TIMEOUT } from './config'

//创建一个axios实例对象
const instance = axios.create({
  baseURL: BASE_URL, // api的base_url
  timeout: TIMEOUT, // 请求超时时间
  // withCredentials: true, // 选项表明了是否是跨域请求
})

// 请求前做一下拦截(拦截器),传入两个参数(一个是成功的回调函数,一个是失败的)
instance.interceptors.request.use(
  (config) => {
    // console.log('config', config)

    // 发送请求时显示加载中
    Toast.show({
      icon: 'loading',
      content: '加载中…',
      duration: 0,
      maskClickable: false
    })

    // 因为发送请求,发送请求的数据格式(json,form-data)

    // const token = localStorage.getItem('token') // 登录时存储的token
    if (config.method === 'post' || config.method === 'put') {
      // if (token) {
      //   config.data.token = token
      // }
      config.data = qs.stringify(config.data, {
        allowDots: true, // a: { b: { c: 'd', e: 'f' } } => 'a.b.c=d&a.b.e=f'
        arrayFormat: 'repeat', // a:[1,2,3] => a=1&a=2&a=3
      })
    } else if (config.method === 'get' || config.method === 'delete') {
      // if (token) {
      //   config.params.token = token
      // }
      config.url = config.url + '?' + qs.stringify(config.params, {
        arrayFormat: 'comma', // a:[1,2,3] => a=1,2,3
      })
      delete config.params
    }


    return config
  },

  (error) => {
    // 清除加载组件
    Toast.clear()


    return Promise.reject(error)
  }
)

//响应结果后的拦截
instance.interceptors.response.use(
  (result) => {
    // 清除加载组件
    Toast.clear()

    //result  后端返回的数据结果
    return result.data
  },
  (error) => {
    // 清除加载组件
    Toast.clear()

    // 响应失败
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          Toast.show({
            icon: 'fail',
            content: '请求错误',
            duration: 1000,
            maskClickable: false
          })
          break;

        default:
          Toast.show({
            icon: 'fail',
            content: '网络错误',
            duration: 1000,
            maskClickable: false
          })
          break;
      }
    }
    return Promise.reject(error)
  }
)

export default instance
