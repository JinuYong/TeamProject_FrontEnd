import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a950ce88 = () => interopDefault(import('..\\pages\\CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _552b71ec = () => interopDefault(import('..\\pages\\CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _446135d9 = () => interopDefault(import('..\\pages\\CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _3feb6c6a = () => interopDefault(import('..\\pages\\FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _92623a86 = () => interopDefault(import('..\\pages\\FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _38e90942 = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _d2833f62 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _9626a622 = () => interopDefault(import('..\\pages\\boardDetails\\boardDetails.vue' /* webpackChunkName: "pages/boardDetails/boardDetails" */))
const _48061ace = () => interopDefault(import('..\\pages\\ItemList\\ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _30dceb2c = () => interopDefault(import('..\\pages\\tourItemDetails\\TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _2e6a5a2b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CheckId",
    component: _a950ce88,
    name: "CheckId"
  }, {
    path: "/CheckPwd",
    component: _552b71ec,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _446135d9,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _3feb6c6a,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _92623a86,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _38e90942,
    name: "LogIn"
  }, {
    path: "/SignUp",
    component: _d2833f62,
    name: "SignUp"
  }, {
    path: "/boardDetails/boardDetails",
    component: _9626a622,
    name: "boardDetails-boardDetails"
  }, {
    path: "/ItemList/ItemList",
    component: _48061ace,
    name: "ItemList-ItemList"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _30dceb2c,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/",
    component: _2e6a5a2b,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
