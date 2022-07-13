// Vuex : store/index.js
// 역할 : -> 모든 컴포넌트에서 공유할 수 있는 변수를 정의해 두는 곳(전역변수들)

// import Vue from 'vue'
// import Vuex from 'vuex'

// import { auth } from "./AuthModule";

// Vue.use(Vuex)

// export default new Vuex.Store({
//   // 외부 자바스크립트를(xxx.js) 정의해서 쓰는 곳
//   modules: {
//     auth
//   }
// })

// TODO: 수정1
// import Vuex from 'vuex'
// import Vue from 'vue'

// import { auth } from "./AuthModule";

// Vue.use(Vuex)

// export default () => new Vuex.Store({
//   state: () => ({

//   }),
//   mutations: {},
//   actions: {},
//   modules: {
//     auth
//   }
// })


// TODO: 수정2
import { auth } from "./AuthModule";

export const state = () => ({
	
});

export const mutations = {
    
};
export const getters = {
    
};
export const actions = {
    
};
export const modules = {
    auth
};
