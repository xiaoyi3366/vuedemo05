import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Navigation from './components/Navigation.vue';
import Problem from './components/Problem.vue';
import Content from './components/Content.vue';
import Pcontent from './components/Pcontent.vue';
const routes = [
  {path:'/navigation',component:Navigation},
  {path:'/problem',component:Problem},
  {path:'/content/:aid',component:Content},
  {path:'/pcontent',component:Pcontent},
  {path: '*',redirect:'/navigation'}
]

const router = new VueRouter({
  routes
})


//4、挂载路由

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//5 <router-view></router-view> 放在 App.vue
