<template>
    <div>
        <!-- 헤더 -->
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"
                    ><img
                        class="logo-img"
                        src="@/assets/img/header/mainLogo.png"
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
                            v-model="keyword"
                            @keypress.enter.prevent="searchKeyword"
                        />

                        <img
                            src="@/assets/img/search_icon.png"
                            class="search-icon"
                            @click.prevent="searchKeyword"
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
                            src="@/assets/img/header/person_add.svg"
                            alt="signup"
                            @click="moveTo('/signup')"
                        />
                        <img
                            class="header-icon"
                            src="@/assets/img/header/login.svg"
                            alt="login"
                            @click="moveTo('/login')"
                        />
                    </div>

                    <!--      로그아웃 태그 추가-->
                    <!--      유저가 로그인하면 아래 메뉴가 보임 : 로그아웃 -->
                    <div v-if="currentUser">
                        <span class="user_name">{{ currentUser.username }}</span>
                        <img
                            class="header-icon"
                            src="@/assets/img/header/person.svg"
                            alt="profile"
                            @click="moveTo('/mypage')"
                        />
                        <img
                            class="header-icon"
                            src="@/assets/img/header/shopping_cart_black.svg"
                            alt="cart"
                            @click="moveTo('/shoppingCart/shoppingCart')"
                        />
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
    </div>
</template>
<script>
export default {
     data() {
        return {
            keyword:""
        };
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
            $nuxt.$router.push({
                path:'/SearchResult',
                query:{
                    keyword:this.keyword
                }
            });
            $nuxt.$router.reload();
        },
        // TODO:
        logOut() {
            // dispatch 호출하는 메소드 : actions 있는 메소드를 호출함
            this.$store.dispatch("auth/logout");
            //   로그아웃 후 이동할 페이지 지정 : login 페이지
            this.$router.push("/login");
        },
    },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@200;300;400&display=swap');
    * {
        font-family: 'IBM Plex Sans KR';
    }
    /* header */
    nav {
        box-sizing: border-box;
        height: 70px;
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
        font-weight: 200;
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
    .user_name {
        font-size: 12px;
        font-weight: 300;
        margin: 0 -10px 0 20px;
    }
    .logo-img {
        width: 150px;
    }
    .divider-col {
        width: 1px;
        height: 35px;
        background: #959595;
        margin: 0 20px;
    }
    .nav-link {
        font-weight: 400;
        font-size: 20px;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        color: #494949;
    }
    .nav-link:hover {
        color: #a30000 !important;
        cursor: pointer;
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
    .dropdown-item{
        cursor: pointer;
    }
</style>
