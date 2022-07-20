import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b2dc3b72 = () => interopDefault(import('../pages/CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _b1b407d0 = () => interopDefault(import('../pages/http-common.js' /* webpackChunkName: "pages/http-common" */))
const _fe97b020 = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _35657317 = () => interopDefault(import('../pages/MapExample.vue' /* webpackChunkName: "pages/MapExample" */))
const _8e6e9b72 = () => interopDefault(import('../pages/mypage/index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _73d6d6ea = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _9e5bd264 = () => interopDefault(import('../pages/SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _3972d124 = () => interopDefault(import('../pages/SignUp/index.vue' /* webpackChunkName: "pages/SignUp/index" */))
const _a8371760 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _6f2513c6 = () => interopDefault(import('../pages/board/Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _295c2c10 = () => interopDefault(import('../pages/find/id.vue' /* webpackChunkName: "pages/find/id" */))
const _b5558c80 = () => interopDefault(import('../pages/find/id/Complete.vue' /* webpackChunkName: "pages/find/id/Complete" */))
const _70952fb8 = () => interopDefault(import('../pages/find/password.vue' /* webpackChunkName: "pages/find/password" */))
const _5e046c00 = () => interopDefault(import('../pages/find/password/Complete.vue' /* webpackChunkName: "pages/find/password/Complete" */))
const _5f785744 = () => interopDefault(import('../pages/inform/Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _b755112a = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _fb392b86 = () => interopDefault(import('../pages/Items/Details/index.vue' /* webpackChunkName: "pages/Items/Details/index" */))
const _6730c654 = () => interopDefault(import('../pages/Items/List.vue' /* webpackChunkName: "pages/Items/List" */))
const _1fca07bb = () => interopDefault(import('../pages/service/ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _cac95762 = () => interopDefault(import('../pages/service/ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _9d26fd42 = () => interopDefault(import('../pages/service/ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _b62fbb7c = () => interopDefault(import('../pages/service/UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _0159d2d6 = () => interopDefault(import('../pages/shoppingCart/ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _38f21277 = () => interopDefault(import('../pages/SignUp/Complete.vue' /* webpackChunkName: "pages/SignUp/Complete" */))
const _644d40bc = () => interopDefault(import('../pages/Items/Details/components/CardSliderCom.vue' /* webpackChunkName: "pages/Items/Details/components/CardSliderCom" */))
const _f5559604 = () => interopDefault(import('../pages/Items/Details/components/ImgGalleryCom.vue' /* webpackChunkName: "pages/Items/Details/components/ImgGalleryCom" */))
const _78a88aa4 = () => interopDefault(import('../pages/Items/Details/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/Items/Details/components/KakaoMapApiCom" */))
const _5e61adec = () => interopDefault(import('../pages/Items/Details/components/ReviewsCom.vue' /* webpackChunkName: "pages/Items/Details/components/ReviewsCom" */))
const _cad9f650 = () => interopDefault(import('../pages/board/detail/update/_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _4948b74c = () => interopDefault(import('../pages/board/detail/_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _ea87893a = () => interopDefault(import('../pages/Items/Details/_idx.vue' /* webpackChunkName: "pages/Items/Details/_idx" */))
const _3be57a65 = () => interopDefault(import('../pages/payment/_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _763578d9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _b2dc3b72,
    name: "CheckPayment"
  }, {
    path: "/http-common",
    component: _b1b407d0,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _fe97b020,
    name: "LogIn"
  }, {
    path: "/MapExample",
    component: _35657317,
    name: "MapExample"
  }, {
    path: "/mypage",
    component: _8e6e9b72,
    name: "mypage"
  }, {
    path: "/Qna",
    component: _73d6d6ea,
    name: "Qna"
  }, {
    path: "/SearchResult",
    component: _9e5bd264,
    name: "SearchResult"
  }, {
    path: "/SignUp",
    component: _3972d124,
    name: "SignUp"
  }, {
    path: "/board/List",
    component: _a8371760,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _6f2513c6,
    name: "board-Write"
  }, {
    path: "/find/id",
    component: _295c2c10,
    name: "find-id",
    children: [{
      path: "Complete",
      component: _b5558c80,
      name: "find-id-Complete"
    }]
  }, {
    path: "/find/password",
    component: _70952fb8,
    name: "find-password",
    children: [{
      path: "Complete",
      component: _5e046c00,
      name: "find-password-Complete"
    }]
  }, {
    path: "/inform/Detail",
    component: _5f785744,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _b755112a,
    name: "inform-List"
  }, {
    path: "/Items/Details",
    component: _fb392b86,
    name: "Items-Details"
  }, {
    path: "/Items/List",
    component: _6730c654,
    name: "Items-List"
  }, {
    path: "/service/ItemDetailDataService",
    component: _1fca07bb,
    name: "service-ItemDetailDataService"
  }, {
    path: "/service/ReviewDataService",
    component: _cac95762,
    name: "service-ReviewDataService"
  }, {
    path: "/service/ShoppingCartDataService",
    component: _9d26fd42,
    name: "service-ShoppingCartDataService"
  }, {
    path: "/service/UserDataService",
    component: _b62fbb7c,
    name: "service-UserDataService"
  }, {
    path: "/shoppingCart/ShoppingCart",
    component: _0159d2d6,
    name: "shoppingCart-ShoppingCart"
  }, {
    path: "/SignUp/Complete",
    component: _38f21277,
    name: "SignUp-Complete"
  }, {
    path: "/Items/Details/components/CardSliderCom",
    component: _644d40bc,
    name: "Items-Details-components-CardSliderCom"
  }, {
    path: "/Items/Details/components/ImgGalleryCom",
    component: _f5559604,
    name: "Items-Details-components-ImgGalleryCom"
  }, {
    path: "/Items/Details/components/KakaoMapApiCom",
    component: _78a88aa4,
    name: "Items-Details-components-KakaoMapApiCom"
  }, {
    path: "/Items/Details/components/ReviewsCom",
    component: _5e61adec,
    name: "Items-Details-components-ReviewsCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _cad9f650,
    name: "board-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _4948b74c,
    name: "board-detail-idx"
  }, {
    path: "/Items/Details/:idx",
    component: _ea87893a,
    name: "Items-Details-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _3be57a65,
    name: "payment-userIdx"
  }, {
    path: "/",
    component: _763578d9,
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
