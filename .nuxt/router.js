import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _377fbc5e = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _2893e7d0 = () => interopDefault(import('../pages/file-http-common.js' /* webpackChunkName: "pages/file-http-common" */))
const _6dbd2022 = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _52d12c8e = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _5760e6ee = () => interopDefault(import('../pages/MapExample.vue' /* webpackChunkName: "pages/MapExample" */))
const _49b68c5e = () => interopDefault(import('../pages/mypage/index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _7a3fb494 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _41bff0e5 = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _6b3ea98a = () => interopDefault(import('../pages/SignUp/index.vue' /* webpackChunkName: "pages/SignUp/index" */))
const _5427bf8a = () => interopDefault(import('../pages/UploadImage.vue' /* webpackChunkName: "pages/UploadImage" */))
const _64402fb2 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _343f05b4 = () => interopDefault(import('../pages/board/Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _556bdd81 = () => interopDefault(import('../pages/find/id.vue' /* webpackChunkName: "pages/find/id" */))
const _053acefe = () => interopDefault(import('../pages/find/password.vue' /* webpackChunkName: "pages/find/password" */))
const _7c6f0318 = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _6f0ab079 = () => interopDefault(import('../pages/inform/Write.vue' /* webpackChunkName: "pages/inform/Write" */))
const _2a1c448d = () => interopDefault(import('../pages/items/List.vue' /* webpackChunkName: "pages/items/List" */))
const _4c1acf9c = () => interopDefault(import('../pages/service/IndexDataService.js' /* webpackChunkName: "pages/service/IndexDataService" */))
const _1d06d3d2 = () => interopDefault(import('../pages/service/ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _0c348a9f = () => interopDefault(import('../pages/service/ItemListDataService.js' /* webpackChunkName: "pages/service/ItemListDataService" */))
const _3157c3e6 = () => interopDefault(import('../pages/service/ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _52a6a3b6 = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _1553f0f6 = () => interopDefault(import('../pages/service/UploadFilesService.js' /* webpackChunkName: "pages/service/UploadFilesService" */))
const _5b4ce8ce = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _422b561f = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _6fef2600 = () => interopDefault(import('../pages/SignUp/Complete.vue' /* webpackChunkName: "pages/SignUp/Complete" */))
const _4089bd5e = () => interopDefault(import('../pages/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _314f746f = () => interopDefault(import('../pages/board/detail/update/_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _730f0008 = () => interopDefault(import('../pages/inform/detail/update/_idx.vue' /* webpackChunkName: "pages/inform/detail/update/_idx" */))
const _0374feba = () => interopDefault(import('../pages/board/detail/_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _f73aac94 = () => interopDefault(import('../pages/inform/detail/_idx.vue' /* webpackChunkName: "pages/inform/detail/_idx" */))
const _e0cb1e08 = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _04574f36 = () => interopDefault(import('../pages/tourItemDetails/_idx.vue' /* webpackChunkName: "pages/tourItemDetails/_idx" */))
const _67ce8abc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _377fbc5e,
    name: "CheckPayment"
  }, {
    path: "/file-http-common",
    component: _2893e7d0,
    name: "file-http-common"
  }, {
    path: "/http-common",
    component: _6dbd2022,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _52d12c8e,
    name: "LogIn"
  }, {
    path: "/MapExample",
    component: _5760e6ee,
    name: "MapExample"
  }, {
    path: "/mypage",
    component: _49b68c5e,
    name: "mypage"
  }, {
    path: "/Qna",
    component: _7a3fb494,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _41bff0e5,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _6b3ea98a,
    name: "SignUp"
  }, {
    path: "/UploadImage",
    component: _5427bf8a,
    name: "UploadImage"
  }, {
    path: "/board/List",
    component: _64402fb2,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _343f05b4,
    name: "board-Write"
  }, {
    path: "/find/id",
    component: _556bdd81,
    name: "find-id"
  }, {
    path: "/find/password",
    component: _053acefe,
    name: "find-password"
  }, {
    path: "/inform/List",
    component: _7c6f0318,
    name: "inform-List"
  }, {
    path: "/inform/Write",
    component: _6f0ab079,
    name: "inform-Write"
  }, {
    path: "/items/List",
    component: _2a1c448d,
    name: "items-List"
  }, {
    path: "/service/IndexDataService",
    component: _4c1acf9c,
    name: "service-IndexDataService"
  }, {
    path: "/service/ItemDetailDataService",
    component: _1d06d3d2,
    name: "service-ItemDetailDataService"
  }, {
    path: "/service/ItemListDataService",
    component: _0c348a9f,
    name: "service-ItemListDataService"
  }, {
    path: "/service/ReviewDataService",
    component: _3157c3e6,
    name: "service-ReviewDataService"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _52a6a3b6,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UploadFilesService",
    component: _1553f0f6,
    name: "service-UploadFilesService"
  }, {
    path: "/service/UserDataService",
    component: _5b4ce8ce,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _422b561f,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/SignUp/Complete",
    component: _6fef2600,
    name: "SignUp-Complete"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _4089bd5e,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _314f746f,
    name: "board-detail-update-idx"
  }, {
    path: "/inform/detail/update/:idx?",
    component: _730f0008,
    name: "inform-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _0374feba,
    name: "board-detail-idx"
  }, {
    path: "/inform/detail/:idx?",
    component: _f73aac94,
    name: "inform-detail-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _e0cb1e08,
    name: "payment-userIdx"
  }, {
    path: "/tourItemDetails/:idx?",
    component: _04574f36,
    name: "tourItemDetails-idx"
  }, {
    path: "/",
    component: _67ce8abc,
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
