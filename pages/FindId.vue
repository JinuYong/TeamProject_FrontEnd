<template>
  <div>
    <form class="commons">
      <h1 class="h1 mt-5 mb-3 fw-normal">아이디찾기</h1>
      <h1 class="h5 mb-3 fw-normal">
        계정 생성 시 등록한 이름과 이메일을 입력해 주세요.
      </h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">이름</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">이메일</label>
      </div>

      <button class="w-100 mt-3 btn btn-lg btn-success" type="submit">
        확인
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 노인과막내 2022-</p>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "findid",
};
</script>

<style>
.commons {
  width: 40%;
  margin-top: 15%;
  margin-left: 30%;
}
</style>
