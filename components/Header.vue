<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img class="logo-img" src="@/assets/img/omym_logo.png" alt="logo"></a>
                <span class="divider"></span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">여행상품</a>
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
                </div>
                <form class="d-flex" role="search">
                    <input class="form-control search-bar" type="search" placeholder="Search" aria-label="Search">
                    <img src="@/assets/img/search_icon.png" class="search-icon"/>
                </form>
                <img class="header-icon" src="@/assets/img/login.png" alt="login">
                <img class="header-icon" src="@/assets/img/signup.png" alt="signup">
            </div>
        </nav>
    </div>
</template>

<style scoped>
    nav {
        padding: 5px 40px;
    }
    .search-bar {
        width: 250px;
    }
    .search-icon {
        padding: 10px 0;
        width: 15px;
        transform: translateX(-200%);
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
    .dropdown-icon {
        width: 20px;
        height: 15px;
    }
    .header-icon {
        width: 25px;
        margin: 0 10px;
    }
</style>