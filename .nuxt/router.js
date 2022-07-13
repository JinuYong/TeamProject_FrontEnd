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
const _363fc315 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _ed080010 = () => interopDefault(import('../pages/board/Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _f051590e = () => interopDefault(import('../pages/inform/Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _65640146 = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _48ad24f1 = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _174b0f40 = () => interopDefault(import('../pages/service/ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _69eee654 = () => interopDefault(import('../pages/service/ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _666c88b8 = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _14db1cf2 = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _1c788171 = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _21c3b37d = () => interopDefault(import('../pages/tourItemDetails/components/CardSliderCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/CardSliderCom" */))
const _42cba7bf = () => interopDefault(import('../pages/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _6a007003 = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _6f7695e9 = () => interopDefault(import('../pages/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _69e696dd = () => interopDefault(import('../pages/board/detail/update/_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _ded7c416 = () => interopDefault(import('../pages/board/detail/_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _3139e16a = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _22664eb8 = () => interopDefault(import('../pages/tourItemDetails/_idx.vue' /* webpackChunkName: "pages/tourItemDetails/_idx" */))
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
    path: "/board/List",
    component: _363fc315,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _ed080010,
    name: "board-Write"
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
    path: "/service/ItemDetailDataService",
    component: _174b0f40,
    name: "service-ItemDetailDataService"
  }, {
    path: "/service/ReviewDataService",
    component: _69eee654,
    name: "service-ReviewDataService"
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
    path: "/board/detail/update/:idx?",
    component: _69e696dd,
    name: "board-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _ded7c416,
    name: "board-detail-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _3139e16a,
    name: "payment-userIdx"
  }, {
    path: "/tourItemDetails/:idx?",
    component: _22664eb8,
    name: "tourItemDetails-idx"
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
