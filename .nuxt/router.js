import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f3bfcc36 = () => interopDefault(import('..\\pages\\CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _650cf994 = () => interopDefault(import('..\\pages\\http-common.js' /* webpackChunkName: "pages/http-common" */))
const _6ab42612 = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _5bb8fa35 = () => interopDefault(import('..\\pages\\MapExample.vue' /* webpackChunkName: "pages/MapExample" */))
const _0f145d60 = () => interopDefault(import('..\\pages\\mypage\\index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _a23c99a6 = () => interopDefault(import('..\\pages\\Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _df3f6328 = () => interopDefault(import('..\\pages\\SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _b8a3cbba = () => interopDefault(import('..\\pages\\SignUp\\index.vue' /* webpackChunkName: "pages/SignUp/index" */))
const _530881e6 = () => interopDefault(import('..\\pages\\board\\List.vue' /* webpackChunkName: "pages/board/List" */))
const _1e80fa00 = () => interopDefault(import('..\\pages\\board\\Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _1b532f8a = () => interopDefault(import('..\\pages\\find\\id.vue' /* webpackChunkName: "pages/find/id" */))
const _78d7f658 = () => interopDefault(import('..\\pages\\find\\id\\Complete.vue' /* webpackChunkName: "pages/find/id/Complete" */))
const _4e04afbb = () => interopDefault(import('..\\pages\\find\\password.vue' /* webpackChunkName: "pages/find/password" */))
const _84a22758 = () => interopDefault(import('..\\pages\\find\\password\\Complete.vue' /* webpackChunkName: "pages/find/password/Complete" */))
const _c815aafe = () => interopDefault(import('..\\pages\\inform\\Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _279bfa4e = () => interopDefault(import('..\\pages\\inform\\List.vue' /* webpackChunkName: "pages/inform/List" */))
const _e6074d8e = () => interopDefault(import('..\\pages\\Items\\Details\\index.vue' /* webpackChunkName: "pages/Items/Details/index" */))
const _7344b172 = () => interopDefault(import('..\\pages\\Items\\List.vue' /* webpackChunkName: "pages/Items/List" */))
const _49dfe476 = () => interopDefault(import('..\\pages\\service\\ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _bebd177a = () => interopDefault(import('..\\pages\\service\\ItemListDataService.js' /* webpackChunkName: "pages/service/ItemListDataService" */))
const _fb0a72ec = () => interopDefault(import('..\\pages\\service\\ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _a503c94c = () => interopDefault(import('..\\pages\\service\\ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _ce363186 = () => interopDefault(import('..\\pages\\service\\UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _039f4d97 = () => interopDefault(import('..\\pages\\shoppingCart\\ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _fbf495d0 = () => interopDefault(import('..\\pages\\SignUp\\Complete.vue' /* webpackChunkName: "pages/SignUp/Complete" */))
const _c4ca9dbe = () => interopDefault(import('..\\pages\\Items\\Details\\components\\CardSliderCom.vue' /* webpackChunkName: "pages/Items/Details/components/CardSliderCom" */))
const _82bab53a = () => interopDefault(import('..\\pages\\Items\\Details\\components\\ImgGalleryCom.vue' /* webpackChunkName: "pages/Items/Details/components/ImgGalleryCom" */))
const _690926df = () => interopDefault(import('..\\pages\\Items\\Details\\components\\KakaoMapApiCom.vue' /* webpackChunkName: "pages/Items/Details/components/KakaoMapApiCom" */))
const _9575ca76 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/Items/Details/components/ReviewsCom" */))
const _149ebe32 = () => interopDefault(import('..\\pages\\board\\detail\\update\\_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _fc276844 = () => interopDefault(import('..\\pages\\board\\detail\\_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _6a0b7ce7 = () => interopDefault(import('..\\pages\\Items\\Details\\_idx.vue' /* webpackChunkName: "pages/Items/Details/_idx" */))
const _003fe0e2 = () => interopDefault(import('..\\pages\\payment\\_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _603576fb = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _f3bfcc36,
    name: "CheckPayment"
  }, {
    path: "/http-common",
    component: _650cf994,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _6ab42612,
    name: "LogIn"
  }, {
    path: "/MapExample",
    component: _5bb8fa35,
    name: "MapExample"
  }, {
    path: "/mypage",
    component: _0f145d60,
    name: "mypage"
  }, {
    path: "/Qna",
    component: _a23c99a6,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _df3f6328,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _b8a3cbba,
    name: "SignUp"
  }, {
    path: "/board/List",
    component: _530881e6,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _1e80fa00,
    name: "board-Write"
  }, {
    path: "/find/id",
    component: _1b532f8a,
    name: "find-id",
    children: [{
      path: "Complete",
      component: _78d7f658,
      name: "find-id-Complete"
    }]
  }, {
    path: "/find/password",
    component: _4e04afbb,
    name: "find-password",
    children: [{
      path: "Complete",
      component: _84a22758,
      name: "find-password-Complete"
    }]
  }, {
    path: "/inform/Detail",
    component: _c815aafe,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _279bfa4e,
    name: "inform-List"
  }, {
    path: "/Items/Details",
    component: _e6074d8e,
    name: "Items-Details"
  }, {
    path: "/Items/List",
    component: _7344b172,
    name: "Items-List"
  }, {
    path: "/service/ItemDetailDataService",
    component: _49dfe476,
    name: "service-ItemDetailDataService"
  }, {
    path: "/service/ItemListDataService",
    component: _bebd177a,
    name: "service-ItemListDataService"
  }, {
    path: "/service/ReviewDataService",
    component: _fb0a72ec,
    name: "service-ReviewDataService"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _a503c94c,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UserDataService",
    component: _ce363186,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _039f4d97,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/SignUp/Complete",
    component: _fbf495d0,
    name: "SignUp-Complete"
  }, {
    path: "/Items/Details/components/CardSliderCom",
    component: _c4ca9dbe,
    name: "Items-Details-components-CardSliderCom"
  }, {
    path: "/Items/Details/components/ImgGalleryCom",
    component: _82bab53a,
    name: "Items-Details-components-ImgGalleryCom"
  }, {
    path: "/Items/Details/components/KakaoMapApiCom",
    component: _690926df,
    name: "Items-Details-components-KakaoMapApiCom"
  }, {
    path: "/Items/Details/components/ReviewsCom",
    component: _9575ca76,
    name: "Items-Details-components-ReviewsCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _149ebe32,
    name: "board-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _fc276844,
    name: "board-detail-idx"
  }, {
    path: "/Items/Details/:idx",
    component: _6a0b7ce7,
    name: "Items-Details-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _003fe0e2,
    name: "payment-userIdx"
  }, {
    path: "/",
    component: _603576fb,
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
