import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './routes';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(VueRouter);

axios.defaults.baseURL = `${window.location.origin}/api`;

new Vue({
  router: new VueRouter({ routes }),
  render: h => h(App),
}).$mount('#app')
