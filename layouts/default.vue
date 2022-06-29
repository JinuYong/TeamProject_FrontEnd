<template>
    <div>
        <!-- 헤더 -->
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img class="logo-img" src="@/assets/img/omym_logo.png" alt="logo"></a>
                <button class="navbar-toggler collapse-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                    </svg>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <span class="divider"></span>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" @click="moveTo('/ItemList/ItemList')">여행상품</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">여행정보</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                게시판
                                <img class="dropdown-icon" src="@/assets/img/chevron-down.png">
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">자유게시판</a></li>
                                <li><a class="dropdown-item" href="#">Q&A</a></li>
                            </ul>
                        </li>
                    </ul>
                <form class="d-flex" role="search">
                    <input class="form-control main-searchbar me-2" type="search" placeholder="Search" aria-label="Search" @keyup="searchKeyword()">
                    <img src="@/assets/img/search_icon.png" class="search-icon"/>
                </form>
                <img class="header-icon" src="@/assets/img/login.png" alt="login">
                <img class="header-icon" src="@/assets/img/signup.png" alt="signup">
                </div>
            </div>
        </nav>

        <section>
            <Nuxt />
        </section>

        <!-- 푸터 -->
        <footer>
            <div class="footer-content">
                <img class="logo-img" src="@/assets/img/omym_logo.png" alt="logo">
                <div class="footer-icons">
                    <img class="footer-icon" src="@/assets/img/facebook.svg">
                    <img class="footer-icon" src="@/assets/img/github.svg">
                    <img class="footer-icon" src="@/assets/img/google.svg">
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
        return {
    
        }
    },
    methods: {
        moveTo(url) {
            $nuxt.$router.push(url);
        },
        searchKeyword() {
            // 검색기능 구현
        }
    },  
    
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;500&display=swap');

    * { 
    font-family: 'Noto Sans KR', sans-serif;
    }
    section {
        width: 1024px;
        min-height: 599px;
        margin: 0 auto;
        padding-bottom: 50px;
    }
    nav {
        box-sizing: border-box;
        height: 60px;
        background: #ffffff;
        border-bottom: 1px solid #E5E5E5;
    }
    .container-fluid {
        width: 1024px;
        margin: 0 auto;
    }
    .main-searchbar {
        width: 250px;
        border-radius: 50px 50px;
        border: 2px solid #A30000;
    }
    .main-searchbar::placeholder {
        color: #b1b1b1;
        font-weight: 300;
        font-size: 14px;
    }
    .search-icon {
        padding: 10px 0;
        width: 15px;
        transform: translateX(-250%);
    }
    .logo-img {
        width: 150px;
    }
    .divider {
        width: 2px;
        height: 30px;
        background: gray;
        margin: 0 20px;
    }
    .nav-link {
        font-weight: 500;
        font-size: 18px;
        display: inline-flex;
        align-items: center;
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
    }

    footer {
        width: 100%;
        height: 250px;
        padding: 30px 100px;
        background: #eaebee;
        bottom: 0;
    }
    .footer-content {
        width: 1024px;
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
</style>

