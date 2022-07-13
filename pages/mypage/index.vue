<template>
    <div>
        <p class="mypage-title">마이페이지</p>
        <hr />
        <div class="index-container">
            <div class="menu-container">
                <a>내정보</a>
                <a>결제내역</a>
            </div>
            <div class="content-container">
                <div v-if="menuStatus == 'myInform'">
                    <MyInform />
                </div>
                <div v-else-if="menuStatus == payment">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MyInform from '/components/MyInform.vue'
export default {
  components: { MyInform },
    data() {
        return {
            menuStatus: "myInform"
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