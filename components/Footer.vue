<template>
    <div>
        <!-- 푸터 -->
        <footer>
            <div class="footer-content">
                <img
                    class="logo-img"
                    src="@/assets/img/omym_logo.png"
                    alt="logo"
                />
                <div class="footer-icons">
                    <a href="https://ko-kr.facebook.com/"><img class="footer-icon" src="@/assets/img/facebook.svg"/></a>
                    <a href="https://github.com/"><img class="footer-icon" src="@/assets/img/github.svg"/></a>
                    <a href="https://www.google.co.kr"><img class="footer-icon" src="@/assets/img/google.svg"/></a>
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
    
}
</script>
<style scoped>
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
    .logo-img {
        width: 150px;
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