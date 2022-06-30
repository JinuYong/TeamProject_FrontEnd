import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _32812347 = () => interopDefault(import('../pages/CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _99998e7e = () => interopDefault(import('../pages/CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _a146fa38 = () => interopDefault(import('../pages/CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _ece07c40 = () => interopDefault(import('../pages/FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _3df86d48 = () => interopDefault(import('../pages/FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _bd0c8ae6 = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _6aa805e0 = () => interopDefault(import('../pages/MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _6d682a68 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _4043d864 = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _8f5c4274 = () => interopDefault(import('../pages/board/Detail.vue' /* webpackChunkName: "pages/board/Detail" */))
const _6db2fbd3 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _514f79fb = () => interopDefault(import('../pages/inform/Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _1c57e048 = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _966b8b1a = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _3aefd901 = () => interopDefault(import('../pages/payment/Payment.vue' /* webpackChunkName: "pages/payment/Payment" */))
const _0370f4f3 = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _9813dc80 = () => interopDefault(import('../pages/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _b414c0f6 = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _c638532a = () => interopDefault(import('../pages/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _d209e914 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _32812347,
    name: "CheckId"
  }, {
    path: "/CheckPwd",
    component: _99998e7e,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _a146fa38,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _ece07c40,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _3df86d48,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _bd0c8ae6,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _6aa805e0,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _6d682a68,
    name: "Qna"
  }, {
    path: "/SignUp",
    component: _4043d864,
    name: "SignUp"
  }, {
    path: "/board/Detail",
    component: _8f5c4274,
    name: "board-Detail"
  }, {
    path: "/board/List",
    component: _6db2fbd3,
    name: "board-List"
  }, {
    path: "/inform/Detail",
    component: _514f79fb,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _1c57e048,
    name: "inform-List"
  }, {
    path: "/ItemList/ItemList",
    component: _966b8b1a,
    name: "ItemList-ItemList"
  }, {
    path: "/payment/Payment",
    component: _3aefd901,
    name: "payment-Payment"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _0370f4f3,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _9813dc80,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _b414c0f6,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _c638532a,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/",
    component: _d209e914,
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
