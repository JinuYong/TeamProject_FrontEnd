import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e765714 = () => interopDefault(import('..\\pages\\CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _5f04a3f2 = () => interopDefault(import('..\\pages\\http-common.js' /* webpackChunkName: "pages/http-common" */))
const _0f62bca1 = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _5ebd2506 = () => interopDefault(import('..\\pages\\MapExample.vue' /* webpackChunkName: "pages/MapExample" */))
const _1106f4ef = () => interopDefault(import('..\\pages\\mypage\\index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _47dabd08 = () => interopDefault(import('..\\pages\\Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _39f5ee06 = () => interopDefault(import('..\\pages\\SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _b4be9c9c = () => interopDefault(import('..\\pages\\SignUp\\index.vue' /* webpackChunkName: "pages/SignUp/index" */))
const _33fcee5c = () => interopDefault(import('..\\pages\\board\\List.vue' /* webpackChunkName: "pages/board/List" */))
const _43643d91 = () => interopDefault(import('..\\pages\\board\\Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _2b59134c = () => interopDefault(import('..\\pages\\find\\id.vue' /* webpackChunkName: "pages/find/id" */))
const _6ea662b6 = () => interopDefault(import('..\\pages\\find\\id\\Complete.vue' /* webpackChunkName: "pages/find/id/Complete" */))
const _eb35ebe8 = () => interopDefault(import('..\\pages\\find\\password.vue' /* webpackChunkName: "pages/find/password" */))
const _f5795536 = () => interopDefault(import('..\\pages\\find\\password\\Complete.vue' /* webpackChunkName: "pages/find/password/Complete" */))
const _4f54f65c = () => interopDefault(import('..\\pages\\inform\\Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _7a40b4df = () => interopDefault(import('..\\pages\\inform\\List.vue' /* webpackChunkName: "pages/inform/List" */))
const _a6bc1c70 = () => interopDefault(import('..\\pages\\Items\\Details\\index.vue' /* webpackChunkName: "pages/Items/Details/index" */))
const _23ded696 = () => interopDefault(import('..\\pages\\Items\\List.vue' /* webpackChunkName: "pages/Items/List" */))
const _68a77e05 = () => interopDefault(import('..\\pages\\service\\ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _1f5fb4dc = () => interopDefault(import('..\\pages\\service\\ItemListDataService.js' /* webpackChunkName: "pages/service/ItemListDataService" */))
const _a51900ce = () => interopDefault(import('..\\pages\\service\\ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _38c58d29 = () => interopDefault(import('..\\pages\\service\\ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _6586980c = () => interopDefault(import('..\\pages\\service\\UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _37bdb668 = () => interopDefault(import('..\\pages\\shoppingCart\\ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _27b8bf29 = () => interopDefault(import('..\\pages\\SignUp\\Complete.vue' /* webpackChunkName: "pages/SignUp/Complete" */))
const _53f56c30 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\CardSliderCom.vue' /* webpackChunkName: "pages/Items/Details/components/CardSliderCom" */))
const _74fd6072 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\ImgGalleryCom.vue' /* webpackChunkName: "pages/Items/Details/components/ImgGalleryCom" */))
const _7e05cdb0 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\KakaoMapApiCom.vue' /* webpackChunkName: "pages/Items/Details/components/KakaoMapApiCom" */))
const _c0005bd4 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/Items/Details/components/ReviewsCom" */))
const _455f5236 = () => interopDefault(import('..\\pages\\board\\detail\\update\\_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _1fecbc2d = () => interopDefault(import('..\\pages\\board\\detail\\_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _e7cdd310 = () => interopDefault(import('..\\pages\\Items\\Details\\_idx.vue' /* webpackChunkName: "pages/Items/Details/_idx" */))
const _10ee18f1 = () => interopDefault(import('..\\pages\\payment\\_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
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
    path: "/CheckPayment",
    component: _4e765714,
    name: "CheckPayment"
  }, {
    path: "/http-common",
    component: _5f04a3f2,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _0f62bca1,
    name: "LogIn"
  }, {
    path: "/MapExample",
    component: _5ebd2506,
    name: "MapExample"
  }, {
    path: "/mypage",
    component: _1106f4ef,
    name: "mypage"
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
    component: _b4be9c9c,
    name: "SignUp"
  }, {
    path: "/board/List",
    component: _33fcee5c,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _43643d91,
    name: "board-Write"
  }, {
    path: "/find/id",
    component: _2b59134c,
    name: "find-id",
    children: [{
      path: "Complete",
      component: _6ea662b6,
      name: "find-id-Complete"
    }]
  }, {
    path: "/find/password",
    component: _eb35ebe8,
    name: "find-password",
    children: [{
      path: "Complete",
      component: _f5795536,
      name: "find-password-Complete"
    }]
  }, {
    path: "/inform/Detail",
    component: _4f54f65c,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _7a40b4df,
    name: "inform-List"
  }, {
    path: "/Items/Details",
    component: _a6bc1c70,
    name: "Items-Details"
  }, {
    path: "/Items/List",
    component: _23ded696,
    name: "Items-List"
  }, {
    path: "/service/ItemDetailDataService",
    component: _68a77e05,
    name: "service-ItemDetailDataService"
  }, {
    path: "/service/ItemListDataService",
    component: _1f5fb4dc,
    name: "service-ItemListDataService"
  }, {
    path: "/service/ReviewDataService",
    component: _a51900ce,
    name: "service-ReviewDataService"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _38c58d29,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UserDataService",
    component: _6586980c,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _37bdb668,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/SignUp/Complete",
    component: _27b8bf29,
    name: "SignUp-Complete"
  }, {
    path: "/Items/Details/components/CardSliderCom",
    component: _53f56c30,
    name: "Items-Details-components-CardSliderCom"
  }, {
    path: "/Items/Details/components/ImgGalleryCom",
    component: _74fd6072,
    name: "Items-Details-components-ImgGalleryCom"
  }, {
    path: "/Items/Details/components/KakaoMapApiCom",
    component: _7e05cdb0,
    name: "Items-Details-components-KakaoMapApiCom"
  }, {
    path: "/Items/Details/components/ReviewsCom",
    component: _c0005bd4,
    name: "Items-Details-components-ReviewsCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _455f5236,
    name: "board-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _1fecbc2d,
    name: "board-detail-idx"
  }, {
    path: "/Items/Details/:idx",
    component: _e7cdd310,
    name: "Items-Details-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _10ee18f1,
    name: "payment-userIdx"
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
