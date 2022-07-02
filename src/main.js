import Vue from 'vue'
import App from './App.vue'


import Index from './components/BookList.vue'
import Create from './components/AddBook.vue'
import Edit from './components/EditBook.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name:'Create',
    path:'/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  }
];

const router = new VueRouter({ mode: 'history', routes: routes })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
