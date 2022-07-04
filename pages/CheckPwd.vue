<template>
    <div class="common-container">
        <form class="common">
            <h4 class="mb-5 fw-normal text-center">비밀번호찾기</h4>
            <p class="mb-3 fw-normal text-center text-center">
                찾으시는 회원님의 비밀번호 입니다.
            </p>
            <h4 class="text-center">[ 잔망Loopy ]</h4>
            <div class="mt-5 text-center">
                <button class="w-50 mt-3 mb-5 btn btn-md" type="submit">
                    로그인
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
        </form>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "checkpwd",
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
