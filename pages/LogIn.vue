<template>
  <div>
    <form class="commons">
      <h1 class="h1 mt-5 mb-3 fw-normal">로그인</h1>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">아이디</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">비밀번호</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> 아이디 저장
        </label>
      </div>
      <div>
        <a href="/signup">회원가입</a><br />
        <a href="/findid">아이디 | 비밀번호 찾기</a>
      </div>
      <button class="w-100 mt-3 btn btn-lg btn-success" type="submit">
        로그인
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 노인과막내 2022-</p>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "login",
};
</script>

<style>
.commons {
  width: 40%;
  margin-top: 15%;
  margin-left: 30%;
}
</style>
