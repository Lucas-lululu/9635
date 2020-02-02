// import VueSocketIO from 'vue-socket.io'
import Vue from 'vue'
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://127.0.0.1:3000',
//   // options: { path: "/my-app/" } //Optional options
// }))
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Bus from '@/utils/Bus'
import Vuecookie from 'vue-cookie'
import API from './assets/api/request'
import './assets/iconfont/iconfont.css'
import * as filters from './filters'
import ParamsHandler from "./mixins/ParamsHandler";
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(Vuecookie)
Vue.prototype.$cookies = Vuecookie
Vue.prototype.$bus = Bus
// import Swiper from 'swiper';
// import 'swiper/css/swiper.css';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$api = API
Vue.mixin(ParamsHandler)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
