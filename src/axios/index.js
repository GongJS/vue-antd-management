import JsonP from 'jsonp'
import axios from 'axios'

export default class Axios {
  static jsonp (options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback',
        timeout: '5000'
      }, function (err, response) {
        if (err) throw err
        if (response.status === 'success') {
          resolve(response)
        } else {
          reject(response.message)
        }
      })
    })
  }

  static ajax (options) {
    let loading
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'none'
    }
    let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api'
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading')
          loading.style.display = 'none'
        }
        if (response.status === 200) {
          let res = response.data
          if (res.code === 0) {
            resolve(res)
          } else {
          }
        } else {
          reject(response.data)
        }
      })
    })
  }
}
