import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
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
=======
const _35e1fa3a = () => interopDefault(import('../pages/CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _1bed402e = () => interopDefault(import('../pages/CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _507aaf52 = () => interopDefault(import('../pages/CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _160ec08d = () => interopDefault(import('../pages/FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _4159443b = () => interopDefault(import('../pages/FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _f60c9b80 = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _667a51de = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _faa584b4 = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _677f196d = () => interopDefault(import('../pages/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _7a7b0329 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 83c72994942ea5499ce265c8cddbe60dbd04a5e3

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
<<<<<<< HEAD
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
=======
    component: _35e1fa3a,
    name: "CheckId"
  }, {
    path: "/CheckPwd",
    component: _1bed402e,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _507aaf52,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _160ec08d,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _4159443b,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _f60c9b80,
    name: "LogIn"
  }, {
    path: "/SignUp",
    component: _667a51de,
    name: "SignUp"
  }, {
    path: "/ItemList/ItemList",
    component: _faa584b4,
    name: "ItemList-ItemList"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _677f196d,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/",
    component: _7a7b0329,
>>>>>>> 83c72994942ea5499ce265c8cddbe60dbd04a5e3
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
