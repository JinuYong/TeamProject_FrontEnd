import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _661f0786 = () => interopDefault(import('..\\pages\\CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _09e96517 = () => interopDefault(import('..\\pages\\http-common.js' /* webpackChunkName: "pages/http-common" */))
const _0a24db91 = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _cfae47d4 = () => interopDefault(import('..\\pages\\MapExample.vue' /* webpackChunkName: "pages/MapExample" */))
const _2ef323df = () => interopDefault(import('..\\pages\\mypage\\index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _6ca08728 = () => interopDefault(import('..\\pages\\Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _705f3c0d = () => interopDefault(import('..\\pages\\SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _78e63ebc = () => interopDefault(import('..\\pages\\SignUp\\index.vue' /* webpackChunkName: "pages/SignUp/index" */))
const _2808194c = () => interopDefault(import('..\\pages\\board\\List.vue' /* webpackChunkName: "pages/board/List" */))
const _5e831ebe = () => interopDefault(import('..\\pages\\board\\Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _2f674e5c = () => interopDefault(import('..\\pages\\find\\id.vue' /* webpackChunkName: "pages/find/id" */))
const _d28f1496 = () => interopDefault(import('..\\pages\\find\\id\\Complete.vue' /* webpackChunkName: "pages/find/id/Complete" */))
const _29feb91c = () => interopDefault(import('..\\pages\\find\\password.vue' /* webpackChunkName: "pages/find/password" */))
const _43cd1f16 = () => interopDefault(import('..\\pages\\find\\password\\Complete.vue' /* webpackChunkName: "pages/find/password/Complete" */))
const _77ef33e2 = () => interopDefault(import('..\\pages\\inform\\Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _079ae7ef = () => interopDefault(import('..\\pages\\inform\\List.vue' /* webpackChunkName: "pages/inform/List" */))
const _6aa830b8 = () => interopDefault(import('..\\pages\\Items\\Details\\index.vue' /* webpackChunkName: "pages/Items/Details/index" */))
const _17ea0186 = () => interopDefault(import('..\\pages\\Items\\List.vue' /* webpackChunkName: "pages/Items/List" */))
const _53b7ccf5 = () => interopDefault(import('..\\pages\\service\\ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _27f11efc = () => interopDefault(import('..\\pages\\service\\ItemListDataService.js' /* webpackChunkName: "pages/service/ItemListDataService" */))
const _6f60c689 = () => interopDefault(import('..\\pages\\service\\ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _be043fce = () => interopDefault(import('..\\pages\\service\\ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _8a0e4a08 = () => interopDefault(import('..\\pages\\service\\UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _990d6510 = () => interopDefault(import('..\\pages\\shoppingCart\\ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _47a2ea39 = () => interopDefault(import('..\\pages\\SignUp\\Complete.vue' /* webpackChunkName: "pages/SignUp/Complete" */))
const _a45259c0 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\CardSliderCom.vue' /* webpackChunkName: "pages/Items/Details/components/CardSliderCom" */))
const _6242713c = () => interopDefault(import('..\\pages\\Items\\Details\\components\\ImgGalleryCom.vue' /* webpackChunkName: "pages/Items/Details/components/ImgGalleryCom" */))
const _605144c0 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\KakaoMapApiCom.vue' /* webpackChunkName: "pages/Items/Details/components/KakaoMapApiCom" */))
const _e77d5db4 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/Items/Details/components/ReviewsCom" */))
const _41169d26 = () => interopDefault(import('..\\pages\\board\\detail\\update\\_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _1355f71d = () => interopDefault(import('..\\pages\\board\\detail\\_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _05d73988 = () => interopDefault(import('..\\pages\\Items\\Details\\_idx.vue' /* webpackChunkName: "pages/Items/Details/_idx" */))
const _236d603e = () => interopDefault(import('..\\pages\\payment\\_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _00b3a70c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _661f0786,
    name: "CheckPayment"
  }, {
    path: "/http-common",
    component: _09e96517,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _0a24db91,
    name: "LogIn"
  }, {
    path: "/MapExample",
    component: _cfae47d4,
    name: "MapExample"
  }, {
    path: "/mypage",
    component: _2ef323df,
    name: "mypage"
  }, {
    path: "/Qna",
    component: _6ca08728,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _705f3c0d,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _78e63ebc,
    name: "SignUp"
  }, {
    path: "/board/List",
    component: _2808194c,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _5e831ebe,
    name: "board-Write"
  }, {
    path: "/find/id",
    component: _2f674e5c,
    name: "find-id",
    children: [{
      path: "Complete",
      component: _d28f1496,
      name: "find-id-Complete"
    }]
  }, {
    path: "/find/password",
    component: _29feb91c,
    name: "find-password",
    children: [{
      path: "Complete",
      component: _43cd1f16,
      name: "find-password-Complete"
    }]
  }, {
    path: "/inform/Detail",
    component: _77ef33e2,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _079ae7ef,
    name: "inform-List"
  }, {
    path: "/Items/Details",
    component: _6aa830b8,
    name: "Items-Details"
  }, {
    path: "/Items/List",
    component: _17ea0186,
    name: "Items-List"
  }, {
    path: "/service/ItemDetailDataService",
    component: _53b7ccf5,
    name: "service-ItemDetailDataService"
  }, {
    path: "/service/ItemListDataService",
    component: _27f11efc,
    name: "service-ItemListDataService"
  }, {
    path: "/service/ReviewDataService",
    component: _6f60c689,
    name: "service-ReviewDataService"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _be043fce,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UserDataService",
    component: _8a0e4a08,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _990d6510,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/SignUp/Complete",
    component: _47a2ea39,
    name: "SignUp-Complete"
  }, {
    path: "/Items/Details/components/CardSliderCom",
    component: _a45259c0,
    name: "Items-Details-components-CardSliderCom"
  }, {
    path: "/Items/Details/components/ImgGalleryCom",
    component: _6242713c,
    name: "Items-Details-components-ImgGalleryCom"
  }, {
    path: "/Items/Details/components/KakaoMapApiCom",
    component: _605144c0,
    name: "Items-Details-components-KakaoMapApiCom"
  }, {
    path: "/Items/Details/components/ReviewsCom",
    component: _e77d5db4,
    name: "Items-Details-components-ReviewsCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _41169d26,
    name: "board-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _1355f71d,
    name: "board-detail-idx"
  }, {
    path: "/Items/Details/:idx",
    component: _05d73988,
    name: "Items-Details-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _236d603e,
    name: "payment-userIdx"
  }, {
    path: "/",
    component: _00b3a70c,
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
