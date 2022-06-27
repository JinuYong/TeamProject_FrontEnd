<template>
    <div>
        <footer>
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
        </footer>
    </div>
</template>

<style scoped>
    footer {
        width: 100%;
        height: 250px;
        padding: 30px 100px;
        background: lightgray;
        bottom: 0;
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