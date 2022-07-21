import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e4edef6c = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _4c6e0464 = () => interopDefault(import('../pages/file-http-common.js' /* webpackChunkName: "pages/file-http-common" */))
const _72a4c6db = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _68fc6f4d = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _00e43dda = () => interopDefault(import('../pages/MapExample.vue' /* webpackChunkName: "pages/MapExample" */))
const _c0804f6c = () => interopDefault(import('../pages/mypage/index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _1b910f28 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _d06d865e = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _2069f727 = () => interopDefault(import('../pages/SignUp/index.vue' /* webpackChunkName: "pages/SignUp/index" */))
const _77633f13 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _6cc803ba = () => interopDefault(import('../pages/board/Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _3ab463d6 = () => interopDefault(import('../pages/find/id.vue' /* webpackChunkName: "pages/find/id" */))
const _5073a643 = () => interopDefault(import('../pages/find/id/Complete.vue' /* webpackChunkName: "pages/find/id/Complete" */))
const _6882ca15 = () => interopDefault(import('../pages/find/password.vue' /* webpackChunkName: "pages/find/password" */))
const _251bab7a = () => interopDefault(import('../pages/find/password/Complete.vue' /* webpackChunkName: "pages/find/password/Complete" */))
const _48b00508 = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _75d80736 = () => interopDefault(import('../pages/inform/Write.vue' /* webpackChunkName: "pages/inform/Write" */))
const _684dea4c = () => interopDefault(import('../pages/Items/Details/index.vue' /* webpackChunkName: "pages/Items/Details/index" */))
const _d03330ce = () => interopDefault(import('../pages/Items/List.vue' /* webpackChunkName: "pages/Items/List" */))
const _29a91830 = () => interopDefault(import('../pages/service/IndexDataService.js' /* webpackChunkName: "pages/service/IndexDataService" */))
const _61b2c7be = () => interopDefault(import('../pages/service/ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _8636ecea = () => interopDefault(import('../pages/service/ItemListDataService.js' /* webpackChunkName: "pages/service/ItemListDataService" */))
const _05928dd2 = () => interopDefault(import('../pages/service/ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _1c254ca2 = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _6f1b36ec = () => interopDefault(import('../pages/service/UploadFilesService.js' /* webpackChunkName: "pages/service/UploadFilesService" */))
const _3455e085 = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _156c6c9a = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _283aecd8 = () => interopDefault(import('../pages/SignUp/Complete.vue' /* webpackChunkName: "pages/SignUp/Complete" */))
const _8846d986 = () => interopDefault(import('../pages/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _130cf445 = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _ae17ce02 = () => interopDefault(import('../pages/Items/Details/components/CardSliderCom.vue' /* webpackChunkName: "pages/Items/Details/components/CardSliderCom" */))
const _6c07e57e = () => interopDefault(import('../pages/Items/Details/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/Items/Details/components/ImgGalleryCom" */))
const _6e468a7e = () => interopDefault(import('../pages/Items/Details/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/Items/Details/components/KakaoMapApiCom" */))
const _3331efa7 = () => interopDefault(import('../pages/Items/Details/components/ReviewsCom.vue' /* webpackChunkName: "pages/Items/Details/components/ReviewsCom" */))
const _058a3e5b = () => interopDefault(import('../pages/board/detail/update/_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _7996f390 = () => interopDefault(import('../pages/inform/detail/update/_idx.vue' /* webpackChunkName: "pages/inform/detail/update/_idx" */))
const _d7ea6f92 = () => interopDefault(import('../pages/board/detail/_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _b17356bc = () => interopDefault(import('../pages/inform/detail/_idx.vue' /* webpackChunkName: "pages/inform/detail/_idx" */))
const _301cd9b4 = () => interopDefault(import('../pages/Items/Details/_idx.vue' /* webpackChunkName: "pages/Items/Details/_idx" */))
const _31f83230 = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _060821bc = () => interopDefault(import('../pages/tourItemDetails/_idx.vue' /* webpackChunkName: "pages/tourItemDetails/_idx" */))
const _5e7dc036 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CheckPayment",
    component: _e4edef6c,
    name: "CheckPayment"
  }, {
    path: "/file-http-common",
    component: _4c6e0464,
    name: "file-http-common"
  }, {
    path: "/http-common",
    component: _72a4c6db,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _68fc6f4d,
    name: "LogIn"
  }, {
    path: "/MapExample",
    component: _00e43dda,
    name: "MapExample"
  }, {
    path: "/mypage",
    component: _c0804f6c,
    name: "mypage"
  }, {
    path: "/Qna",
    component: _1b910f28,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _d06d865e,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _2069f727,
    name: "SignUp"
  }, {
    path: "/board/List",
    component: _77633f13,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _6cc803ba,
    name: "board-Write"
  }, {
    path: "/find/id",
    component: _3ab463d6,
    name: "find-id",
    children: [{
      path: "Complete",
      component: _5073a643,
      name: "find-id-Complete"
    }]
  }, {
    path: "/find/password",
    component: _6882ca15,
    name: "find-password",
    children: [{
      path: "Complete",
      component: _251bab7a,
      name: "find-password-Complete"
    }]
  }, {
    path: "/inform/List",
    component: _48b00508,
    name: "inform-List"
  }, {
    path: "/inform/Write",
    component: _75d80736,
    name: "inform-Write"
  }, {
    path: "/Items/Details",
    component: _684dea4c,
    name: "Items-Details"
  }, {
    path: "/Items/List",
    component: _d03330ce,
    name: "Items-List"
  }, {
    path: "/service/IndexDataService",
    component: _29a91830,
    name: "service-IndexDataService"
  }, {
    path: "/service/ItemDetailDataService",
    component: _61b2c7be,
    name: "service-ItemDetailDataService"
  }, {
    path: "/service/ItemListDataService",
    component: _8636ecea,
    name: "service-ItemListDataService"
  }, {
    path: "/service/ReviewDataService",
    component: _05928dd2,
    name: "service-ReviewDataService"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _1c254ca2,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UploadFilesService",
    component: _6f1b36ec,
    name: "service-UploadFilesService"
  }, {
    path: "/service/UserDataService",
    component: _3455e085,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _156c6c9a,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/SignUp/Complete",
    component: _283aecd8,
    name: "SignUp-Complete"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _8846d986,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _130cf445,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/Items/Details/components/CardSliderCom",
    component: _ae17ce02,
    name: "Items-Details-components-CardSliderCom"
  }, {
    path: "/Items/Details/components/ImgGalleryCom",
    component: _6c07e57e,
    name: "Items-Details-components-ImgGalleryCom"
  }, {
    path: "/Items/Details/components/KakaoMapApiCom",
    component: _6e468a7e,
    name: "Items-Details-components-KakaoMapApiCom"
  }, {
    path: "/Items/Details/components/ReviewsCom",
    component: _3331efa7,
    name: "Items-Details-components-ReviewsCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _058a3e5b,
    name: "board-detail-update-idx"
  }, {
    path: "/inform/detail/update/:idx?",
    component: _7996f390,
    name: "inform-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _d7ea6f92,
    name: "board-detail-idx"
  }, {
    path: "/inform/detail/:idx?",
    component: _b17356bc,
    name: "inform-detail-idx"
  }, {
    path: "/Items/Details/:idx",
    component: _301cd9b4,
    name: "Items-Details-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _31f83230,
    name: "payment-userIdx"
  }, {
    path: "/tourItemDetails/:idx?",
    component: _060821bc,
    name: "tourItemDetails-idx"
  }, {
    path: "/",
    component: _5e7dc036,
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
