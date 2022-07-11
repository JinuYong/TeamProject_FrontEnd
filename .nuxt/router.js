import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c517345 = () => interopDefault(import('../pages/CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _075493cc = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _b9262efa = () => interopDefault(import('../pages/CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _0f2eb83c = () => interopDefault(import('../pages/CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _20967a22 = () => interopDefault(import('../pages/FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _f06e8574 = () => interopDefault(import('../pages/FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _31814add = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _2a79f20b = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _b9b8085c = () => interopDefault(import('../pages/MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _676c2966 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _1194c853 = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _516adeb4 = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _de6c44f0 = () => interopDefault(import('../pages/board/Detail.vue' /* webpackChunkName: "pages/board/Detail" */))
const _363fc315 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _f051590e = () => interopDefault(import('../pages/inform/Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _65640146 = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _48ad24f1 = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _666c88b8 = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _14db1cf2 = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _1c788171 = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _366eb7fc = () => interopDefault(import('../pages/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _21c3b37d = () => interopDefault(import('../pages/tourItemDetails/components/CardSliderCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/CardSliderCom" */))
const _42cba7bf = () => interopDefault(import('../pages/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _6a007003 = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _6f7695e9 = () => interopDefault(import('../pages/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _4222a24c = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/TourItemDetail" */))
const _9747df56 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/CardSliderCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/CardSliderCom" */))
const _5537f6d2 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/ImgGalleryCom" */))
const _2a73ae2b = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/KakaoMapApiCom" */))
const _504f2811 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/ReviewsCom" */))
const _3139e16a = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _1ffb42f4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7c517345,
    name: "CheckId"
  }, {
    path: "/CheckPayment",
    component: _075493cc,
    name: "CheckPayment"
  }, {
    path: "/CheckPwd",
    component: _b9262efa,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _0f2eb83c,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _20967a22,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _f06e8574,
    name: "FindPwd"
  }, {
    path: "/http-common",
    component: _31814add,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _2a79f20b,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _b9b8085c,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _676c2966,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _1194c853,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _516adeb4,
    name: "SignUp"
  }, {
    path: "/board/Detail",
    component: _de6c44f0,
    name: "board-Detail"
  }, {
    path: "/board/List",
    component: _363fc315,
    name: "board-List"
  }, {
    path: "/inform/Detail",
    component: _f051590e,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _65640146,
    name: "inform-List"
  }, {
    path: "/ItemList/ItemList",
    component: _48ad24f1,
    name: "ItemList-ItemList"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _666c88b8,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UserDataService",
    component: _14db1cf2,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _1c788171,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _366eb7fc,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/CardSliderCom",
    component: _21c3b37d,
    name: "tourItemDetails-components-CardSliderCom"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _42cba7bf,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _6a007003,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _6f7695e9,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/TourItemDetail",
    component: _4222a24c,
    name: "tourItemDetails-tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/CardSliderCom",
    component: _9747df56,
    name: "tourItemDetails-tourItemDetails-components-CardSliderCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/ImgGalleryCom",
    component: _5537f6d2,
    name: "tourItemDetails-tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/KakaoMapApiCom",
    component: _2a73ae2b,
    name: "tourItemDetails-tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/ReviewsCom",
    component: _504f2811,
    name: "tourItemDetails-tourItemDetails-components-ReviewsCom"
  }, {
    path: "/payment/:userIdx?",
    component: _3139e16a,
    name: "payment-userIdx"
  }, {
    path: "/",
    component: _1ffb42f4,
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
