<template>
    <div style="position: relative; min-height: 100%">
        <!-- 헤더 -->
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"
                    ><img
                        class="logo-img"
                        src="@/assets/img/omym_logo.png"
                        alt="logo"
                /></a>
                <button
                    class="navbar-toggler collapse-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        ></path>
                    </svg>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <span class="divider-col"></span>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                aria-current="page"
                                @click="moveTo('/Items/List')"
                                >여행상품</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                aria-current="page"
                                @click="moveTo('/inform/list')"
                                >여행정보</a
                            >
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                게시판
                                <img
                                    class="dropdown-icon"
                                    src="@/assets/img/chevron-down.png"
                                />
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a
                                        class="dropdown-item"
                                        @click="moveTo('/board/list')"
                                        >자유게시판</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item"
                                        @click="moveTo('/qna')"
                                        >Q&A</a
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex main-searchbar" role="search">
                        <input
                            class="form-control search-input me-2"
                            type="search"
                            placeholder="검색어 입력"
                            aria-label="Search"
                            @keyup="searchKeyword()"
                        />
                        <img
                            src="@/assets/img/search_icon.png"
                            class="search-icon"
                        />
                    </form>
                    <!-- <img
                        class="header-icon"
                        src="@/assets/img/header/login.svg"
                        alt="login"
                        @click="moveTo('/login')"
                    />
                    <img
                        class="header-icon"
                        src="@/assets/img/header/person_add.svg"
                        alt="signup"
                        @click="moveTo('/signup')"
                    /> -->
                    <!-- TODO: -->
                    <!--      로그인 태그 추가-->

                    <div v-if="!currentUser">
                        <img
                            class="header-icon"
                            src="@/assets/img/header/login.svg"
                            alt="login"
                            @click="moveTo('/login')"
                        />
                        <img
                            class="header-icon"
                            src="@/assets/img/header/person_add.svg"
                            alt="signup"
                            @click="moveTo('/signup')"
                        />
                    </div>

                    <!--      로그아웃 태그 추가-->
                    <!--      유저가 로그인하면 아래 메뉴가 보임 : 로그아웃 -->
                    <div v-if="currentUser">
                        <img
                            class="header-icon"
                            src="@/assets/img/header/person.svg"
                            alt="profile"
                            @click="moveTo('/mypage/')"
                        />
                        {{ currentUser.username }}
                        <a href @click.prevent="logOut">
                            <img
                                class="header-icon"
                                src="@/assets/img/header/logout.svg"
                                alt="logout"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="default">
            <Nuxt />
        </section>

        <!-- 푸터 -->
        <footer>
            <div class="footer-content">
                <img
                    class="logo-img"
                    src="@/assets/img/omym_logo.png"
                    alt="logo"
                />
                <div class="footer-icons">
                    <img class="footer-icon" src="@/assets/img/facebook.svg" />
                    <img class="footer-icon" src="@/assets/img/github.svg" />
                    <img class="footer-icon" src="@/assets/img/google.svg" />
                </div>
                <p class="footer-text">
                    만든 이 | 유인환, 박진우, 김영근, 하보석, 김준섭
                    <br />
                    © 노인과 막내 (Old man and Yong man) | 2022.06.22
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    // TODO:
    // html에서 변수처럼 호출 : 뒤에 () 붙이면 안됨 예) currentUser
    // 속도는 computed 빠름
    computed: {
        currentUser() {
            // 공유저장소의 전역변수(공유변수 : user )
            // 자동으로 로그인되었으면 loggedIn = true, user객체 있음
            // 아니면 loggedIn = false, user객체 = null
            return this.$store.state.auth.user;
            // return true; // Todo: 화면 디자인 테스트용
        },
    },
    methods: {
        moveTo(url) {
            $nuxt.$router.push(url);
        },
        searchKeyword() {
            // 검색기능 구현
        },
        // TODO:
        logOut() {
            // dispatch 호출하는 메소드 : actions 있는 메소드를 호출함
            this.$store.dispatch("auth/logout");
            //   로그아웃 후 이동할 페이지 지정 : login 페이지
            this.$router.push("/login");
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap");

/* 전체 */
* {
    font-family: "Noto Sans KR", sans-serif;
}
.btn {
    border-radius: 3px !important;
}
.default {
    /* width: 1200px; */
    min-width: 700px;
    min-height: calc(100vh - 310px);
    margin: 0 auto;
    padding-bottom: 50px;
}
.form-control:focus {
    box-shadow: none;
    border-color: #a30000;
}
.form-control {
    font-size: 14px;
    font-weight: 300;
}

/* header */
nav {
    box-sizing: border-box;
    height: 60px;
    background: #ffffff;
    border-bottom: 1px solid #e5e5e5;
}
.container-fluid {
    width: 1200px;
    margin: 0 auto;
}
.main-searchbar {
    width: 250px;
    position: relative;
}
.search-input::placeholder {
    color: #dfdfdf;
    font-weight: 400;
    font-size: 14px;
}
.search-input {
    width: 100%;
    border-radius: 0px;
    border: none;
    border-bottom: 2px solid #a30000;
    padding-right: 40px;
}
.search-icon {
    position: absolute;
    width: 17px;
    margin: 0;
    top: 10px;
    right: 20px;
}
.logo-img {
    width: 150px;
}
.divider-col {
    width: 2px;
    height: 30px;
    background: #959595;
    margin: 0 20px;
}
.nav-link {
    font-weight: 500;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: #494949;
}
.nav-link:hover {
    color: #a30000;
}
.nav-item {
    padding-right: 10px;
}
#navbarNavDropdown {
    background: #ffffff;
    width: 300px;
}
.collapse-btn {
    border: none;
    background: none;
}
.dropdown-icon {
    width: 20px;
    height: 15px;
}
.header-icon {
    width: 25px;
    margin: 0 10px;
    padding: 15px 0;
    cursor: pointer;
}

/* footer */
footer {
    width: 100%;
    height: 250px;
    padding: 30px 100px;
    background: #eaebee;
}
.footer-content {
    width: 1200px;
    margin: 0 auto;
}
.footer-icons {
    display: flex;
}
.footer-icon {
    margin: 30px 10px 20px 0;
    width: 30px;
}
.footer-text {
    color: rgb(26, 26, 26);
    font-weight: 300;
    font-size: 15px;
    margin-top: 20px;
}

/* datepicker */
.ui-widget-header {
    border: 0px solid #dddddd;
    background: #fff;
}

.ui-datepicker-calendar > thead > tr > th {
    font-size: 14px !important;
}

.ui-datepicker .ui-datepicker-header {
    position: relative;
    padding: 10px 0;
}

.ui-state-default,
.ui-widget-content .ui-state-default,
.ui-widget-header .ui-state-default,
.ui-button,
html .ui-button.ui-state-disabled:hover,
html .ui-button.ui-state-disabled:active {
    border: 0px solid #c5c5c5;
    background-color: transparent;
    font-weight: normal;
    color: #454545;
    text-align: center;
}

.ui-datepicker .ui-datepicker-title {
    margin: 0 0em;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    padding: 0px;
    font-weight: bold;
}

.ui-datepicker {
    display: none;
    background-color: #fff;
    border-radius: 4px;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 20px;
    padding-bottom: 10px;
    width: 300px;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.1);
}

