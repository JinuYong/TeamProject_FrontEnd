<template>
    <div>
        <div class="mt-5">
            <h5 class="text-center mb-5">자유게시판 글쓰기</h5>
        </div>

        <div v-if="!submitted">
            <span class="btns">
                <input
                    class="writeBtn btn mt-2"
                    type="button"
                    value="이전"
                    onclick="location.href='/board/list'"
                />
                <button class="writeBtn btn mt-2" @click="saveBoard">
                    등록
                </button>
            </span>
            <hr />
            <div class="form-group mt-4">
                <label>제목</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="제목을 입력해 주세요."
                    v-model="board.title"
                />
            </div>
            <div>
                <p>내용</p>
                <div>
                    <textarea v-model="board.content">
                    내용을 입력해 주세요.
                    </textarea>
                </div>
                <div method="post">
                    <textarea
                        id="summernote"
                        name="editordata"
                        v-model="board.content"
                    >
                    내용을 입력해 주세요.
                    </textarea>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="alert alert-success" role="alert">
                게시물이 정상적으로 등록되었습니다.
            </div>
        </div>
    </div>
</template>

<script>
import BoardDataService from "@/services/BoardDataService";

/* eslint-disable */
export default {
    name: "write",
    data() {
        return {
            board: {
                idx: null,
                title: "",
                content: "",
                userIdx: 1,
            },
            submitted: false,
        };
    },
    methods: {
        // 저장 메소드 호출
        saveBoard() {
            //  회원 임시 객체 만들기
            var data = {
                title: this.board.title,
                content: this.board.content,
                userIdx: this.board.userIdx,
            };
            //  임시 회원 객체를 서버쪽으로 전달해서 DB에 insert 요청
            BoardDataService.create(data)
                //  성공하면 then으로 들어옴
                .then((response) => {
                    this.board.idx = response.data.idx;
                    this.submitted = true; // DB insert 성공
                })
                //  실패하면 catch으로 에러메세지가 들어옴
                .catch((e) => {
                    alert(e);
                });
        },
        // 새 회원가입을 위한 빈 form을 만드는 메소드(변수 초기화)
        newComplain() {
            this.submitted = false;
            this.board = {};
        },
    },
    mounted() {
        // Summer Note
        $("#summernote").summernote({
            height: 500,
            minHeight: null,
            maxHeight: null,
            focus: true,
            toolbar: [
                ["style", ["bold", "italic", "underline"]],
                ["fontsize", ["fontsize"]],
                ["color", ["color"]],
                ["para", ["paragraph"]],
                ["height", ["height"]],
                ["Insert", ["picture"]],
                ["Mics", ["codeview"]],
            ],
        });
    },
};
</script>

<style scoped>
hr {
    background-color: #a30000;
}

.writeBtn {
    border: none;
    background-color: #a30000;
    color: white;
    margin-right: 5px;
}

.btns {
    justify-content: right;
    display: flex;
}
</style>
