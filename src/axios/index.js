import JsonP from 'jsonp'
import axios from 'axios'
import {message} from 'ant-design-vue'
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

  static getData (self, options, params) {
    let loading
    let axios = self
    if (options.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block'
    }
    return new Promise((resolve, reject) => {
      axios[options.method](options.url, params).then(res => {
        loading.style.display = 'none'
        if (res.status === 200) {
          if (res.data.success === true) {
            resolve(res.data.result)
          } else {
            reject(res)
          }
        } else {
        }
      }).catch((err) => {
        loading.style.display = 'none'
        if (err.response.status === 401) {
          message.info('获取数据失败，没有权限，请重新登录')
        } else {

        }
      })
    })
  }

  static requestList (_this, url, params, isMock) {
    var data = {
      params,
      isMock
    }
    this.ajax({
      url,
      data
    }).then((res) => {
      let list = res.result.item_list.map((item, index) => {
        item.key = index
        return item
      })
      _this.dataSource = list
    })
  }

  static ajax (options) {
    let loading
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block'
    }
    let baseApi = ''
    if (options.isMock) {
      baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api'
    } else {
      baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api'
    }
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
          // eslint-disable-next-line
          if (res.code == 0) {
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
