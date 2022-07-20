import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _4e765714 = () => interopDefault(import('..\\pages\\CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _5022b8b8 = () => interopDefault(import('..\\pages\\file-http-common.js' /* webpackChunkName: "pages/file-http-common" */))
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
const _eb35ebe8 = () => interopDefault(import('..\\pages\\find\\password.vue' /* webpackChunkName: "pages/find/password" */))
const _7a40b4df = () => interopDefault(import('..\\pages\\inform\\List.vue' /* webpackChunkName: "pages/inform/List" */))
const _74cd7124 = () => interopDefault(import('..\\pages\\inform\\Write.vue' /* webpackChunkName: "pages/inform/Write" */))
const _a6bc1c70 = () => interopDefault(import('..\\pages\\Items\\Details\\index.vue' /* webpackChunkName: "pages/Items/Details/index" */))
const _23ded696 = () => interopDefault(import('..\\pages\\Items\\List.vue' /* webpackChunkName: "pages/Items/List" */))
const _1e8f5189 = () => interopDefault(import('..\\pages\\service\\IndexDataService.js' /* webpackChunkName: "pages/service/IndexDataService" */))
const _68a77e05 = () => interopDefault(import('..\\pages\\service\\ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _1f5fb4dc = () => interopDefault(import('..\\pages\\service\\ItemListDataService.js' /* webpackChunkName: "pages/service/ItemListDataService" */))
const _a51900ce = () => interopDefault(import('..\\pages\\service\\ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _38c58d29 = () => interopDefault(import('..\\pages\\service\\ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _1cafaba3 = () => interopDefault(import('..\\pages\\service\\UploadFilesService.js' /* webpackChunkName: "pages/service/UploadFilesService" */))
const _6586980c = () => interopDefault(import('..\\pages\\service\\UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _37bdb668 = () => interopDefault(import('..\\pages\\shoppingCart\\ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _27b8bf29 = () => interopDefault(import('..\\pages\\SignUp\\Complete.vue' /* webpackChunkName: "pages/SignUp/Complete" */))
const _7f588f46 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _53f56c30 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\CardSliderCom.vue' /* webpackChunkName: "pages/Items/Details/components/CardSliderCom" */))
const _74fd6072 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\ImgGalleryCom.vue' /* webpackChunkName: "pages/Items/Details/components/ImgGalleryCom" */))
const _c0005bd4 = () => interopDefault(import('..\\pages\\Items\\Details\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/Items/Details/components/ReviewsCom" */))
const _455f5236 = () => interopDefault(import('..\\pages\\board\\detail\\update\\_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _4e43b2b9 = () => interopDefault(import('..\\pages\\inform\\detail\\update\\_idx.vue' /* webpackChunkName: "pages/inform/detail/update/_idx" */))
const _1fecbc2d = () => interopDefault(import('..\\pages\\board\\detail\\_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _400f4fb0 = () => interopDefault(import('..\\pages\\inform\\detail\\_idx.vue' /* webpackChunkName: "pages/inform/detail/_idx" */))
const _e7cdd310 = () => interopDefault(import('..\\pages\\Items\\Details\\_idx.vue' /* webpackChunkName: "pages/Items/Details/_idx" */))
const _10ee18f1 = () => interopDefault(import('..\\pages\\payment\\_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _5c0b41ad = () => interopDefault(import('..\\pages\\tourItemDetails\\_idx.vue' /* webpackChunkName: "pages/tourItemDetails/_idx" */))
const _04e40d8a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
const _093d1120 = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _6f837864 = () => interopDefault(import('../pages/file-http-common.js' /* webpackChunkName: "pages/file-http-common" */))
const _af5de59e = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _18070b37 = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _36908430 = () => interopDefault(import('../pages/MapExample.vue' /* webpackChunkName: "pages/MapExample" */))
const _1b73e120 = () => interopDefault(import('../pages/mypage/index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _75859d92 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _137d45a7 = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _c7c40006 = () => interopDefault(import('../pages/SignUp/index.vue' /* webpackChunkName: "pages/SignUp/index" */))
const _5aebca88 = () => interopDefault(import('../pages/UploadImage.vue' /* webpackChunkName: "pages/UploadImage" */))
const _a5e0f52e = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _26b6efb8 = () => interopDefault(import('../pages/board/Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _0d0dd102 = () => interopDefault(import('../pages/find/id.vue' /* webpackChunkName: "pages/find/id" */))
const _4eab5419 = () => interopDefault(import('../pages/find/id/Complete.vue' /* webpackChunkName: "pages/find/id/Complete" */))
const _634fdbff = () => interopDefault(import('../pages/find/password.vue' /* webpackChunkName: "pages/find/password" */))
const _162cc0ce = () => interopDefault(import('../pages/find/password/Complete.vue' /* webpackChunkName: "pages/find/password/Complete" */))
const _6ee6ed1c = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _40c8053b = () => interopDefault(import('../pages/inform/Write.vue' /* webpackChunkName: "pages/inform/Write" */))
const _5d478544 = () => interopDefault(import('../pages/Items/Details/index.vue' /* webpackChunkName: "pages/Items/Details/index" */))
const _64daa422 = () => interopDefault(import('../pages/Items/List.vue' /* webpackChunkName: "pages/Items/List" */))
const _11204d9a = () => interopDefault(import('../pages/service/IndexDataService.js' /* webpackChunkName: "pages/service/IndexDataService" */))
const _9b5336d8 = () => interopDefault(import('../pages/service/ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _b355383e = () => interopDefault(import('../pages/service/ItemListDataService.js' /* webpackChunkName: "pages/service/ItemListDataService" */))
const _0d0205a8 = () => interopDefault(import('../pages/service/ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _5b55e810 = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _a21c3118 = () => interopDefault(import('../pages/service/UploadFilesService.js' /* webpackChunkName: "pages/service/UploadFilesService" */))
const _3bcd55db = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _486d66c6 = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _67b2c8fe = () => interopDefault(import('../pages/SignUp/Complete.vue' /* webpackChunkName: "pages/SignUp/Complete" */))
const _697d9f13 = () => interopDefault(import('../pages/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _198d632f = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _c41bbb56 = () => interopDefault(import('../pages/Items/Details/components/CardSliderCom.vue' /* webpackChunkName: "pages/Items/Details/components/CardSliderCom" */))
const _820bd2d2 = () => interopDefault(import('../pages/Items/Details/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/Items/Details/components/ImgGalleryCom" */))
const _739fdc2b = () => interopDefault(import('../pages/Items/Details/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/Items/Details/components/KakaoMapApiCom" */))
const _fa7b53de = () => interopDefault(import('../pages/Items/Details/components/ReviewsCom.vue' /* webpackChunkName: "pages/Items/Details/components/ReviewsCom" */))
const _0cf9b631 = () => interopDefault(import('../pages/board/detail/update/_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _6016767a = () => interopDefault(import('../pages/inform/detail/update/_idx.vue' /* webpackChunkName: "pages/inform/detail/update/_idx" */))
const _5cc8d521 = () => interopDefault(import('../pages/board/detail/_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _136c3610 = () => interopDefault(import('../pages/inform/detail/_idx.vue' /* webpackChunkName: "pages/inform/detail/_idx" */))
const _36f5237c = () => interopDefault(import('../pages/Items/Details/_idx.vue' /* webpackChunkName: "pages/Items/Details/_idx" */))
const _3588d684 = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _cd467c10 = () => interopDefault(import('../pages/tourItemDetails/_idx.vue' /* webpackChunkName: "pages/tourItemDetails/_idx" */))
const _0d885c20 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 2b85bc878b34e539a1cafe37341d34aafaa31289

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
    path: "/file-http-common",
    component: _5022b8b8,
    name: "file-http-common"
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
    path: "/UploadImage",
    component: _5aebca88,
    name: "UploadImage"
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
    name: "find-id"
  }, {
    path: "/find/password",
<<<<<<< HEAD
    component: _eb35ebe8,
    name: "find-password"
=======
    component: _634fdbff,
    name: "find-password",
    children: [{
      path: "Complete",
      component: _162cc0ce,
      name: "find-password-Complete"
    }]
>>>>>>> 2b85bc878b34e539a1cafe37341d34aafaa31289
  }, {
    path: "/inform/List",
    component: _7a40b4df,
    name: "inform-List"
  }, {
    path: "/inform/Write",
<<<<<<< HEAD
    component: _74cd7124,
=======
    component: _40c8053b,
>>>>>>> 2b85bc878b34e539a1cafe37341d34aafaa31289
    name: "inform-Write"
  }, {
    path: "/Items/Details",
    component: _a6bc1c70,
    name: "Items-Details"
  }, {
    path: "/Items/List",
    component: _23ded696,
    name: "Items-List"
  }, {
    path: "/service/IndexDataService",
    component: _1e8f5189,
    name: "service-IndexDataService"
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
    path: "/service/UploadFilesService",
    component: _1cafaba3,
    name: "service-UploadFilesService"
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
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _7f588f46,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/Items/Details/components/CardSliderCom",
    component: _53f56c30,
    name: "Items-Details-components-CardSliderCom"
  }, {
    path: "/Items/Details/components/ImgGalleryCom",
    component: _74fd6072,
    name: "Items-Details-components-ImgGalleryCom"
  }, {
    path: "/Items/Details/components/ReviewsCom",
    component: _c0005bd4,
    name: "Items-Details-components-ReviewsCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _455f5236,
    name: "board-detail-update-idx"
  }, {
    path: "/inform/detail/update/:idx?",
<<<<<<< HEAD
    component: _4e43b2b9,
=======
    component: _6016767a,
>>>>>>> 2b85bc878b34e539a1cafe37341d34aafaa31289
    name: "inform-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _1fecbc2d,
    name: "board-detail-idx"
  }, {
    path: "/inform/detail/:idx?",
<<<<<<< HEAD
    component: _400f4fb0,
=======
    component: _136c3610,
>>>>>>> 2b85bc878b34e539a1cafe37341d34aafaa31289
    name: "inform-detail-idx"
  }, {
    path: "/Items/Details/:idx",
    component: _e7cdd310,
    name: "Items-Details-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _10ee18f1,
    name: "payment-userIdx"
  }, {
    path: "/tourItemDetails/:idx?",
    component: _5c0b41ad,
    name: "tourItemDetails-idx"
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
