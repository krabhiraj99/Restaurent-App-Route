import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router/router'
import bootstrap from "./plugins/bootstrap/bootstrap";
Vue.config.productionTip = false

new Vue({
  router,
  bootstrap,
  render: h => h(App),
}).$mount('#app')
