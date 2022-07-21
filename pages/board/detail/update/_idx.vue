<template>
    <!--    기존 회원이 있을 경우 currentCustomer != null -->
    <div class="container mt-5 pt-5" v-if="board">
        <div>
            <h5 class="text-center mb-5">게시글 수정</h5>
        </div>
        <br />
        <div class="updateTitleInput mb-3">
            <label for="board-title">제목</label>
            <input
                type="text"
                class="form-control"
                id="board-title"
                placeholder="제목을 입력해 주세요."
                name="board-title"
                v-model="board.boardTitle"
            />
        </div>
        <div class="mb-3">
            <label for="text-area">내용</label>
            <div>
                <textarea
                    v-model="board.content"
                    id="text-area"
                    name="text-area"
                    cols="136"
                    rows="20"
                >
                     내용을 입력해 주세요.
                </textarea>
            </div>
        </div>
        <div class="updateBtn mb-3">
            <button onclick="location.href=`/board/list`" class="btn">
                취소
            </button>
            <button @click="updateBoard" class="btn">수정</button>
        </div>

        <!-- 수정버튼을 클릭후 성공했을때 아래가 보임 -->
        <div class="alert alert-success" role="alert" v-if="message">
            {{ message }}
        </div>
    </div>
</template>

<script>
// 화면 설명 : 회원정보 수정 /삭제 화면
import BoardUploadService from "@/services/BoardUploadService";

export default {
    name: "edit-board",
    data() {
        return {
            // 객체 ( 회원정보 )
            board: null,
            message: "",
        };
    },
    methods: {
        getBoard(idx) {
            BoardUploadService.get(idx)
                .then((response) => {
                    this.board = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
        updateBoard() {
            BoardUploadService.update(this.board.idx, this.board)
                .then(() => {
                    alert("게시글 수정 완료");
                    this.$router.push("/board/list");
                })
                .catch((e) => {
                    alert(e);
                });
        },
    },
    mounted() {
        this.getBoard(this.$route.params.idx);
        // localStorage.setItem("idx", "141");
        // localStorage.getItem("idx");
    },
};
</script>

<style scoped>
.updateTitleInput {
    margin-right: auto;
    width: 100%;
}
.updateBtn {
    display: flex;
    margin-right: auto;
}
.btn {
    background-color: #a30000;
    box-shadow: none;
    color: white;
    border: none;
    font-weight: 300;
    font-size: 14px;
    margin: 2px;
}
</style>
