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
            <div class="row">
                <label for="formGroupExampleInput2" class="form-label"
                    >아이디</label
                >
                <div class="col-lg-9">
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
                    <button type="submit" class="btn mb-3">중복확인</button>
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
            <div class="row">
                <label for="formGroupExampleInput2" class="form-label"
                    >주소</label
                >
                <div class="col-lg-9">
                    <input
                        type="text"
                        class="form-control"
                        id="id"
                        disabled
                        v-model="address"
                        placeholder="우측의 '주소검색' 버튼을 클릭하세요."
                    />
                </div>
                <div class="col-auto">
                    <button v-on:click="search" type="submit" class="btn">
                        주소검색
                    </button>
                </div>
                <div class="post-box" v-if="postOpen">
                    <VueDaumPostcode @complete="oncomplete" />
                </div>
                <div class="mt-1">
                    <input
                        type="text"
                        class="form-control mt-2"
                        id="formGroupExampleInput2"
                        placeholder="상세 주소를 입력해 주세요."
                    />
                </div>
            </div>
            <div>
                <button class="w-100 mt-5 btn btn-lg" type="submit">
                    가입하기
                </button>
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
};
</script>

<style scope>
.signup {
    min-width: 500px;
    width: 500px;
    margin-top: 5%;
    margin-left: 35%;
    margin-bottom: 5%;
    border: 5px solid #a30000;
    border-radius: 10px;
    padding: 40px;
}

.user {
    width: 100px;
    height: 100px;
    border-radius: 100px;
}

.adds {
    border-bottom: 2px solid #a30000;
    border-top: none;
    border-left: none;
    border-right: none;
}

.btn {
    background: #a30000;
    color: white;
}

.logoPic {
    width: 150px;
    height: 40px;
}

.logoPic-flex {
    display: flex;
    justify-content: center;
}

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
</style>
