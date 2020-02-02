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

function IsPC() {
  let userAgentInfo = navigator.userAgent;
  let Agents = new Array(
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  );
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

router.beforeEach((to, from, next) => {
  let routerFlag = IsPC();
  if (!routerFlag) {
    let a = to.fullPath
    let b = a.replace(/pc/, "web")
    if (to.fullPath == b) {
      next()
    } else {
      next({
        path: b
      })
    }
  } else {
    let a = to.fullPath
    let b = a.replace(/web/, 'pc')
    if (to.fullPath == b) {
      next()
    } else {
      next({
        path: b
      })
    }
  }
})

export default router
