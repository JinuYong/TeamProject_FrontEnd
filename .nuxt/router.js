import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7286b00a = () => interopDefault(import('../pages/CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _73df445e = () => interopDefault(import('../pages/CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _2477f627 = () => interopDefault(import('../pages/CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _5a1410bd = () => interopDefault(import('../pages/FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _7dfdfa0b = () => interopDefault(import('../pages/FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _c01cc7e0 = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _10c82741 = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _22f62114 = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _0da2d99d = () => interopDefault(import('../pages/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _d51a260e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7286b00a,
    name: "CheckId"
  }, {
    path: "/CheckPwd",
    component: _73df445e,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _2477f627,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _5a1410bd,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _7dfdfa0b,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _c01cc7e0,
    name: "LogIn"
  }, {
    path: "/SignUp",
    component: _10c82741,
    name: "SignUp"
  }, {
    path: "/ItemList/ItemList",
    component: _22f62114,
    name: "ItemList-ItemList"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _0da2d99d,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/",
    component: _d51a260e,
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
