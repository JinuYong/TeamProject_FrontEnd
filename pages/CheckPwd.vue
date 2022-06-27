<template>
  <div class="commons2">
    <h1 class="h1 mt-5 mb-3 fw-normal">비밀번호찾기</h1>
    <h1 class="h5 mb-5 fw-normal">찾으시는 비밀번호는 [] 입니다.</h1>
    <div>
      <h1 class="h6 mb-1 fw-normal">로그인 화면으로 이동하기</h1>
      <input
        class="float-right btn-success"
        type="submit"
        value="로그인"
        onClick="location.href='/login'"
      />
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 노인과막내 2022-</p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "checkid",
};
</script>

<style>
.commons2 {
  width: 40%;
  margin-top: 15%;
  margin-left: 40%;
}
</style>
