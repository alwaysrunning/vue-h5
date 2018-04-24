import Vue from 'vue'
import Promise from 'promise'
import axios from 'axios'
import jsonp from 'jsonp';


var isPro = (process.env.NODE_ENV === 'production');
axios.defaults.timeout = 10000;
axios.defaults.withCredentials=true; 

var ajax = function(type, url, data) {
    if (type == 'post') {
        data = JSON.stringify(data);
    }
    if (type == 'get') {
        data = {
            params: data
        }
    }
    return axios[type](url, data).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err,888)
    })

}

//ajax
Vue.prototype.$ajax = {
    get: (url, data) => ajax('get', url, data),
    post: (url, data) => ajax('post', url, data),
    jsonp: (url, data) => {
        if (isPro) {
            return new Promise(
                function(resolve, reject) {
                    jsonp(url, data, function(err, res) {
                        resolve(res);
                    })
                }
            )
        } else {
            return ajax('get', url, data);
        }
    }
};
