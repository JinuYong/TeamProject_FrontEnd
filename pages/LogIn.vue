<template>
    <div class="common-container">
        <!-- TODO: -->
        <form class="common" @submit.prevent="handleLogin">
            <h4 class="mb-4 fw-normal text-center">로그인</h4>
            <div class="form-floating">
                <input
                    v-model="user.username"
                    v-validate="'required'"
                    name="username"
                    type="text"
                    class="form-control mt-5 mb-1"
                    id="floatingInput"
                    placeholder="name@example.com"
                />
                <label for="floatingInput">아이디</label>
                <!--          에러가 발생하면 errors.has('username') 값이 true됨 -->
                <!--          에러가 발생안하면 errors.has('username') 값이 false됨 -->
                <div
                    v-if="errors.has('username')"
                    class="alert alert-danger"
                    role="alert"
                >
                    Username is required!(필수)
                </div>
            </div>
            <div class="form-floating">
                <input
                    v-model="user.password"
                    v-validate="'required'"
                    name="password"
                    type="password"
                    class="form-control me-2 mb-2"
                    id="floatingPassword"
                    placeholder="Password"
                />
                <label for="floatingPassword">비밀번호</label>
                <!--          에러가 발생하면 errors.has('username') 값이 true됨 -->
                <!--          에러가 발생안하면 errors.has('username') 값이 false됨 -->
                <div
                    v-if="errors.has('password')"
                    class="alert alert-danger"
                    role="alert"
                >
                    Userpassword is required!(필수)
                </div>
            </div>

            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> 아이디
                    저장하기
                </label>
            </div>
            <!-- TODO: loading 구현 -->
            <button class="btn btn-md w-100 mt-3 mb-3" type="submit">
                로그인
            </button>

            <div class="form-group">
                <div v-if="message" class="alert alert-danger" role="alert">
                    {{ message }}
                </div>
            </div>

            <hr />
            <!-- <button class="mt-3 mb-3 btn btn-md" type="submit">회원가입</button>
      <button class="mt-3 mb-3 btn btn-md" type="submit">
        아이디|비밀번호찾기
      </button> -->
            <div>
                아직 <a href="/signup" class="aTag">회원</a>이 아니신가요?<br />
                <a href="/find/id/" class="aTag">아이디</a> 또는
                <a href="/find/password/" class="aTag">비밀번호</a>를 잊으셨나요?
            </div>
            <hr />
            <div class="logoPic-flex">
                <div>
                    <img
                        src="@/assets/img/omym_logo.png"
                        alt="logoPic"
                        class="logoPic mt-3"
                    />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import User from "@/models/user";

/* eslint-disable */
export default {
    name: "login",
    data() {
        return {
            user: new User("", ""),
            loading: false,
            message: "",
        };
    },
    computed: {
        // 값 : false, true
        loggedIn() {
            // 아래 내용은 공유저장소(store/index.js) 전역변수
            return this.$store.state.auth.status.loggedIn;
        },
    },
    // 화면이 뜨자마자 실행되는 이벤트
    // created(Vue객체가 최초 만들어질때 실행됨), mounted(화면 모두 뜰때 실행됨)
    created() {
        // 로그인이 되었으면 loggedIn = true
        // 로그인이 안되었으면 loggedIn = false
        // 로그인이 되었으면 사용자를 프로필 페이지로 안내
        if (this.loggedIn) {
            //  profile 페이지로 강제 이동함
            this.$router.push("/");
        }
    },
    methods: {
        //  로그인 메소드 정의
        handleLogin() {
            this.loading = true;
            // Vee-Validation npm 설치 : 뷰에서 유효성 체크 모듈
            // validateAll => v-validate 체크해서 모두 true, false 인지 확인
            // 값이 isValid = true ( false )
            this.$validator.validateAll().then((isValid) => {
                //  유효성 체크가 걸린 입력박스가 하나라도 에러가 나면 : false
                //  isValid = false 이면 로그인 함수 종료
                if (!isValid) {
                    this.loading = false;
                    return;
                }

                //  로그인 절차 진행
                //  springboot 서버와 통신
                if (this.user.username && this.user.password) {
                    console.log(this.user);
                    //  springboot로 username, password 전송해서 로그인 진행
                    //  공유저장소의 비동기 메소드 호출 ( login )
                    this.$store
                        .dispatch("auth/login", this.user)
                        //  결과가 성공하면 then(첫번째매개변수)
                        //  실패하면 then(두번째매개변수)
                        .then(
                            //  성공
                            () => {
                                // 로그인 성공시 자동 페이지 전환 : /profile 페이지
                                this.$router.push("/");
                            },
                            //  실패
                            (error) => {
                                this.loading = false;
                                this.message =
                                    (error.response &&
                                        error.response.data &&
                                        error.response.data.message) ||
                                    error.message ||
                                    error.toString();
                                // error.message || error.toString();
                            }
                        );
                }
            });
        },
    },
};
</script>

<style scoped>
@import "@/assets/css/project_hbs.css";

.form-control {
    border-bottom: 2px solid #a30000;
    border-top: none;
    border-left: none;
    border-right: none;
}

.form-control:focus {
    box-shadow: none;
    border-color: #a30000;
}

.aTag {
    color: #a30000;
}

.aTag:hover {
    color: #a30000;
}
</style>
