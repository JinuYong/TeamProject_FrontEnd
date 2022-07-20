import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c517345 = () => interopDefault(import('../pages/CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _075493cc = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _b9262efa = () => interopDefault(import('../pages/CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _8ba49cbc = () => interopDefault(import('../pages/file-http-common.js' /* webpackChunkName: "pages/file-http-common" */))
const _20967a22 = () => interopDefault(import('../pages/FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _f06e8574 = () => interopDefault(import('../pages/FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _31814add = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _2a79f20b = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _198b63cc = () => interopDefault(import('../pages/mypage/index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _b9b8085c = () => interopDefault(import('../pages/MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _676c2966 = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _1194c853 = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _516adeb4 = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _d591d142 = () => interopDefault(import('../pages/SignupComplete.vue' /* webpackChunkName: "pages/SignupComplete" */))
const _10797b48 = () => interopDefault(import('../pages/UploadImage.vue' /* webpackChunkName: "pages/UploadImage" */))
const _363fc315 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _ed080010 = () => interopDefault(import('../pages/board/Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _f051590e = () => interopDefault(import('../pages/inform/Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _65640146 = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _48ad24f1 = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _e002b124 = () => interopDefault(import('../pages/service/IndexDataService.js' /* webpackChunkName: "pages/service/IndexDataService" */))
const _174b0f40 = () => interopDefault(import('../pages/service/ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _69eee654 = () => interopDefault(import('../pages/service/ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _666c88b8 = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _20bdc770 = () => interopDefault(import('../pages/service/UploadFilesService.js' /* webpackChunkName: "pages/service/UploadFilesService" */))
const _14db1cf2 = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _1c788171 = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _42cba7bf = () => interopDefault(import('../pages/tourItemDetails/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _6a007003 = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
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
    path: "/file-http-common",
    component: _8ba49cbc,
    name: "file-http-common"
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
    path: "/mypage",
    component: _198b63cc,
    name: "mypage"
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
    path: "/SignupComplete",
    component: _d591d142,
    name: "SignupComplete"
  }, {
    path: "/UploadImage",
    component: _10797b48,
    name: "UploadImage"
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
    path: "/service/IndexDataService",
    component: _e002b124,
    name: "service-IndexDataService"
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
    path: "/service/UploadFilesService",
    component: _20bdc770,
    name: "service-UploadFilesService"
  }, {
    path: "/service/UserDataService",
    component: _14db1cf2,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _1c788171,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _42cba7bf,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _6a007003,
    name: "tourItemDetails-components-KakaoMapApiCom"
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
