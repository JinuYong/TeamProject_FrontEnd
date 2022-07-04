import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b9c1f4a = () => interopDefault(import('..\\pages\\CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _4e765714 = () => interopDefault(import('..\\pages\\CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _119c0e2d = () => interopDefault(import('..\\pages\\CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _38f8a5f8 = () => interopDefault(import('..\\pages\\CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _4e71fb68 = () => interopDefault(import('..\\pages\\FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _54ad8b48 = () => interopDefault(import('..\\pages\\FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _0f62bca1 = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _74943c7c = () => interopDefault(import('..\\pages\\MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _47dabd08 = () => interopDefault(import('..\\pages\\Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _39f5ee06 = () => interopDefault(import('..\\pages\\SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _e109ce60 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _13e9530f = () => interopDefault(import('..\\pages\\board\\Detail.vue' /* webpackChunkName: "pages/board/Detail" */))
const _33fcee5c = () => interopDefault(import('..\\pages\\board\\List.vue' /* webpackChunkName: "pages/board/List" */))
const _4f54f65c = () => interopDefault(import('..\\pages\\inform\\Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _7a40b4df = () => interopDefault(import('..\\pages\\inform\\List.vue' /* webpackChunkName: "pages/inform/List" */))
const _11281ccc = () => interopDefault(import('..\\pages\\ItemList\\ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _34caf2d0 = () => interopDefault(import('..\\pages\\payment\\Payment.vue' /* webpackChunkName: "pages/payment/Payment" */))
const _37bdb668 = () => interopDefault(import('..\\pages\\shoppingCart\\ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _65e215cb = () => interopDefault(import('..\\pages\\tourItemDetails\\TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _c16877ca = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\CardSliderCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/CardSliderCom" */))
const _7f588f46 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _c50b19b6 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _4a237a0b = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _ff82f798 = () => interopDefault(import('..\\pages\\tourItemDetails\\tourItemDetails\\TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/TourItemDetail" */))
const _305b6a12 = () => interopDefault(import('..\\pages\\tourItemDetails\\tourItemDetails\\components\\CardSliderCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/CardSliderCom" */))
const _51635e54 = () => interopDefault(import('..\\pages\\tourItemDetails\\tourItemDetails\\components\\ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/ImgGalleryCom" */))
const _2e5f8c0e = () => interopDefault(import('..\\pages\\tourItemDetails\\tourItemDetails\\components\\KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/KakaoMapApiCom" */))
const _ff792118 = () => interopDefault(import('..\\pages\\tourItemDetails\\tourItemDetails\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/ReviewsCom" */))
const _04e40d8a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6b9c1f4a,
    name: "CheckId"
  }, {
    path: "/CheckPayment",
    component: _4e765714,
    name: "CheckPayment"
  }, {
    path: "/CheckPwd",
    component: _119c0e2d,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _38f8a5f8,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _4e71fb68,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _54ad8b48,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _0f62bca1,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _74943c7c,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _47dabd08,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _39f5ee06,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _e109ce60,
    name: "SignUp"
  }, {
    path: "/board/Detail",
    component: _13e9530f,
    name: "board-Detail"
  }, {
    path: "/board/List",
    component: _33fcee5c,
    name: "board-List"
  }, {
    path: "/inform/Detail",
    component: _4f54f65c,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _7a40b4df,
    name: "inform-List"
  }, {
    path: "/ItemList/ItemList",
    component: _11281ccc,
    name: "ItemList-ItemList"
  }, {
    path: "/payment/Payment",
    component: _34caf2d0,
    name: "payment-Payment"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _37bdb668,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _65e215cb,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/CardSliderCom",
    component: _c16877ca,
    name: "tourItemDetails-components-CardSliderCom"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _7f588f46,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _c50b19b6,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _4a237a0b,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/TourItemDetail",
    component: _ff82f798,
    name: "tourItemDetails-tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/CardSliderCom",
    component: _305b6a12,
    name: "tourItemDetails-tourItemDetails-components-CardSliderCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/ImgGalleryCom",
    component: _51635e54,
    name: "tourItemDetails-tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/KakaoMapApiCom",
    component: _2e5f8c0e,
    name: "tourItemDetails-tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/ReviewsCom",
    component: _ff792118,
    name: "tourItemDetails-tourItemDetails-components-ReviewsCom"
  }, {
    path: "/",
    component: _04e40d8a,
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
