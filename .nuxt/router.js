import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3ed2880b = () => interopDefault(import('../pages/CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _310e6c7d = () => interopDefault(import('../pages/CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _91b434b0 = () => interopDefault(import('../pages/CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _26dcb49c = () => interopDefault(import('../pages/FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _4a49d20c = () => interopDefault(import('../pages/FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _09a58051 = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _87e21a68 = () => interopDefault(import('../pages/MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _7692912c = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _44de69c0 = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _7e090517 = () => interopDefault(import('../pages/boardDetails/boardDetails.vue' /* webpackChunkName: "pages/boardDetails/boardDetails" */))
const _b6710b92 = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _2cf4df08 = () => interopDefault(import('../pages/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _723e596e = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _1430e7a2 = () => interopDefault(import('../pages/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _01b25d8c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3ed2880b,
    name: "CheckId"
  }, {
    path: "/CheckPwd",
    component: _310e6c7d,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _91b434b0,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _26dcb49c,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _4a49d20c,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _09a58051,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _87e21a68,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _7692912c,
    name: "Qna"
  }, {
    path: "/SignUp",
    component: _44de69c0,
    name: "SignUp"
  }, {
    path: "/boardDetails/boardDetails",
    component: _7e090517,
    name: "boardDetails-boardDetails"
  }, {
    path: "/ItemList/ItemList",
    component: _b6710b92,
    name: "ItemList-ItemList"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _2cf4df08,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _723e596e,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _1430e7a2,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/",
    component: _01b25d8c,
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
