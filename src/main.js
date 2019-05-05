import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import router from './router/router.js';

//4、挂载路由

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//5 <router-view></router-view> 放在 App.vue
