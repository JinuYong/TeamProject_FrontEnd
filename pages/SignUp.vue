<template>
    <div>
        <form class="signup">
            <h1>회원가입</h1>
            <div class="mt-4">
                <h4>
                    프로필
                    <img
                        src="@/assets/img/user.png"
                        alt="userImg"
                        class="user"
                    />
                </h4>
            </div>

            <!-- 아이디 -->
            <div class="row g-3">
                <label for="formGroupExampleInput2" class="form-label"
                    >아이디</label
                >
                <div class="col-lg-9">
                    <label for="inputPassword2" class="visually-hidden"
                        >아이디</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="id"
                        placeholder="5~15자 내외로 입력해 주세요."
                        required
                        minlength="5"
                        maxlength="15"
                    />
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-success mb-3">
                        중복확인
                    </button>
                </div>
            </div>

            <!-- 비밀번호 -->
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"
                    >비밀번호</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="대,소문자 포함 8~20자 내외로 입력해 주세요."
                    required
                    minlength="8"
                    maxlength="20"
                />
            </div>

            <!-- 비밀번호 확인 -->
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"
                    >비밀번호 확인</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="입력한 비밀번호를 다시 입력해 주세요."
                    required
                    minlength="8"
                    maxlength="20"
                />
            </div>

            <!-- 이메일 -->
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"
                    >이메일</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="example12@naver.com"
                />
            </div>
            <!-- 이름 -->
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"
                    >이름</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="공백 없이 입력해 주세요."
                    required
                />
            </div>

            <!-- 연락처 -->
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label"
                    >연락처</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="ex) 010-1111-1111"
                    required
                />
            </div>

            <!-- 주소 -->
            <label for="formGroupExampleInput2" class="form-label">주소</label>
            <div class="post-box" v-if="postOpen">
                <VueDaumPostcode @complete="oncomplete" />
            </div>
            <div class="form-box">
                <input class="col-lg-9" disabled v-model="address" />
                <div v-on:click="search" type="submit" class="btn btn-success">
                    주소검색
                </div>
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="상세 주소를 입력해 주세요."
                />
            </div>
            <div>
                <button class="w-100 mt-3 btn btn-lg btn-success" type="submit">
                    가입하기
                </button>
            </div>
            <p class="mt-5 mb-3 text-muted">&copy; 노인과막내 2022-</p>
        </form>
    </div>
</template>

<script>
import { VueDaumPostcode } from "vue-daum-postcode";

/* eslint-disable */
export default {
    name: "signup",
    data() {
        return {
            address: null,
            postOpen: false,
        };
    },
    components: {
        VueDaumPostcode,
    },
    methods: {
        search() {
            this.postOpen = true;
        },
        oncomplete: function (result) {
            if (result.userSelectedType === "R") {
                // 도로명 주소 선택
                this.address = result.roadAddress;
            } else {
                // 지번 주소 선택
                this.address = result.jibunAddress;
            }
            this.postOpen = false;
        },
    },
    // chkPW() {
    //   var pw = $("#password").val();
    //   var num = pw.search(/[0-9]/g);
    //   var eng = pw.search(/[a-z]/gi);
    //   var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    //   if (pw.length < 8 || pw.length > 20) {
    //     alert("8자리 ~ 20자리 이내로 입력해주세요.");
    //     return false;
    //   } else if (pw.search(/\s/) != -1) {
    //     alert("비밀번호는 공백 없이 입력해주세요.");
    //     return false;
    //   } else if (
    //     (num < 0 && eng < 0) ||
    //     (eng < 0 && spe < 0) ||
    //     (spe < 0 && num < 0)
    //   ) {
    //     alert("영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
    //     return false;
    //   } else {
    //     console.log("통과");
    //   }
    // },
};
</script>

<style>
.user {
    width: 100px;
    height: 100px;
    border-radius: 100px;
}

.signup {
    width: 25%;
    margin: 0 auto;
}
</style>
