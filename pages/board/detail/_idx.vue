<template>
    <div>
        <!-- 게시물 상세 파트 시작 -->
        <div>
            <tbody>
                <tr>
                    <td style="text-align: center">{{ boards.idx }}</td>
                </tr>
                <tr>
                    <td style="text-align: left">{{ boards.title }}</td>
                </tr>
                <tr>
                    <td style="text-align: left">{{ boards.profile }}</td>
                </tr>
                <tr>
                    <td style="text-align: left">{{ boards.id }}</td>
                </tr>
                <tr>
                    <td style="text-align: center">{{ boards.content }}</td>
                </tr>
            </tbody>
        </div>

        <hr />
        <div class="btns">
            <button class="btn" onclick="location.href=`/board/list`">
                목록
            </button>
            <div class="edit-btns">
                <button class="btn" @click="moveTo(boards.idx)">수정</button>
                <button class="btn" @click="deleteBoard">삭제</button>
            </div>
        </div>
        <!-- 게시물 상세 파트 종료 -->

        <!-- 댓글 파트 시작 -->
        <hr />
        <h6>댓글</h6>

        <div class="reply-container">
            <table
                class="reply-content"
                v-for="(boardReplys, index) in boardReplies"
                :key="index"
            >
                <tr class="reply-header">
                    <td>{{ boardReplys.idx }}</td>
                </tr>
                <tr class="reply-header">
                    <td>{{ boardReplys.profile }}</td>
                </tr>
                <tr class="reply-header">
                    <td>{{ boardReplys.id }}</td>
                </tr>
                <tr class="reply-header">
                    <td>{{ boardReplys.insertTime }}</td>
                </tr>
                <tr class="reply-body">
                    <td>{{ boardReplys.content }}</td>
                </tr>
                <button @click="updateBoardReply()">수정</button>
                <button @click="deleteBoardReply(boardReplys.idx)">삭제</button>
                <hr />
            </table>
            <hr />
        </div>

        <hr class="divider-row" />
        <div class="input-container">
            <textarea
                class="form-control reply-input"
                placeholder="댓글을 작성해주세요"
                style="height: 100px; width: 900px"
                v-model="boardReply.content"
            ></textarea>
            <button class="btn" @click="saveBoardReply">등록</button>
        </div>
        <!-- 댓글 파트 종료 -->
    </div>
</template>

<script>
import BoardDataService from "@/services/BoardDataService";
import BoardReplyDataService from "@/services/BoardReplyDataService";

/* eslint-disable */
export default {
    name: "boardDetails",
    data() {
        return {
            boards: {
                idx: 0,
                title: "",
                profile: 0,
                id: "",
                content: "",
            },
            boardReply: {
                idx: null,
                profile: 0,
                id: "",
                insertTime: 0,
                content: "",
            },
            boardReplies: [],
            idx: this.$route.params.idx,
        };
    },
    methods: {
        moveTo(idx) {
            this.$router.push("/board/detail/update/" + idx);
        },

        // 해당 게시물 조회 서비스 호출
        retrieveBoardDetail(idx) {
            // axios로 spring에 모든 회원 조회 요청
            BoardDataService.detail(idx)
                //  성공하면 then으로 서버(spring) 데이터(response.data)가 들어옴
                .then((response) => {
                    this.boards = response.data;
                })
                //  실패하면 catch로 에러메세지가 들어옴
                .catch((e) => {
                    alert(e);
                });
        },
        deleteBoard() {
            //  axios 이용해서 회원 삭제 요청( springboot )
            BoardDataService.delete(this.boards.idx)
                //  성공하면 then으로 결과 데이터가 들어옴
                .then(() => {
                    // 화면 이동 : customers 화면으로 이동됨
                    this.$router.push("/board/list");
                })
                .catch((e) => {
                    alert(e);
                });
        },

        // 댓글 조회 서비스 호출
        retrieveBoardReply() {
            // axios로 spring에 모든 회원 조회 요청
            BoardReplyDataService.getAll()
                //  성공하면 then으로 서버(spring) 데이터(response.data)가 들어옴
                .then((response) => {
                    this.boardReplies = response.data;
                })
                //  실패하면 catch로 에러메세지가 들어옴
                .catch((e) => {
                    alert(e);
                });
        },
        // 댓글 삭제 서비스
        deleteBoardReply(idx) {
            //  axios 이용해서 회원 삭제 요청( springboot )
            // TODO: data값에 idx가 nulld이라 일단 하드코딩으로 정상 실행 확인.
            BoardReplyDataService.delete(idx)
                .then(() => {
                    location.reload();
                })
                .catch((e) => {
                    alert(e);
                });
        },
        // 댓글 추가 서비스
        saveBoardReply() {
            let data = {
                idx: this.boardReply.idx,
                content: this.boardReply.content,
                userIdx: 1,
                boardIdx: this.idx,
            };
            BoardReplyDataService.create(data)
                .then((response) => {
                    this.boardReply = response.data;
                    location.reload();
                })
                .catch((e) => {
                    alert(e);
                });
        },
    },
    mounted() {
        this.retrieveBoardDetail(this.idx);
        this.retrieveBoardReply();
    },
};
</script>

<style scoped>
.board-title {
    margin: 50px 0 30px 0;
}
.board-info {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    font-weight: 300;
    font-size: 14px;
}
.profile-img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
}
.content {
    width: 100%;
    height: 500px;
    background: lightgray;
    text-align: center;
    line-height: 500px;
}
.btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
}
.btn {
    width: 60px;
    height: 35px;
    color: #ffffff;
    background: #a30000;
    font-weight: 300;
    font-size: 14px;
}
.reply-container {
    padding: 20px 30px 0 30px;
}
.reply-content {
    font-weight: 300;
}
.reply-body {
    margin: 5px 0 20px 40px;
}
.input-container {
    display: flex;
    justify-content: center;
    background: #e5e5e5;
    padding: 30px 0;
}
.reply-input {
    margin-right: 10px;
    resize: none;
}
.divider-row {
    margin: 30px 0 0 0;
}
.text-start {
    float: left;
}
.text-end {
    float: right;
}
.justify-content-md-start {
    float: left;
}
</style>
