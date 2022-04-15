import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/HomeComponent.vue'
import About from './components/AboutComponent.vue'

export default createRouter({
  history : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
