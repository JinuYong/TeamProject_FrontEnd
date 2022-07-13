<template>
    <div class="common-container">
        <div class="common">
            <h4 class="mb-5 fw-normal text-center">회원가입 완료!</h4>

            <div class="mt-5 text-center">
                <button class="btn mb-3" @click="moveTo('/login')">
                    로그인
                </button>
                <button class="btn mb-3" @click="moveTo('/')">
                    메인으로 돌아가기
                </button>
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
    name: "signupcomplete",
    methods: {
        moveTo(url) {
            this.$router.push(url);
        }
    },
    mounted() {
        console.log(this.$route.params);
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
</style>
