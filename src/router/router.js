import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Navigation from '../components/Navigation.vue';
import Problem from '../components/Problem.vue';
import Content from '../components/Content.vue';
import Pcontent from '../components/Pcontent.vue';
import User from '../components/User.vue';
  import UserAdd from '../components/user/UserAdd.vue';
  import UserList from '../components/user/UserList.vue';
const routes = [
  {path:'/navigation',component:Navigation},
  {path:'/problem',component:Problem},
  // {path:'/problem',component:Problem,name:'problem'},
  {path:'/content/:aid',component:Content},
  {path:'/pcontent',component:Pcontent},
  {
    path:'/user',
    component:User,
    children:[
      {path:'useradd',component:UserAdd},
      {path:'userlist',component:UserList},
    ]
  },

  {path: '*',redirect:'/navigation'}
]

const router = new VueRouter({
  routes
})
export default router;