<template>
    <!--    기존 회원이 있을 경우 currentCustomer != null -->
    <div class="container mt-5 pt-5" v-if="boards">
        <div>
            <h5 class="text-center mb-5">게시글 수정</h5>
            <br />
        </div>
        <div class="mb-3">
            <label>제목</label>
            <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="제목을 입력해 주세요."
                v-model="boards.title"
            />
        </div>
        <div class="mb-3">
            <p>내용</p>
            <div>
                <textarea v-model="boards.content">
                    내용을 입력해 주세요.
                </textarea>
            </div>
        </div>
        <div class="mb-3">
            <button @click="updateBoard" class="btn btn-primary me-3">
                수정
            </button>
        </div>
        <!--    수정버튼을 클릭후 성공했을때 아래가 보임 -->
        <div class="alert alert-success" role="alert" v-if="message">
            {{ message }}
        </div>
    </div>
</template>

<script>
// 화면 설명 : 회원정보 수정 /삭제 화면
import BoardDataService from "@/services/BoardDataService";

export default {
    name: "edit-board",
    data() {
        return {
            // 객체 ( 회원정보 )
            boards: [],
            message: "",
        };
    },
    methods: {
        getBoard(idx) {
            BoardDataService.get(idx)
                .then((response) => {
                    this.boards = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
        updateBoard() {
            BoardDataService.update(this.$route.params.idx, this.boards)
                .then(() => {
                    this.message = "게시물 수정 완료";
                })
                .catch((e) => {
                    alert(this.$route.params.idx);
                    alert(e);
                });
        },
    },
    mounted() {
        this.getBoard(this.$route.params.idx);
    },
};
</script>
