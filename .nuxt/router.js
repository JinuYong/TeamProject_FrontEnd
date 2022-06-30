import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6fcf1632 = () => interopDefault(import('..\\pages\\CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _1fa3a336 = () => interopDefault(import('..\\pages\\CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _455def62 = () => interopDefault(import('..\\pages\\CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _a6db74d6 = () => interopDefault(import('..\\pages\\FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _7b466033 = () => interopDefault(import('..\\pages\\FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _26252790 = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _5b482505 = () => interopDefault(import('..\\pages\\MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _2ee24ad3 = () => interopDefault(import('..\\pages\\Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _63465c19 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _4f555e9a = () => interopDefault(import('..\\pages\\board\\List.vue' /* webpackChunkName: "pages/board/List" */))
const _3d4a408e = () => interopDefault(import('..\\pages\\boardDetails\\boardDetails.vue' /* webpackChunkName: "pages/boardDetails/boardDetails" */))
const _60f49d68 = () => interopDefault(import('..\\pages\\inform\\List.vue' /* webpackChunkName: "pages/inform/List" */))
const _7e70e13a = () => interopDefault(import('..\\pages\\ItemList\\ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _4430e6a2 = () => interopDefault(import('..\\pages\\tourItemDetails\\TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _3c1bb97c = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _1a1b83e2 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _3b2285be = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6fcf1632,
    name: "CheckId"
  }, {
    path: "/CheckPwd",
    component: _1fa3a336,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _455def62,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _a6db74d6,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _7b466033,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _26252790,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _5b482505,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _2ee24ad3,
    name: "Qna"
  }, {
    path: "/SignUp",
    component: _63465c19,
    name: "SignUp"
  }, {
    path: "/board/List",
    component: _4f555e9a,
    name: "board-List"
  }, {
    path: "/boardDetails/boardDetails",
    component: _3d4a408e,
    name: "boardDetails-boardDetails"
  }, {
    path: "/inform/List",
    component: _60f49d68,
    name: "inform-List"
  }, {
    path: "/ItemList/ItemList",
    component: _7e70e13a,
    name: "ItemList-ItemList"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _4430e6a2,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _3c1bb97c,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _1a1b83e2,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/",
    component: _3b2285be,
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