.ui-widget.ui-widget-content {
    border: 1px solid #eee;
}

#datepicker:focus > .ui-datepicker {
    display: block;
}

.ui-datepicker-prev,
.ui-datepicker-next {
    cursor: pointer;
}

.ui-datepicker-next {
    float: right;
}

.ui-state-disabled {
    cursor: auto;
    color: hsla(0, 0%, 80%, 1);
}

.ui-datepicker-title {
    text-align: center;
    padding: 10px;
    font-weight: 100;
    font-size: 20px;
}

.ui-datepicker-calendar {
    width: 100%;
}

.ui-datepicker-calendar > thead > tr > th {
    padding: 5px;
    font-size: 20px;
    font-weight: 400;
}

.ui-datepicker-calendar > tbody > tr > td > a {
    color: #000;
    font-size: 12px !important;
    font-weight: bold !important;
    text-decoration: none;
}

.ui-datepicker-calendar > tbody > tr > .ui-state-disabled:hover {
    cursor: auto;
    background-color: #fff;
}

.ui-datepicker-calendar > tbody > tr > td {
    border-radius: 100%;
    width: 44px;
    height: 30px;
    cursor: pointer;
    padding: 5px;
    font-weight: 100;
    text-align: center;
    font-size: 12px;
}

.ui-datepicker-calendar > tbody > tr > td:hover {
    background-color: transparent;
    opacity: 0.6;
}

.ui-state-hover,
.ui-widget-content .ui-state-hover,
.ui-widget-header .ui-state-hover,
.ui-state-focus,
.ui-widget-content .ui-state-focus,
.ui-widget-header .ui-state-focus,
.ui-button:hover,
.ui-button:focus {
    border: 0px solid #cccccc;
    background-color: transparent;
    font-weight: normal;
    color: #2b2b2b;
}

.ui-widget-header .ui-icon {
    background-image: url("@/assets/img/main/btns.png");
}

.ui-icon-circle-triangle-e {
    background-position: -20px 0px;
    background-size: 36px;
}

.ui-icon-circle-triangle-w {
    background-position: -0px -0px;
    background-size: 36px;
}

.ui-datepicker-calendar > tbody > tr > td:first-child a {
    color: red !important;
}

.ui-datepicker-calendar > tbody > tr > td:last-child a {
    color: #0099ff !important;
}

.ui-datepicker-calendar > thead > tr > th:first-child {
    color: red !important;
}

.ui-datepicker-calendar > thead > tr > th:last-child {
    color: #0099ff !important;
}

.ui-state-highlight,
.ui-widget-content .ui-state-highlight,
.ui-widget-header .ui-state-highlight {
    border: 0px;
    background: #f1f1f1;
    border-radius: 50%;
    /* padding-top: 10px;
padding-bottom: 10px; */
}

.inp {
    padding: 10px 10px;
    background-color: #f1f1f1;
    border-radius: 4px;
    border: 0px;
}

.inp:focus {
    outline: none;
    background-color: #eee;
}
</style>
