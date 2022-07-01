import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e546ef4 = () => interopDefault(import('..\\pages\\CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _50285f2b = () => interopDefault(import('..\\pages\\CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _6119893c = () => interopDefault(import('..\\pages\\CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _2c4e70a3 = () => interopDefault(import('..\\pages\\CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _4cfc0e7e = () => interopDefault(import('..\\pages\\FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _2765daf2 = () => interopDefault(import('..\\pages\\FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _0236b8e8 = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _2810719e = () => interopDefault(import('..\\pages\\MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _03b171b2 = () => interopDefault(import('..\\pages\\Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _df93e176 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _ee11c20c = () => interopDefault(import('..\\pages\\board\\Detail.vue' /* webpackChunkName: "pages/board/Detail" */))
const _2752b907 = () => interopDefault(import('..\\pages\\board\\List.vue' /* webpackChunkName: "pages/board/List" */))
const _05013647 = () => interopDefault(import('..\\pages\\inform\\Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _1cb780d8 = () => interopDefault(import('..\\pages\\inform\\List.vue' /* webpackChunkName: "pages/inform/List" */))
const _c9703ee2 = () => interopDefault(import('..\\pages\\ItemList\\ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _d3c0a266 = () => interopDefault(import('..\\pages\\payment\\Payment.vue' /* webpackChunkName: "pages/payment/Payment" */))
const _5549e05d = () => interopDefault(import('..\\pages\\shoppingCart\\ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _789adcf6 = () => interopDefault(import('..\\pages\\tourItemDetails\\TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _4642d1d0 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _3ea3e636 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _17341716 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3e546ef4,
    name: "CheckId"
  }, {
    path: "/CheckPayment",
    component: _50285f2b,
    name: "CheckPayment"
  }, {
    path: "/CheckPwd",
    component: _6119893c,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _2c4e70a3,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _4cfc0e7e,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _2765daf2,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _0236b8e8,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _2810719e,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _03b171b2,
    name: "Qna"
  }, {
    path: "/SignUp",
    component: _df93e176,
    name: "SignUp"
  }, {
    path: "/board/Detail",
    component: _ee11c20c,
    name: "board-Detail"
  }, {
    path: "/board/List",
    component: _2752b907,
    name: "board-List"
  }, {
    path: "/inform/Detail",
    component: _05013647,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _1cb780d8,
    name: "inform-List"
  }, {
    path: "/ItemList/ItemList",
    component: _c9703ee2,
    name: "ItemList-ItemList"
  }, {
    path: "/payment/Payment",
    component: _d3c0a266,
    name: "payment-Payment"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _5549e05d,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _789adcf6,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _4642d1d0,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _3ea3e636,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/",
    component: _17341716,
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
