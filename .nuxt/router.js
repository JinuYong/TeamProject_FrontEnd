import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _451f00fd = () => interopDefault(import('../pages/CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _e81a4dd8 = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _175ddc6a = () => interopDefault(import('../pages/CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _5fc8959a = () => interopDefault(import('../pages/CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _14f7552c = () => interopDefault(import('../pages/FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _50964afe = () => interopDefault(import('../pages/FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _6380e47a = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _27c2411a = () => interopDefault(import('../pages/MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _7e5559c4 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _a78f2824 = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _156822d0 = () => interopDefault(import('../pages/board/Detail.vue' /* webpackChunkName: "pages/board/Detail" */))
const _42828b46 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _d1fc919e = () => interopDefault(import('../pages/inform/Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _66781a04 = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _300eeca9 = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _45f0be92 = () => interopDefault(import('../pages/payment/Payment.vue' /* webpackChunkName: "pages/payment/Payment" */))
const _5359ddae = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _fba9b16c = () => interopDefault(import('../pages/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _0cf48fbb = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _5dc15cbe = () => interopDefault(import('../pages/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _787e42a8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _451f00fd,
    name: "CheckId"
  }, {
    path: "/CheckPayment",
    component: _e81a4dd8,
    name: "CheckPayment"
  }, {
    path: "/CheckPwd",
    component: _175ddc6a,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _5fc8959a,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _14f7552c,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _50964afe,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _6380e47a,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _27c2411a,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _7e5559c4,
    name: "Qna"
  }, {
    path: "/SignUp",
    component: _a78f2824,
    name: "SignUp"
  }, {
    path: "/board/Detail",
    component: _156822d0,
    name: "board-Detail"
  }, {
    path: "/board/List",
    component: _42828b46,
    name: "board-List"
  }, {
    path: "/inform/Detail",
    component: _d1fc919e,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _66781a04,
    name: "inform-List"
  }, {
    path: "/ItemList/ItemList",
    component: _300eeca9,
    name: "ItemList-ItemList"
  }, {
    path: "/payment/Payment",
    component: _45f0be92,
    name: "payment-Payment"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _5359ddae,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _fba9b16c,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _0cf48fbb,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _5dc15cbe,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/",
    component: _787e42a8,
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
