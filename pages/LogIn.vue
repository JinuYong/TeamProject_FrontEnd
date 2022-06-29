<template>
  <div>
    <form class="common">
      <h1 class="h1 mb-4 fw-normal text-center">로그인</h1>
      <div class="form-floating">
        <input
          type="text"
          class="form-control mt-5 mb-1"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">아이디</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control mb-2"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">비밀번호</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> 아이디 저장하기
        </label>
      </div>
      <button class="w-100 mt-3 mb-3 btn btn-lg" type="submit">로그인</button>
      <hr />
      <!-- <button class="mt-3 mb-3 btn btn-md" type="submit">회원가입</button>
      <button class="mt-3 mb-3 btn btn-md" type="submit">
        아이디|비밀번호찾기
      </button> -->
      <div>
        <a href="/signup" class="aTag">아직 회원이 아니신가요?</a><br />
        <a href="/findid" class="aTag">아이디 또는 비밀번호를 잊으셨나요?</a>
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
  name: "login",
};
</script>

<style>
@import "@/assets/css/project_hbs.css";

.aTag {
  text-decoration-line: none;
  color: black;
}

.aTag:hover {
  color: black;
}
</style>
