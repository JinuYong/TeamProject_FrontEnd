<template>
  <div>
    <form class="common">
      <h1 class="h1 mb-5 fw-normal text-center">아이디찾기</h1>
      <h1 class="h5 mb-3 fw-normal text-center text-center">
        찾으시는 회원님의 아이디 입니다. <br /><br />
        <h3>[ Janmang루피 ]</h3>
      </h1>
      <div class="mt-5 text-center">
        <button class="w-50 mt-3 btn btn-lg" type="submit">비밀번호찾기</button
        ><br />
        <button class="w-50 mt-3 mb-5 btn btn-lg" type="submit">로그인</button>
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
  name: "checkid",
};
</script>

<style scoped>
@import "@/assets/css/project_hbs.css";
</style>
