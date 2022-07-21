<template>
    <div class="common-container">
        <div class="common" v-if="payment">
            <h4 class="mb-5 fw-normal text-center">결제가 완료되었습니다.</h4>

            <div class="mt-5 text-center">
                <button class="btn" type="submit" onClick="location.href='/'">
                    메인으로 돌아가기
                </button>
            </div>
            <div class="mt-3 mb-4 text-center">
                <button
                    class="btn"
                    @click="paymentShow"
                >
                    결제내역 확인하기
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

        <div v-if="!payment">
            <Payment />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "checkpayment",
    data() {
        return {
            payment: true
        }
    },
    methods: {
        paymentShow(e) {
            e.preventDefault();
            
            this.payment = false;
            this.$router.push({ name: 'mypage', params: { show: 'payment' }})
        }
    }
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
