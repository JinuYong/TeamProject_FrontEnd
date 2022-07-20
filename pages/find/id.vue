<template>
    <div class="common-container">
        <form class="common" @submit.prevent>
            <h4 class="mb-4 fw-normal text-center">아이디찾기</h4>
            <div v-if="!this.userId">
                <p class="mb-5 fw-normal text-center">
                    계정 생성 시 등록한 이름과 이메일을 입력해 주세요.
                </p>

                <div class="form-floating">
                    <input
                        type="text"
                        class="form-control mb-1"
                        id="user_name"
                        placeholder="name"
                        v-model="user.name"
                    />
                    <label for="user_name">이름</label>
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
                <button class="w-100 mt-5 mb-5 btn btn-md" @click="findUserId">
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
            </div>

            <div v-if="this.userId">
                <p class="mb-3 fw-normal text-center">
                찾으시는 회원님의 아이디 입니다.
                </p>
                <h4 class="text-center">{{"[ " + this.userId + " ]"}}</h4>
                <div class="mt-5 text-center">
                    <button class="w-50 mt-3 btn btn-md" @click.stop="$router.push('/find/password/')">
                        비밀번호찾기</button
                    ><br />
                    <button class="w-50 mt-3 mb-5 btn btn-md" @click="moveTo('/login')">
                        로그인
                    </button>
                </div>
            </div>
        </form>

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
/* eslint-disable */
export default {
    name: "findid",
    data() {
        return {
            user: {
                name: "",
                email: ""
            },
            userId: null
        }
    },
    methods: {
        async findUserId(e) {
            e.preventDefault();
            
            let res = await this.$axios.post("/api/find/id", this.user
            ).then(res => {
                console.log(res);
                if (res.data == "") {
                    $('#myModal').modal('show');
                } else {
                    this.userId = res.data;
                }
            })
        },
        refresh() {
            this.$router.go(0);
        },
        moveTo(url) {
            console.log(url)
            this.$router.push(url);
        },
    },
    mounted() {
        
    },
};
</script>

<style scoped>
@import "@/assets/css/project_hbs.css";

.modal-header {
    border: none;
}
.modal-body {
    text-align: center;
}
.modal-footer {
    padding: 0;
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
