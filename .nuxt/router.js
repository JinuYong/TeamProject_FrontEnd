import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d2627ce8 = () => interopDefault(import('..\\pages\\CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _4ecd39c8 = () => interopDefault(import('..\\pages\\CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _491112ae = () => interopDefault(import('..\\pages\\CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _30ba720a = () => interopDefault(import('..\\pages\\FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _bb73e8e6 = () => interopDefault(import('..\\pages\\FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _6ab42612 = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _c3524502 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _1b59b06e = () => interopDefault(import('..\\pages\\ItemList\\ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _4acab808 = () => interopDefault(import('..\\pages\\tourItemDetails\\TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _603576fb = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d2627ce8,
    name: "CheckId"
  }, {
    path: "/CheckPwd",
    component: _4ecd39c8,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _491112ae,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _30ba720a,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _bb73e8e6,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _6ab42612,
    name: "LogIn"
  }, {
    path: "/SignUp",
    component: _c3524502,
    name: "SignUp"
  }, {
    path: "/ItemList/ItemList",
    component: _1b59b06e,
    name: "ItemList-ItemList"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _4acab808,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/",
    component: _603576fb,
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
