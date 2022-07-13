import AuthService from "@/services/auth/AuthService";

// 로컬저장소(크롬의 localstorage)에서 user의 정보를 받기
const user = JSON.parse(localStorage.getItem("user"));

// user 상태 정보 설정 : initialState
// 1) 로그인(loggedIn) 이 되어 있을때 상태 정보 : loggedIn=true
// 2) 로그인(loggedIn) 이 되지 않을때 상태 정보 : loggedIn=false
// 3항연산자 : (조건==true) ? 1번실행 : 2번실행
const initialState = user ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null }

export const auth = {
    namespaced:true,
    // 공유 데이터 정의(전역 변수)
    state: initialState,
    // setter 메소드들 정의( 변수에 저장하는 메소드 )
    mutations: {
        // 로그인 성공 메소드( 상태정보 갱신 : true )
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
    //    로그인 실패 메소드( 상태정보 갱신 : false )
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
    //    로그아웃 메소드( 상태정보 갱신 : false )
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
    //    회원가입 성공 메소드 ( 상태정보 갱신 : false )
        registerSuccess(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
    //    회원가입 실패 메소드( 상태정보 갱신 : false )
        registerFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
    },
    // 비동기 함수들 정의
    // axios 통신( 성격 : 서버에서 결과를 언제 보낼 줄 지 모름 )
    actions: {
        // axios 통신 : login ( AuthService.login 호출 )
        // springboot 로 login 관련 요청( username, password )
        login({ commit }, user) {
            return AuthService.login(user)
        //    성공하면 then으로 결과가 들어옴
                .then( user => {
                        // commit( mutations 메소드명 )
                        // loginSuccess(state, user) 메소드 호출
                        // loggedIn 속성: true, user 속성: user
                        commit('loginSuccess', user);
                        // 비동기 함수 성공시 : Promise.resolve
                        return Promise.resolve(user);
                    },
                    error => {
                        // loginFailure(state) 메소드 호출
                        commit('loginFailure');
                        // 비동기 함수 실패시 : Promise.reject
                        return Promise.reject(error);
                    }
                );
        },
    //    logout : AuthService.logout 호출
        logout({ commit }) {
            // 로컬저장소에서 user 삭제(제거)
            AuthService.logout();
        //    상태정보 갱신 : loggedIn = false
        //    mutations : logout(state) 메소드 호출
            commit("logout");
        },
    //    register(회원가입) AuthService.register
        register({ commit }, user) {
            // axios(post) 서버쪽으로 user객체를 전송해서 insert 요청을 함
            //    성공하면 then으로 결과가 들어옴

            return AuthService.register(user)
                .then(response=> {
                        // mutations : registerSuccess(state) 메소드 호출
                        commit("registerSuccess");
                        // 비동기 함수 성공시 : Promise.resolve 호출됨
                        return Promise.resolve(response.data);
                    },
                    error => {
                        // mutations : registerFailure(state) 메소드 호출
                        commit("registerFailure");
                        // 비동기 함수 실패시 : Promise.reject 호출됨
                        return Promise.reject(error);
                    }
                )
        }
    }
}






