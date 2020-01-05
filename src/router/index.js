import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import {
  pc,
  web
} from './children'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  children: [{
      path: '/',
      redirect: '/pc/index'
    },
    ...pc,
    ...web
  ]
}]
const router = new VueRouter({
  mode: 'history',
  base: '/num/',
  routes
})

export default router