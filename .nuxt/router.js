import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d2627ce8 = () => interopDefault(import('..\\pages\\CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _f3bfcc36 = () => interopDefault(import('..\\pages\\CheckPayment.vue' /* webpackChunkName: "pages/CheckPayment" */))
const _4ecd39c8 = () => interopDefault(import('..\\pages\\CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _30ba720a = () => interopDefault(import('..\\pages\\FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _bb73e8e6 = () => interopDefault(import('..\\pages\\FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _650cf994 = () => interopDefault(import('..\\pages\\http-common.js' /* webpackChunkName: "pages/http-common" */))
const _6ab42612 = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _0f145d60 = () => interopDefault(import('..\\pages\\mypage\\index.vue' /* webpackChunkName: "pages/mypage/index" */))
const _21ef81eb = () => interopDefault(import('..\\pages\\MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _a23c99a6 = () => interopDefault(import('..\\pages\\Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _df3f6328 = () => interopDefault(import('..\\pages\\SearchResult.vue' /* webpackChunkName: "pages/SearchResult" */))
const _c3524502 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _e18d0990 = () => interopDefault(import('..\\pages\\SignupComplete.vue' /* webpackChunkName: "pages/SignupComplete" */))
const _530881e6 = () => interopDefault(import('..\\pages\\board\\List.vue' /* webpackChunkName: "pages/board/List" */))
const _1e80fa00 = () => interopDefault(import('..\\pages\\board\\Write.vue' /* webpackChunkName: "pages/board/Write" */))
const _c815aafe = () => interopDefault(import('..\\pages\\inform\\Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _279bfa4e = () => interopDefault(import('..\\pages\\inform\\List.vue' /* webpackChunkName: "pages/inform/List" */))
const _1b59b06e = () => interopDefault(import('..\\pages\\ItemList\\ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _49dfe476 = () => interopDefault(import('..\\pages\\service\\ItemDetailDataService.js' /* webpackChunkName: "pages/service/ItemDetailDataService" */))
const _fb0a72ec = () => interopDefault(import('..\\pages\\service\\ReviewDataService.js' /* webpackChunkName: "pages/service/ReviewDataService" */))
const _a503c94c = () => interopDefault(import('..\\pages\\service\\ShoppingCartDataService.js' /* webpackChunkName: "pages/service/ShoppingCartDataService" */))
const _ce363186 = () => interopDefault(import('..\\pages\\service\\UserDataService.js' /* webpackChunkName: "pages/service/UserDataService" */))
const _039f4d97 = () => interopDefault(import('..\\pages\\shoppingCart\\ShoppingCart.vue' /* webpackChunkName: "pages/shoppingCart/ShoppingCart" */))
const _4acab808 = () => interopDefault(import('..\\pages\\tourItemDetails\\TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _eb61c56c = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\CardSliderCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/CardSliderCom" */))
const _a951dce8 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\ImgGalleryCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ImgGalleryCom" */))
const _12e23fd6 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _44f17188 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _149ebe32 = () => interopDefault(import('..\\pages\\board\\detail\\update\\_idx.vue' /* webpackChunkName: "pages/board/detail/update/_idx" */))
const _fc276844 = () => interopDefault(import('..\\pages\\board\\detail\\_idx.vue' /* webpackChunkName: "pages/board/detail/_idx" */))
const _003fe0e2 = () => interopDefault(import('..\\pages\\payment\\_userIdx.vue' /* webpackChunkName: "pages/payment/_userIdx" */))
const _3c65a91e = () => interopDefault(import('..\\pages\\tourItemDetails\\_idx.vue' /* webpackChunkName: "pages/tourItemDetails/_idx" */))
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
    path: "/CheckId",
    component: _d2627ce8,
    name: "CheckId"
  }, {
    path: "/CheckPayment",
    component: _f3bfcc36,
    name: "CheckPayment"
  }, {
    path: "/CheckPwd",
    component: _4ecd39c8,
    name: "CheckPwd"
  }, {
    path: "/FindId",
    component: _30ba720a,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _bb73e8e6,
    name: "FindPwd"
  }, {
    path: "/http-common",
    component: _650cf994,
    name: "http-common"
  }, {
    path: "/LogIn",
    component: _6ab42612,
    name: "LogIn"
  }, {
    path: "/mypage",
    component: _0f145d60,
    name: "mypage"
  }, {
    path: "/MypageUpdate",
    component: _21ef81eb,
    name: "MypageUpdate"
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
    component: _c3524502,
    name: "SignUp"
  }, {
    path: "/SignupComplete",
    component: _e18d0990,
    name: "SignupComplete"
  }, {
    path: "/board/List",
    component: _530881e6,
    name: "board-List"
  }, {
    path: "/board/Write",
    component: _1e80fa00,
    name: "board-Write"
  }, {
    path: "/inform/Detail",
    component: _c815aafe,
    name: "inform-Detail"
  }, {
    path: "/inform/List",
    component: _279bfa4e,
    name: "inform-List"
  }, {
    path: "/ItemList/ItemList",
    component: _1b59b06e,
    name: "ItemList-ItemList"
  }, {
    path: "/service/ItemDetailDataService",
    component: _49dfe476,
    name: "service-ItemDetailDataService"
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
    path: "/tourItemDetails/TourItemDetail",
    component: _4acab808,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/CardSliderCom",
    component: _eb61c56c,
    name: "tourItemDetails-components-CardSliderCom"
  }, {
    path: "/tourItemDetails/components/ImgGalleryCom",
    component: _a951dce8,
    name: "tourItemDetails-components-ImgGalleryCom"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _12e23fd6,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _44f17188,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/board/detail/update/:idx?",
    component: _149ebe32,
    name: "board-detail-update-idx"
  }, {
    path: "/board/detail/:idx?",
    component: _fc276844,
    name: "board-detail-idx"
  }, {
    path: "/payment/:userIdx?",
    component: _003fe0e2,
    name: "payment-userIdx"
  }, {
    path: "/tourItemDetails/:idx?",
    component: _3c65a91e,
    name: "tourItemDetails-idx"
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
