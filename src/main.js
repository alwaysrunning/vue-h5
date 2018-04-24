import Vue from 'vue'
import App from './App'
import router from './router'
import ajax from './assets/js/ajax'
import './mock/mock'
import './assets/sass/common.scss';
import './assets/sass/reset.scss';
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
