<template>
    <div>
        <div>
            <!-- 여행정보 게시물 출력 파트 시작 -->
            <!--            TODO: 아래 출력했음 -->
            <h4 class="board-title">
                {{ boards.idx }} | {{ boards.boardTitle }}
            </h4>

            <div class="board-info">
                <div>
                    <img
                        v-if="this.boards.profileUrl"
                        class="profile-img"
                        :src="
                            'http://localhost:8000/image/' + boards.profileUrl
                        "
                        alt="프로필"
                    />
                    {{ boards.id }}
                </div>
                <span
                    >{{ boards.insertTime }} | 조회수 {{ boards.count }} |
                    댓글수 {{ replyCounts }}
                </span>
            </div>
            <hr />

            <div class="content2">
                <img :src="boards.url" alt="boardsPic" class="boardsPic" />
            </div>
            <div class="content1">
                <div class="textareas">
                    {{ boards.content }}
                </div>
            </div>
        </div>
        <hr />

        <div class="btns">
            <button class="btn" onclick="location.href=`/board/list`">
                목록
            </button>
            <div class="edit-btns">
                <button class="btn" @click="moveTo">수정</button>
                <button class="btn" @click="deleteBoard">삭제</button>
            </div>
        </div>
        <!-- 게시물 상세 파트 종료 -->

        <!-- 댓글 파트 시작 -->
        <hr class="divider-row" />
        <div class="input-container">
            <textarea
                class="form-control reply-input"
                :placeholder="this.input_message"
                style="height: 100px; width: 900px"
                v-model="boardReply.content"
                ref="reviewReg"
                :class="{reviewDisable:this.userAuth}"
            ></textarea>
            <button class="btn" @click="saveBoardReply" ref="reviewbtn">등록</button>
        </div>

        <hr />
        <h6>댓글</h6>
        <div
            class="bg-white b p-4 mb-4 restaurant-detailed-ratings-and-reviews"
            v-for="(boardReplys, index) in boardReplies"
            :key="index"
        >
            <div class="reviews-members py-4">
                <div class="media">
<!--                    <a href="#">-->
<!--                        <img-->
<!--                            v-if="boardReplys.profileUrl"-->
<!--                            alt="Generic placeholder image"-->
<!--                            :src="-->
<!--                                'http://localhost:8000/image/' +-->
<!--                                boardReplys.profileUrl-->
<!--                            "-->
<!--                            class="mr-3 rounded-pill"-->
<!--                        />-->
<!--                    </a>-->

                    <div class="media-body">
                        <div class="reviews-members-header">
                            <h6 class="mb-1">
                                <a class="text-black" href="#">{{
                                    boardReplys.id
                                }}</a>
                            </h6>
                            <p class="text-gray mb-2">
                                {{ boardReplys.insertTime }}
                            </p>
                        </div>
                        <div class="reviews-members-body">
                            <p>
                                {{ boardReplys.content }}
                            </p>
                        </div>
                        <div>
                            <button
                                @click="updateBoardReplies"
                                class="btn replyBtn"
                            >
                                수정
                            </button>
                            <button
                                @click="deleteBoardReply(boardReplys.idx)"
                                class="btn replyBtn"
                            >
                                삭제
                            </button>
                            <div v-if="sameId" style="margin-top: 10px">
                                <input
                                    type="text"
                                    v-model="boardReplys.content"
                                />
                                <button
                                    @click="
                                        updateBoardReply(
                                            boardReplys.idx,
                                            boardReplys
                                        )
                                    "
                                    class="btn"
                                >
                                    확인
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
        <!-- 댓글 파트 종료 -->
    </div>
</template>

<script>
import BoardReplyDataService from "@/services/BoardReplyDataService";
import BoardUploadService from "~/services/BoardUploadService";

