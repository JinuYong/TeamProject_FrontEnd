<template>
    <div class="main-body">
        <div class="error-container">
            <h1>페이지를 찾을 수 없습니다. </h1>
            <p class="inform-text">정상적인 접근이 아닙니다. 다른 주소로 시도해주세요. </p>
            <img class="logoImg" src="@/assets/img/omym_logo.png" alt="로고이미지">

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .main-body {
        min-height: calc(100vh - 370px);
        display: flex;
        align-items: center;
    }
    .error-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
    }
    .inform-text {
        padding: 20px 0 100px 0;
    }
    .logoImg {
        width: 200px;
        height: 70px;
    }
</style>