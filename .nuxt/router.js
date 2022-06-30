import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _79434428 = () => interopDefault(import('..\\pages\\BoardList.vue' /* webpackChunkName: "pages/BoardList" */))
const _50ac7e0b = () => interopDefault(import('..\\pages\\CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _5a73367d = () => interopDefault(import('..\\pages\\CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _81d648b0 = () => interopDefault(import('..\\pages\\CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _16ebfe9c = () => interopDefault(import('..\\pages\\FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _5c23c80c = () => interopDefault(import('..\\pages\\FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _d4f6135e = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _9c028668 = () => interopDefault(import('..\\pages\\MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _3fd7872c = () => interopDefault(import('..\\pages\\Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _64bfd5c0 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _f2666180 = () => interopDefault(import('..\\pages\\boardDetails\\boardDetails.vue' /* webpackChunkName: "pages/boardDetails/boardDetails" */))
const _ba2e142c = () => interopDefault(import('..\\pages\\ItemList\\ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _19fa937b = () => interopDefault(import('..\\pages\\tourItemDetails\\TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _3c582e56 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _8109708a = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _e9f3718c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/BoardList",
    component: _79434428,
    name: "BoardList"
  }, {
    path: "/CheckId",
    component: _50ac7e0b,
    name: "CheckId"
  }, {
    path: "/CheckPwd",
    component: _5a73367d,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _81d648b0,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _16ebfe9c,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _5c23c80c,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _d4f6135e,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _9c028668,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _3fd7872c,
    name: "Qna"
  }, {
    path: "/SignUp",
    component: _64bfd5c0,
    name: "SignUp"
  }, {
    path: "/boardDetails/boardDetails",
    component: _f2666180,
    name: "boardDetails-boardDetails"
  }, {
    path: "/ItemList/ItemList",
    component: _ba2e142c,
    name: "ItemList-ItemList"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _19fa937b,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _3c582e56,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _8109708a,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/",
    component: _e9f3718c,
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
