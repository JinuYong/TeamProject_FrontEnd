<template>
  <div>
    <form class="common">
      <h1 class="h1 mb-4 fw-normal text-center">아이디찾기</h1>
      <h1 class="h5 mb-4 fw-normal text-center">
        계정 생성 시 등록한 이름과 이메일을 <br />
        입력해 주세요.
      </h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control mb-1"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">이름</label>
      </div>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingEmail"
          placeholder="Password"
        />
        <label for="floatingEmail">이메일</label>
      </div>
      <button class="w-100 mt-5 mb-5 btn btn-lg" type="submit">확인</button>
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
  name: "findid",
};
</script>

<style scoped>
@import "@/assets/css/project_hbs.css";
</style>
