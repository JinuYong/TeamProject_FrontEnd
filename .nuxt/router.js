import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e16fb46c = () => interopDefault(import('../pages/CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _009ca732 = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _2166f2c4 = () => interopDefault(import('../pages/CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _74088be7 = () => interopDefault(import('../pages/CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _086ce2fd = () => interopDefault(import('../pages/FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _ca81206a = () => interopDefault(import('../pages/FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _03f1ce38 = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _93d4fc60 = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _c8fdd726 = () => interopDefault(import('../pages/MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _2dc2e66b = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _09f1e0ee = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _81be0cfe = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _edb213ba = () => interopDefault(import('../pages/board/Detail.vue' /* webpackChunkName: "pages/board/Detail" */))
const _08b04670 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _c9c56384 = () => interopDefault(import('../pages/inform/Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _3df82d6a = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _01839594 = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _718bf902 = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _74e9c462 = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _21290694 = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _418e2846 = () => interopDefault(import('../pages/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _c527b4d0 = () => interopDefault(import('../pages/tourItemDetails/components/CardSliderCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/CardSliderCom" */))
const _8317cc4c = () => interopDefault(import('../pages/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _63664148 = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _2819d1ae = () => interopDefault(import('../pages/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _1741e0b5 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/TourItemDetail" */))
const _06caec70 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/CardSliderCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/CardSliderCom" */))
const _27d2e0b2 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/ImgGalleryCom" */))
const _25e05570 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/KakaoMapApiCom" */))
const _c8578c54 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/ReviewsCom" */))
const _0dd33485 = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _a8d25a8e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e16fb46c,
    name: "CheckId"
  }, {
    path: "/CheckPayment",
    component: _009ca732,
    name: "CheckPayment"
  }, {
    path: "/CheckPwd",
    component: _2166f2c4,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _74088be7,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _086ce2fd,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _ca81206a,
    name: "FindPwd"
  }, {
    path: "/http-common",
    component: _03f1ce38,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _93d4fc60,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _c8fdd726,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _2dc2e66b,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _09f1e0ee,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _81be0cfe,
    name: "SignUp"
  }, {
    path: "/board/Detail",
    component: _edb213ba,
    name: "board-Detail"
  }, {
    path: "/board/List",
    component: _08b04670,
    name: "board-List"
  }, {
    path: "/inform/Detail",
    component: _c9c56384,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _3df82d6a,
    name: "inform-List"
  }, {
    path: "/ItemList/ItemList",
    component: _01839594,
    name: "ItemList-ItemList"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _718bf902,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UserDataService",
    component: _74e9c462,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _21290694,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _418e2846,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/CardSliderCom",
    component: _c527b4d0,
    name: "tourItemDetails-components-CardSliderCom"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _8317cc4c,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _63664148,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _2819d1ae,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/TourItemDetail",
    component: _1741e0b5,
    name: "tourItemDetails-tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/CardSliderCom",
    component: _06caec70,
    name: "tourItemDetails-tourItemDetails-components-CardSliderCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/ImgGalleryCom",
    component: _27d2e0b2,
    name: "tourItemDetails-tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/KakaoMapApiCom",
    component: _25e05570,
    name: "tourItemDetails-tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/ReviewsCom",
    component: _c8578c54,
    name: "tourItemDetails-tourItemDetails-components-ReviewsCom"
  }, {
    path: "/payment/:userIdx?",
    component: _0dd33485,
    name: "payment-userIdx"
  }, {
    path: "/",
    component: _a8d25a8e,
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
