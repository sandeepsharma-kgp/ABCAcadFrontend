import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Default from "./layouts/Default.vue";
import NoContactUs from "./layouts/NoContactUs";
import blank from "./layouts/NoContactUs";

Vue.component("Default-layout", Default);
Vue.component("NoContactUs-layout", NoContactUs);
Vue.component("blanck-layout", blank);
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



