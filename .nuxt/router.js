import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _093d1120 = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _6f837864 = () => interopDefault(import('../pages/file-http-common.js' /* webpackChunkName: "pages/file-http-common" */))
const _af5de59e = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _18070b37 = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _36908430 = () => interopDefault(import('../pages/MapExample.vue' /* webpackChunkName: "pages/MapExample" */))
const _1b73e120 = () => interopDefault(import('../pages/mypage/index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _75859d92 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _137d45a7 = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _c7c40006 = () => interopDefault(import('../pages/SignUp/index.vue' /* webpackChunkName: "pages/SignUp/index" */))
const _a5e0f52e = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _26b6efb8 = () => interopDefault(import('../pages/board/Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _0d0dd102 = () => interopDefault(import('../pages/find/id.vue' /* webpackChunkName: "pages/find/id" */))
const _4eab5419 = () => interopDefault(import('../pages/find/id/Complete.vue' /* webpackChunkName: "pages/find/id/Complete" */))
const _634fdbff = () => interopDefault(import('../pages/find/password.vue' /* webpackChunkName: "pages/find/password" */))
const _162cc0ce = () => interopDefault(import('../pages/find/password/Complete.vue' /* webpackChunkName: "pages/find/password/Complete" */))
const _7a02feb6 = () => interopDefault(import('../pages/inform/Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _6ee6ed1c = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
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
const _5cc8d521 = () => interopDefault(import('../pages/board/detail/_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _36f5237c = () => interopDefault(import('../pages/Items/Details/_idx.vue' /* webpackChunkName: "pages/Items/Details/_idx" */))
const _3588d684 = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _cd467c10 = () => interopDefault(import('../pages/tourItemDetails/_idx.vue' /* webpackChunkName: "pages/tourItemDetails/_idx" */))
const _0d885c20 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _093d1120,
    name: "CheckPayment"
  }, {
    path: "/file-http-common",
    component: _6f837864,
    name: "file-http-common"
  }, {
    path: "/http-common",
    component: _af5de59e,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _18070b37,
    name: "LogIn"
  }, {
    path: "/MapExample",
    component: _36908430,
    name: "MapExample"
  }, {
    path: "/mypage",
    component: _1b73e120,
    name: "mypage"
  }, {
    path: "/Qna",
    component: _75859d92,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _137d45a7,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _c7c40006,
    name: "SignUp"
  }, {
    path: "/board/List",
    component: _a5e0f52e,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _26b6efb8,
    name: "board-Write"
  }, {
    path: "/find/id",
    component: _0d0dd102,
    name: "find-id",
    children: [{
      path: "Complete",
      component: _4eab5419,
      name: "find-id-Complete"
    }]
  }, {
    path: "/find/password",
    component: _634fdbff,
    name: "find-password",
    children: [{
      path: "Complete",
      component: _162cc0ce,
      name: "find-password-Complete"
    }]
  }, {
    path: "/inform/Detail",
    component: _7a02feb6,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _6ee6ed1c,
    name: "inform-List"
  }, {
    path: "/Items/Details",
    component: _5d478544,
    name: "Items-Details"
  }, {
    path: "/Items/List",
    component: _64daa422,
    name: "Items-List"
  }, {
    path: "/service/IndexDataService",
    component: _11204d9a,
    name: "service-IndexDataService"
  }, {
    path: "/service/ItemDetailDataService",
    component: _9b5336d8,
    name: "service-ItemDetailDataService"
  }, {
    path: "/service/ItemListDataService",
    component: _b355383e,
    name: "service-ItemListDataService"
  }, {
    path: "/service/ReviewDataService",
    component: _0d0205a8,
    name: "service-ReviewDataService"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _5b55e810,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UploadFilesService",
    component: _a21c3118,
    name: "service-UploadFilesService"
  }, {
    path: "/service/UserDataService",
    component: _3bcd55db,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _486d66c6,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/SignUp/Complete",
    component: _67b2c8fe,
    name: "SignUp-Complete"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _697d9f13,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _198d632f,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/Items/Details/components/CardSliderCom",
    component: _c41bbb56,
    name: "Items-Details-components-CardSliderCom"
  }, {
    path: "/Items/Details/components/ImgGalleryCom",
    component: _820bd2d2,
    name: "Items-Details-components-ImgGalleryCom"
  }, {
    path: "/Items/Details/components/KakaoMapApiCom",
    component: _739fdc2b,
    name: "Items-Details-components-KakaoMapApiCom"
  }, {
    path: "/Items/Details/components/ReviewsCom",
    component: _fa7b53de,
    name: "Items-Details-components-ReviewsCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _0cf9b631,
    name: "board-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _5cc8d521,
    name: "board-detail-idx"
  }, {
    path: "/Items/Details/:idx",
    component: _36f5237c,
    name: "Items-Details-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _3588d684,
    name: "payment-userIdx"
  }, {
    path: "/tourItemDetails/:idx?",
    component: _cd467c10,
    name: "tourItemDetails-idx"
  }, {
    path: "/",
    component: _0d885c20,
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
