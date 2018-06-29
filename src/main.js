import Vue from 'vue'
import App from './App.vue'

import VueCodeMirror from 'vue-codemirror'

// require styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'codemirror/lib/codemirror.css'

// Use code mirror
Vue.use(VueCodeMirror)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
