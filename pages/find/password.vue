<template>
    <div class="common-container">
        <form class="common" @submit.prevent>
            <h4 class="mb-4 fw-normal text-center">비밀번호찾기</h4>
            <p class="mb-5 fw-normal text-center">
                계정 생성 시 등록한 아이디와 이메일을 입력해 주세요.
            </p>

            <div class="form-floating">
                <input
                    type="text"
                    class="form-control mb-1"
                    id="user_id"
                    placeholder="id"
                    v-model="user.id"
                />
                <label for="user_id">아이디</label>
            </div>
            <div class="form-floating">
                <input
                    type="email"
                    class="form-control"
                    id="user_email"
                    placeholder="email"
                    v-model="user.email"
                />
                <label for="user_email">이메일</label>
            </div>
            <button class="w-100 mt-5 mb-5 btn btn-md" @click="findUserPassword">
                확인
            </button>
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
        

        <!-- 모달 -->
        <div class="modal fade" id="passwordChange" data-bs-backdrop="static" tabindex="-1" aria-labelledby="passwordChangeLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="passwordChangeLabel">비밀번호 변경</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body inform-inputs modal-inputs">
                        <div v-if="!changeSuccess">
                            <p class="input-title">변경하실 비밀번호를 입력해주세요.</p>
                            <div>
                                <form ref="form">
                                    <label for="user_password" class="form-label">비밀번호</label>
                                    <input
                                        type="password"
                                        placeholder="대,소문자 포함 8~20자 내외로 입력해 주세요."
                                        v-model="user.newPassword"
                                        class="form-control"
                                    />
                                    <!-- 비밀번호 확인 -->
                                    <label for="re_password" class="form-label"
                                        >비밀번호 확인</label
                                    >
                                    <input
                                        type="password"
                                        placeholder="입력한 비밀번호를 다시 입력해 주세요."
                                        v-model="user.rePassword"
                                        class="form-control"
                                    />
                                    <p v-if="validateResult" class="validateError">{{validateErrorMsg}}</p>

                                </form>
                            </div>
                        </div>
                        <div v-else class="input-title">
                            <p>{{changeSuccess ? "비밀번호가 변경되었습니다!" : "비밀번호 변경에 실패했습니다. 다시 시도해주세요. "}}</p>
                        </div>
                    </div>
                    <div class="modal-footer inform-inputs">
                        <!-- <button type="button" class="btn" data-bs-dismiss="modal" @click="modalReset">{{changeSuccess ? "확인" : "취소"}}</button> -->
                        <button type="button" class="btn" data-bs-dismiss="modal" @click="moveTo('/login')" v-if="changeSuccess">로그인</button>
                        <button type="button" class="btn" data-bs-dismiss="modal" @click="modalReset" v-if="!changeSuccess">취소</button>
                        <button type="button" class="btn" @click="passwordChange" v-if="!changeSuccess">확인</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 모달 -->
        <div class="modal fade" tabindex="-1" ref="confirmModal" id="myModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="refresh"></button>
                    </div>
                    <div class="modal-body">
                        <p>입력한 정보와 일치하는 회원정보를 찾을 수 없습니다. </p>
                        <p>다시 입력해주세요. </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="refresh">확인</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "findpassword",
    data() {
        return {
            user: {
                id: "",
                email: "",
                newPassword: "",
                rePassword: ""
            },
            changeSuccess: false,
            validateResult: false,
            validateErrorMsg: "",
        }
    },
    methods: {
        refresh() {
            this.$router.go(0);
        },
        async findUserPassword(e) {
            e.preventDefault();
            
            let res = await this.$axios.post("/api/find/password", this.user
            ).then(res => {
                console.log(res);
                if (res.data != "" && this.user.id == res.data.id) {
                    $('#passwordChange').modal('show');
                } else {
                    $('#myModal').modal('show');
                }
            })
        },
        async passwordChange() {
            //비밀번호 체크
            const pattern_blank = /[\s]/g;
            const patten_complete_kor = /[가-힣]/;
            if (pattern_blank.test(this.user.newPassword) || patten_complete_kor.test(this.user.newPassword) 
            || this.user.newPassword.length < 8 || this.user.newPassword.length > 20) {
                this.validateErrorMsg = "비밀번호는 공백없이 8~20자로 구성해주세요. ";
                this.validateResult = true;
                return;
            }
            if (this.user.newPassword == this.user.rePassword) {
                this.$axios.post('/api/myinform/changepw', {id:this.user.id, password:this.user.newPassword}).then(res => {
                    if (res.data) {
                        console.log(res);
                        this.changeSuccess = true;
                    }
                });
            } else {
                this.validateErrorMsg = "비밀번호가 일치하지 않습니다!";
                this.validateResult = true;
            }
        },
        modalReset() {
            this.validateResult = false;
            this.user.newPassword = "";
            this.user.rePassword = "";
        },
        moveTo(url) {
            console.log(url)
            this.$router.push(url);
        },
    },
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
    .modal-inputs {
        padding: 40px 50px 30px 50px;
    }
    .modal-inputs input{
        width: 100%;
        margin-bottom: 30px;
    }
    .validateError {
        text-align: start;
        font-size: 12px;
        font-weight: 300;
        color: #a30000;
        margin-top: -25px;
    }
</style>
