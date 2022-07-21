import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ecf4488c = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _5f0f3af4 = () => interopDefault(import('../pages/file-http-common.js' /* webpackChunkName: "pages/file-http-common" */))
const _419fb64b = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _44e599dd = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _6041a56c = () => interopDefault(import('../pages/MapExample.vue' /* webpackChunkName: "pages/MapExample" */))
const _c886a88c = () => interopDefault(import('../pages/mypage/index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _41e39db8 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _d873df7e = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _1c66ca97 = () => interopDefault(import('../pages/SignUp/index.vue' /* webpackChunkName: "pages/SignUp/index" */))
const _291b76a4 = () => interopDefault(import('../pages/UploadImage.vue' /* webpackChunkName: "pages/UploadImage" */))
const _465e2e83 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _7d2b024a = () => interopDefault(import('../pages/board/Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _68ee94a5 = () => interopDefault(import('../pages/find/id.vue' /* webpackChunkName: "pages/find/id" */))
const _27bf36b6 = () => interopDefault(import('../pages/find/password.vue' /* webpackChunkName: "pages/find/password" */))
const _59130398 = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _7dde6056 = () => interopDefault(import('../pages/inform/Write.vue' /* webpackChunkName: "pages/inform/Write" */))
const _b2470d2c = () => interopDefault(import('../pages/Items/Details/index.vue' /* webpackChunkName: "pages/Items/Details/index" */))
const _66e15709 = () => interopDefault(import('../pages/Items/List.vue' /* webpackChunkName: "pages/Items/List" */))
const _3d9a8280 = () => interopDefault(import('../pages/service/IndexDataService.js' /* webpackChunkName: "pages/service/IndexDataService" */))
const _31fabb2e = () => interopDefault(import('../pages/service/ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _387298fb = () => interopDefault(import('../pages/service/ItemListDataService.js' /* webpackChunkName: "pages/service/ItemListDataService" */))
const _3f3db942 = () => interopDefault(import('../pages/service/ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _0b83b7dc = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _77a6b1cc = () => interopDefault(import('../pages/service/UploadFilesService.js' /* webpackChunkName: "pages/service/UploadFilesService" */))
const _08b527f5 = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _1df7e77a = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _02f87fb8 = () => interopDefault(import('../pages/SignUp/Complete.vue' /* webpackChunkName: "pages/SignUp/Complete" */))
const _1222dead = () => interopDefault(import('../pages/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _4636806f = () => interopDefault(import('../pages/Items/Details/components/CardSliderCom.vue' /* webpackChunkName: "pages/Items/Details/components/CardSliderCom" */))
const _673e74b1 = () => interopDefault(import('../pages/Items/Details/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/Items/Details/components/ImgGalleryCom" */))
const _05263e37 = () => interopDefault(import('../pages/Items/Details/components/ReviewsCom.vue' /* webpackChunkName: "pages/Items/Details/components/ReviewsCom" */))
const _3f3569cb = () => interopDefault(import('../pages/board/detail/update/_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _75513620 = () => interopDefault(import('../pages/inform/detail/update/_idx.vue' /* webpackChunkName: "pages/inform/detail/update/_idx" */))
const _f98eca72 = () => interopDefault(import('../pages/board/detail/_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _c45a57dc = () => interopDefault(import('../pages/inform/detail/_idx.vue' /* webpackChunkName: "pages/inform/detail/_idx" */))
const _4303dad4 = () => interopDefault(import('../pages/Items/Details/_idx.vue' /* webpackChunkName: "pages/Items/Details/_idx" */))
const _28898258 = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _fb335adc = () => interopDefault(import('../pages/tourItemDetails/_idx.vue' /* webpackChunkName: "pages/tourItemDetails/_idx" */))
const _3a66eac6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ecf4488c,
    name: "CheckPayment"
  }, {
    path: "/file-http-common",
    component: _5f0f3af4,
    name: "file-http-common"
  }, {
    path: "/http-common",
    component: _419fb64b,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _44e599dd,
    name: "LogIn"
  }, {
    path: "/MapExample",
    component: _6041a56c,
    name: "MapExample"
  }, {
    path: "/mypage",
    component: _c886a88c,
    name: "mypage"
  }, {
    path: "/Qna",
    component: _41e39db8,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _d873df7e,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _1c66ca97,
    name: "SignUp"
  }, {
    path: "/UploadImage",
    component: _291b76a4,
    name: "UploadImage"
  }, {
    path: "/board/List",
    component: _465e2e83,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _7d2b024a,
    name: "board-Write"
  }, {
    path: "/find/id",
    component: _68ee94a5,
    name: "find-id"
  }, {
    path: "/find/password",
    component: _27bf36b6,
    name: "find-password"
  }, {
    path: "/inform/List",
    component: _59130398,
    name: "inform-List"
  }, {
    path: "/inform/Write",
    component: _7dde6056,
    name: "inform-Write"
  }, {
    path: "/Items/Details",
    component: _b2470d2c,
    name: "Items-Details"
  }, {
    path: "/Items/List",
    component: _66e15709,
    name: "Items-List"
  }, {
    path: "/service/IndexDataService",
    component: _3d9a8280,
    name: "service-IndexDataService"
  }, {
    path: "/service/ItemDetailDataService",
    component: _31fabb2e,
    name: "service-ItemDetailDataService"
  }, {
    path: "/service/ItemListDataService",
    component: _387298fb,
    name: "service-ItemListDataService"
  }, {
    path: "/service/ReviewDataService",
    component: _3f3db942,
    name: "service-ReviewDataService"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _0b83b7dc,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UploadFilesService",
    component: _77a6b1cc,
    name: "service-UploadFilesService"
  }, {
    path: "/service/UserDataService",
    component: _08b527f5,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _1df7e77a,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/SignUp/Complete",
    component: _02f87fb8,
    name: "SignUp-Complete"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _1222dead,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/Items/Details/components/CardSliderCom",
    component: _4636806f,
    name: "Items-Details-components-CardSliderCom"
  }, {
    path: "/Items/Details/components/ImgGalleryCom",
    component: _673e74b1,
    name: "Items-Details-components-ImgGalleryCom"
  }, {
    path: "/Items/Details/components/ReviewsCom",
    component: _05263e37,
    name: "Items-Details-components-ReviewsCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _3f3569cb,
    name: "board-detail-update-idx"
  }, {
    path: "/inform/detail/update/:idx?",
    component: _75513620,
    name: "inform-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _f98eca72,
    name: "board-detail-idx"
  }, {
    path: "/inform/detail/:idx?",
    component: _c45a57dc,
    name: "inform-detail-idx"
  }, {
    path: "/Items/Details/:idx",
    component: _4303dad4,
    name: "Items-Details-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _28898258,
    name: "payment-userIdx"
  }, {
    path: "/tourItemDetails/:idx?",
    component: _fb335adc,
    name: "tourItemDetails-idx"
  }, {
    path: "/",
    component: _3a66eac6,
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
