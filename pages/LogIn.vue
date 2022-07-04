<template>
    <div class="common-container">
        <form class="common">
            <h4 class="mb-4 fw-normal text-center">로그인</h4>
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
                    class="form-control me-2 mb-2"
                    id="floatingPassword"
                    placeholder="Password"
                />
                <label for="floatingPassword">비밀번호</label>
            </div>

            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> 아이디
                    저장하기
                </label>
            </div>
            <button class="btn btn-md w-100 mt-3 mb-3" type="submit">
                로그인
            </button>
            <hr />
            <!-- <button class="mt-3 mb-3 btn btn-md" type="submit">회원가입</button>
      <button class="mt-3 mb-3 btn btn-md" type="submit">
        아이디|비밀번호찾기
      </button> -->
            <div>
                아직 <a href="/signup" class="aTag">회원</a>이 아니신가요?<br />
                <a href="/findid" class="aTag">아이디</a> 또는
                <a href="/findpwd" class="aTag">비밀번호</a>를 잊으셨나요?
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

.aTag {
    color: #a30000;
}

.aTag:hover {
    color: #a30000;
}
</style>
