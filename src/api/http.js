import axios from 'axios'
import { baseUrl } from './serverUrl'

export const http = (info) => {

    let token = localStorage.getItem("Authorization")
    if(!token){
        token = ''
    }
    axios.defaults.withCredentials=true
    axios.defaults.crossDomain=true
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.headers.common["Authorization"] ="Bearer " + token;

    let url = info.url
    let data = info.data
    let type = info.type
    url = baseUrl + url

    return new Promise(function (resolve) {
        let promise
        if (!type) {
            type = 'GET'
        }
        if (type === 'GET') {
            // 准备 url query 参数数据
            let dataStr = '' //数据拼接字符串
            if (data) {
                Object.keys(data).forEach(key => {
                    dataStr += key + '=' + data[key] + '&'
                })
            }

            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        promise.then(response => {
            if (response.status != 200) {
                return
            }
            resolve(response.data)
        }).catch(error => {
            if (!error.response){
                return
            }
            let { code } = error.response.data
            switch (code) {
                case 10006 : // 令牌不合法或者过期
                    localStorage.removeItem("Authorization")
                    window.location.reload()
                    break;
                case 10007 : // 用户未被授权
                    localStorage.removeItem("Authorization")
                    window.location.reload()
                    break;
                default : 
                    resolve(error.response.data)
            }
        })
    })
}

