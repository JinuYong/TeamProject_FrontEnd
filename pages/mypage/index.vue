<template>
    <div>
        <p class="mypage-title">마이페이지</p>
        <hr />
        <div class="index-container">
            <div class="menu-container">
                <a @click="changeMenu('myInform')">내정보</a>
                <a @click="changeMenu('payment')">결제내역</a>
            </div>
            <div class="content-container">
                <div v-if="menuStatus == 'myInform'">
                    <MyInform />
                </div>
                <div v-else-if="menuStatus == 'payment'">
                    <Payment />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "MyPage",
    data() {
        return {
            menuStatus: "myInform",
        }
    },
    methods: {
        changeMenu(val) {
            this.menuStatus = val;
        }
    },
    mounted() {
        if (this.$route.params.show == 'payment') {
            this.menuStatus = "payment";
        }
        let user = localStorage.getItem("user");
        if (!user) {
            console.log(user);
            alert("로그인 후 이용해주세요. ");
            this.$router.push('/login');
        }
    },
}
</script>
<style scoped>
    .index-container {
        width: 100%;
        display: flex;
    }
    .mypage-title {
        padding: 30px 0 20px 0;
        text-align: center;
        font-size: 1.7rem;
        font-weight: 500;
    }
    .menu-container {
        float: left;
        width: 250px;
        /* height: calc(100vh - 450px); */
        border-right: #e5e5e5 1px solid;
    }
    .menu-container > a {
        display: block;
        height: 50px;
        padding: 10px 30px;
        text-align: center;
        cursor: pointer;
        font-weight: 500;
    }
    .menu-container > a:hover {
        background: #a30000;
        color: white;
    }
    .content-container {
        margin: 0 auto;
    }
</style>