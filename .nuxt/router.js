import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4d0c81ea = () => interopDefault(import('../pages/CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _1efa9874 = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _2963d506 = () => interopDefault(import('../pages/CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _a54cc6b0 = () => interopDefault(import('../pages/CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _e21ac4c8 = () => interopDefault(import('../pages/FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _361dede8 = () => interopDefault(import('../pages/FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _05cb2157 = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _7aa3115e = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _e75bc868 = () => interopDefault(import('../pages/MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _09256fa8 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _0a7a2f66 = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _45a6b420 = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _79f7fd82 = () => interopDefault(import('../pages/board/Detail.vue' /* webpackChunkName: "pages/board/Detail" */))
const _0a89998f = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _77259a82 = () => interopDefault(import('../pages/inform/Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _1a54fa0c = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _7d15f137 = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _fe9cddc4 = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _53873dfe = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _7c0ba7b7 = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _ce9f0d08 = () => interopDefault(import('../pages/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _c2bb0f12 = () => interopDefault(import('../pages/tourItemDetails/components/CardSliderCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/CardSliderCom" */))
const _80ab268e = () => interopDefault(import('../pages/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _ee0b6b6e = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _9556f9a2 = () => interopDefault(import('../pages/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _a8ff5f58 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/TourItemDetail" */))
const _edd4bd62 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/CardSliderCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/CardSliderCom" */))
const _abc4d4de = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/ImgGalleryCom" */))
const _2627871e = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/KakaoMapApiCom" */))
const _e5b46d52 = () => interopDefault(import('../pages/tourItemDetails/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/tourItemDetails/components/ReviewsCom" */))
const _d3f91738 = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _8fa06f8c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4d0c81ea,
    name: "CheckId"
  }, {
    path: "/CheckPayment",
    component: _1efa9874,
    name: "CheckPayment"
  }, {
    path: "/CheckPwd",
    component: _2963d506,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _a54cc6b0,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _e21ac4c8,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _361dede8,
    name: "FindPwd"
  }, {
    path: "/http-common",
    component: _05cb2157,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _7aa3115e,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _e75bc868,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _09256fa8,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _0a7a2f66,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _45a6b420,
    name: "SignUp"
  }, {
    path: "/board/Detail",
    component: _79f7fd82,
    name: "board-Detail"
  }, {
    path: "/board/List",
    component: _0a89998f,
    name: "board-List"
  }, {
    path: "/inform/Detail",
    component: _77259a82,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _1a54fa0c,
    name: "inform-List"
  }, {
    path: "/ItemList/ItemList",
    component: _7d15f137,
    name: "ItemList-ItemList"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _fe9cddc4,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UserDataService",
    component: _53873dfe,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _7c0ba7b7,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _ce9f0d08,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/CardSliderCom",
    component: _c2bb0f12,
    name: "tourItemDetails-components-CardSliderCom"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _80ab268e,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _ee0b6b6e,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _9556f9a2,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/TourItemDetail",
    component: _a8ff5f58,
    name: "tourItemDetails-tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/CardSliderCom",
    component: _edd4bd62,
    name: "tourItemDetails-tourItemDetails-components-CardSliderCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/ImgGalleryCom",
    component: _abc4d4de,
    name: "tourItemDetails-tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/KakaoMapApiCom",
    component: _2627871e,
    name: "tourItemDetails-tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/tourItemDetails/components/ReviewsCom",
    component: _e5b46d52,
    name: "tourItemDetails-tourItemDetails-components-ReviewsCom"
  }, {
    path: "/payment/:userIdx?",
    component: _d3f91738,
    name: "payment-userIdx"
  }, {
    path: "/",
    component: _8fa06f8c,
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