/* eslint-disable */
export default {
    name: "boardDetails",
    data() {
        return {
            input_message: "댓글을 작성해주세요. ",
            idx: null,
            replyCounts: 0,
            boards: [],
            boardReply: {
                idx: null,
                profileUrl: "",
                id: "",
                insertTime: 0,
                content: "",
            },
            boardReplies: null,
            // idx: this.$route.params.idx,
            sameId: false,
            value: 4,
            count: 0,
            // viewBtn:
            //     localStorage.getItem("idx") == this.boardReplies[0].userIdx
            //         ? true
            //         : false,
            userAuth: localStorage.getItem("user")
        };
    },
    methods: {
        updateBoardReplies() {
            if (this.sameId == false) {
                this.sameId = true;
            } else {
                this.sameId = false;
            }
        },
        moveTo() {
            this.$router.push("/board/detail/update/" + this.boards.idx);
        },
        retrieveReplyCount(idx) {
            BoardUploadService.getReplyCount(idx)
                .then((response) => {
                    this.replyCounts = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
        retrieveCounts(idx) {
            BoardUploadService.detail(idx).then(() => {
                console.log("");
            });
        },
        retrieveBoardUploadImage(idx) {
            BoardUploadService.getDetailFile(idx)
                .then((response) => {
                    this.boards = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
        deleteBoard() {
            //  axios 이용해서 회원 삭제 요청( springboot )
            BoardUploadService.delete(this.boards.idx)
                //  성공하면 then으로 결과 데이터가 들어옴
                .then(() => {
                    // 화면 이동 : customers 화면으로 이동됨
                    alert("자유게시판 게시물 삭제 완료");
                    this.$router.push("/board/list");
                })
                .catch((e) => {
                    alert(e);
                });
        },

        // 댓글 조회 서비스
        retrieveBoardReply() {
            BoardReplyDataService.get(this.$route.params.idx)
                .then((response) => {
                    this.boardReplies = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
        // 댓글 수정 서비스
        updateBoardReply(idx, boards) {
            BoardReplyDataService.update(idx, boards)
                .then(() => {
                    alert("댓글 수정 완료");
                    location.reload();
                })
                .catch((e) => {
                    alert(e);
                });
        },
        // 댓글 삭제 서비스
        deleteBoardReply(idx) {
            //  axios 이용해서 회원 삭제 요청( springboot )
            BoardReplyDataService.delete(idx)
                .then(() => {
                    alert("댓글 삭제 완료");
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
                userIdx: this.loginIdx,
                boardIdx: this.boards.idx,
            };
            BoardReplyDataService.create(data)
                .then((response) => {
                    this.boardReply = response.data;
                    alert("댓글 등록 완료");
                    location.reload();
                })
                .catch((e) => {
                    alert(e);
                });
        },
    },
    mounted() {
        this.loginIdx = JSON.parse(localStorage.getItem("user")).idx;
        this.retrieveReplyCount(this.$route.params.idx);
        this.retrieveBoardReply();
        this.retrieveBoardUploadImage(this.$route.params.idx);
        this.retrieveCounts(this.$route.params.idx);
        // localStorage.setItem("idx", "141");
        // localStorage.getItem("idx");
        let userAuth = localStorage.getItem("user");
        if (userAuth == undefined) {
            this.$refs.reviewReg.disabled = true;
            this.input_message = "로그인이 필요합니다";
            this.$refs.reviewbtn.disabled = true;
        }
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
.content2 {
    width: 70%;
    height: 70%;
    background: #e5e5e5;
    margin: 0 auto;
    line-height: 1em;
}
.content1 {
    width: 70%;
    height: 70%;
    background: #e5e5e5;
    margin: 0 auto;
    text-align: left;
    line-height: 1em;
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
    border: none;
    box-shadow: none;
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

body {
    background: #dcdcdc;
}

.total-like-user-main a {
    display: inline-block;
    margin: 0 -17px 0 0;
}

.total-like {
    border: 1px solid;
    border-radius: 50px;
    display: inline-block;
    font-weight: 500;
    height: 34px;
    line-height: 33px;
    padding: 0 13px;
    vertical-align: top;
}

.restaurant-detailed-ratings-and-reviews hr {
    margin: 0 -24px;
}

.graph-star-rating-header .star-rating {
    font-size: 17px;
}

.progress {
    background: #f2f4f8 none repeat scroll 0 0;
    border-radius: 0;
    height: 30px;
}

.rating-list {
    display: inline-flex;
    margin-bottom: 15px;
    width: 100%;
}

.rating-list-left {
    height: 16px;
    line-height: 29px;
    width: 10%;
}

.rating-list-center {
    width: 80%;
}

.rating-list-right {
    line-height: 29px;
    text-align: right;
    width: 10%;
}

.restaurant-slider-pics {
    bottom: 0;
    font-size: 12px;
    left: 0;
    z-index: 999;
    padding: 0 10px;
}

.restaurant-slider-view-all {
    bottom: 15px;
    right: 15px;
    z-index: 999;
}

.offer-dedicated-nav .nav-link.active,
.offer-dedicated-nav .nav-link:hover,
.offer-dedicated-nav .nav-link:focus {
    border-color: #3868fb;
    color: #3868fb;
}

.offer-dedicated-nav .nav-link {
    border-bottom: 2px solid #fff;
    color: #000000;
    padding: 16px 0;
    font-weight: 600;
}

.offer-dedicated-nav .nav-item {
    margin: 0 37px 0 0;
}

.restaurant-detailed-action-btn {
    margin-top: 12px;
}

.restaurant-detailed-header-right .btn-success {
    border-radius: 3px;
    height: 45px;
    margin: -18px 0 18px;
    min-width: 130px;
    padding: 7px;
}

.text-black {
    color: #000000;
}

.icon-overlap {
    bottom: -23px;
    font-size: 74px;
    opacity: 0.23;
    position: absolute;
    right: -32px;
}

.menu-list img {
    width: 41px;
    height: 41px;
    object-fit: cover;
}

.restaurant-detailed-header-left img {
    width: 88px;
    height: 88px;
    border-radius: 3px;
    object-fit: cover;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.reviews-members .media .mr-3 {
    width: 56px;
    height: 56px;
    object-fit: cover;
}

.rounded-pill {
    border-radius: 50rem !important;
}

.total-like-user {
    border: 2px solid #fff;
    height: 34px;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    width: 34px;
}

.total-like-user-main a {
    display: inline-block;
    margin: 0 -17px 0 0;
}

.total-like {
    border: 1px solid;
    border-radius: 50px;
    display: inline-block;
    font-weight: 500;
    height: 34px;
    line-height: 33px;
    padding: 0 13px;
    vertical-align: top;
}

.restaurant-detailed-ratings-and-reviews hr {
    margin: 0 -24px;
}

.graph-star-rating-header .star-rating {
    font-size: 17px;
}

.progress {
    background: #f2f4f8 none repeat scroll 0 0;
    border-radius: 0;
    height: 30px;
}

.rating-list {
    display: inline-flex;
    margin-bottom: 15px;
    width: 100%;
}

.rating-list-left {
    height: 16px;
    line-height: 29px;
    width: 10%;
}

.rating-list-center {
    width: 80%;
}

.rating-list-right {
    line-height: 29px;
    text-align: right;
    width: 10%;
}

.restaurant-slider-pics {
    bottom: 0;
    font-size: 12px;
    left: 0;
    z-index: 999;
    padding: 0 10px;
}

.restaurant-slider-view-all {
    bottom: 15px;
    right: 15px;
    z-index: 999;
}

.progress {
    background: #f2f4f8 none repeat scroll 0 0;
    border-radius: 0;
    height: 30px;
}

.text-gray {
    color: gray;
}

.textareas {
    text-align: left;
    white-space: pre-line;
    padding: 15px;
}
.boardsPic {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1%;
    margin: 0 auto;
}
.replyBtn {
    border: none;
}
hr {
    background-color: #e5e5e5;
}
</style>
