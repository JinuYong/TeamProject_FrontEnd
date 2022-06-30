import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _d2627ce8 = () => interopDefault(import('..\\pages\\CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _4ecd39c8 = () => interopDefault(import('..\\pages\\CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _491112ae = () => interopDefault(import('..\\pages\\CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _30ba720a = () => interopDefault(import('..\\pages\\FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _bb73e8e6 = () => interopDefault(import('..\\pages\\FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _6ab42612 = () => interopDefault(import('..\\pages\\LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _21ef81eb = () => interopDefault(import('..\\pages\\MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _a23c99a6 = () => interopDefault(import('..\\pages\\Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _c3524502 = () => interopDefault(import('..\\pages\\SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _11f6bb80 = () => interopDefault(import('..\\pages\\board\\Detail.vue' /* webpackChunkName: "pages/board/Detail" */))
const _530881e6 = () => interopDefault(import('..\\pages\\board\\List.vue' /* webpackChunkName: "pages/board/List" */))
const _c815aafe = () => interopDefault(import('..\\pages\\inform\\Detail.vue' /* webpackChunkName: "pages/inform/Detail" */))
const _279bfa4e = () => interopDefault(import('..\\pages\\inform\\List.vue' /* webpackChunkName: "pages/inform/List" */))
const _1b59b06e = () => interopDefault(import('..\\pages\\ItemList\\ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _4acab808 = () => interopDefault(import('..\\pages\\tourItemDetails\\TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _12e23fd6 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _44f17188 = () => interopDefault(import('..\\pages\\tourItemDetails\\components\\ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _603576fb = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
const _7286b00a = () => interopDefault(import('../pages/CheckId.vue' /* webpackChunkName: "pages/CheckId" */))
const _73df445e = () => interopDefault(import('../pages/CheckPwd.vue' /* webpackChunkName: "pages/CheckPwd" */))
const _2477f627 = () => interopDefault(import('../pages/CheckSignUp.vue' /* webpackChunkName: "pages/CheckSignUp" */))
const _5a1410bd = () => interopDefault(import('../pages/FindId.vue' /* webpackChunkName: "pages/FindId" */))
const _7dfdfa0b = () => interopDefault(import('../pages/FindPwd.vue' /* webpackChunkName: "pages/FindPwd" */))
const _c01cc7e0 = () => interopDefault(import('../pages/LogIn.vue' /* webpackChunkName: "pages/LogIn" */))
const _0e021ba6 = () => interopDefault(import('../pages/MypageUpdate.vue' /* webpackChunkName: "pages/MypageUpdate" */))
const _486090ab = () => interopDefault(import('../pages/Qna.vue' /* webpackChunkName: "pages/Qna" */))
const _10c82741 = () => interopDefault(import('../pages/SignUp.vue' /* webpackChunkName: "pages/SignUp" */))
const _98ead7a0 = () => interopDefault(import('../pages/board/List.vue' /* webpackChunkName: "pages/board/List" */))
const _7e58cb56 = () => interopDefault(import('../pages/boardDetails/boardDetails.vue' /* webpackChunkName: "pages/boardDetails/boardDetails" */))
const _dd1958ea = () => interopDefault(import('../pages/inform/List.vue' /* webpackChunkName: "pages/inform/List" */))
const _22f62114 = () => interopDefault(import('../pages/ItemList/ItemList.vue' /* webpackChunkName: "pages/ItemList/ItemList" */))
const _0da2d99d = () => interopDefault(import('../pages/tourItemDetails/TourItemDetail.vue' /* webpackChunkName: "pages/tourItemDetails/TourItemDetail" */))
const _f69b88f0 = () => interopDefault(import('../pages/tourItemDetails/components/KakaoMapApiCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/KakaoMapApiCom" */))
const _00fcebee = () => interopDefault(import('../pages/tourItemDetails/components/ReviewsCom.vue' /* webpackChunkName: "pages/tourItemDetails/components/ReviewsCom" */))
const _d51a260e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 0a5f5e09b31628448a6371eae36dfdeaed19498f

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
    component: _7286b00a,
    name: "CheckId"
  }, {
    path: "/CheckPwd",
    component: _73df445e,
    name: "CheckPwd"
  }, {
    path: "/CheckSignUp",
    component: _2477f627,
    name: "CheckSignUp"
  }, {
    path: "/FindId",
    component: _5a1410bd,
    name: "FindId"
  }, {
    path: "/FindPwd",
    component: _7dfdfa0b,
    name: "FindPwd"
  }, {
    path: "/LogIn",
    component: _c01cc7e0,
    name: "LogIn"
  }, {
    path: "/MypageUpdate",
    component: _0e021ba6,
    name: "MypageUpdate"
  }, {
    path: "/Qna",
    component: _486090ab,
    name: "Qna"
  }, {
    path: "/SignUp",
    component: _10c82741,
    name: "SignUp"
  }, {
    path: "/board/Detail",
    component: _11f6bb80,
    name: "board-Detail"
  }, {
    path: "/board/List",
    component: _98ead7a0,
    name: "board-List"
  }, {
<<<<<<< HEAD
    path: "/inform/Detail",
    component: _c815aafe,
    name: "inform-Detail"
=======
    path: "/boardDetails/boardDetails",
    component: _7e58cb56,
    name: "boardDetails-boardDetails"
>>>>>>> 0a5f5e09b31628448a6371eae36dfdeaed19498f
  }, {
    path: "/inform/List",
    component: _dd1958ea,
    name: "inform-List"
  }, {
    path: "/ItemList/ItemList",
    component: _22f62114,
    name: "ItemList-ItemList"
  }, {
    path: "/tourItemDetails/TourItemDetail",
    component: _0da2d99d,
    name: "tourItemDetails-TourItemDetail"
  }, {
    path: "/tourItemDetails/components/KakaoMapApiCom",
    component: _f69b88f0,
    name: "tourItemDetails-components-KakaoMapApiCom"
  }, {
    path: "/tourItemDetails/components/ReviewsCom",
    component: _00fcebee,
    name: "tourItemDetails-components-ReviewsCom"
  }, {
    path: "/",
    component: _d51a260e,
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
