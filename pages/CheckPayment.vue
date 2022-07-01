<template>
    <div class="common-container">
        <div class="common">
            <h1 class="h1 mb-5 fw-normal text-center">결제 완료!</h1>

            <div class="mt-5 text-center">
                <input
                    class="btn"
                    type="submit"
                    value="메인으로 돌아가기"
                    onClick="*"
                />
            </div>
            <div class="mt-3 mb-4 text-center">
                <input
                    class="btn"
                    type="submit"
                    value="결제내역 확인하기"
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
    name: "checkpayment",
};
</script>

<style scope>
@import "@/assets/css/project_hbs.css";
</style>
