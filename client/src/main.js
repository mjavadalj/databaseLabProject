import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from "axios";

import VueAxios from "vue-axios";
import VueSweetalert2 from "vue-sweetalert2";
import router from "./routes"
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
