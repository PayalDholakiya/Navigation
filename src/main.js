import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Project from './components/Projects.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/contact', component: Contact },
  { path: '/services', component: Services },
  { path: '/project', component: Project },
  { path: '/', component: Home },
]
const router = new VueRouter({
  routes,
  mode: 'history',
})

// Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
