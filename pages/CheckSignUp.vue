<template>
    <div class="common-container">
        <div class="common">
            <h1 class="h1 mb-5 fw-normal text-center">회원가입 완료!</h1>

            <div class="mt-5 text-center">
                <input
                    class="btn"
                    type="submit"
                    value="메인으로 돌아가기"
                    onClick="*"
                />
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
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "checksignup",
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
</style>
