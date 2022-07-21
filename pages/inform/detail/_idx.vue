<template>
    <div>
        <div>
            <!-- 여행정보 게시물 출력 파트 시작 -->
            <h4 class="board-title">{{ inform.idx }} | {{ inform.title }}</h4>

            <div class="board-info">
                <div>
                    <img
                        v-if="this.inform.profileUrl"
                        class="profile-img"
                        :src="
                            'http://localhost:8000/image/' + inform.profileUrl
                        "
                        alt="프로필"
                    />
                    {{ inform.id }}
                </div>
                <span
                    >{{ inform.insertTime }} | 조회수 {{ inform.count }} |
                    댓글수 {{ replyInformCounts }}
                </span>
            </div>
            <hr />

            <div class="content2">
                <img :src="inform.url" alt="boardsPic" class="boardsPic" />
            </div>
            <div class="content1">
                <div class="textareas">
                    {{ inform.content }}
                </div>
            </div>
        </div>
        <hr />

        <div class="btns">
            <button class="btn" onclick="location.href=`/inform/list`">
                목록
            </button>
            <div class="edit-btns">
                <button class="btn" @click="moveTo">수정</button>
                <button class="btn" @click="deleteInform">삭제</button>
            </div>
        </div>
        <!-- 여행정보 게시물 출력 파트 종료 -->

        <!-- 댓글 파트 시작 -->
        <hr class="divider-row" />
        <div class="input-container">
            <textarea
                class="form-control reply-input"
                placeholder="댓글을 작성해주세요"
                v-model="informReply.content"
            ></textarea>
            <button class="btn" @click="saveInformReply">등록</button>
        </div>

        <hr />
        <h6>댓글</h6>
        <div
            class="bg-white b p-4 mb-4 restaurant-detailed-ratings-and-reviews"
            v-for="(informReply, index) in informReplies"
            :key="index"
        >
            <div class="reviews-members py-4">
                <div class="media">
                    <a href="#">
                        <img
                            v-if="informReply.profileUrl"
                            alt="Generic placeholder image"
                            :src="
                                'http://localhost:8000/image/' +
                                informReply.profileUrl
                            "
                            class="mr-3 rounded-pill"
                        />
                    </a>
                    <div class="media-body">
                        <div class="reviews-members-header">
                            <h6 class="mb-1">
                                <a class="text-black" href="#">{{
                                    informReply.id
                                }}</a>
                            </h6>
                            <p class="text-gray mb-2">
                                {{ informReply.insertTime }}
                            </p>
                        </div>
                        <div class="reviews-members-body">
                            <p>
                                {{ informReply.content }}
                            </p>
                        </div>
                        <div>
                            <button
                                @click="updateInformReplies"
                                class="btn replyBtn"
                            >
                                수정
                            </button>
                            <button
                                @click="deleteInformReply(informReply.idx)"
                                class="btn replyBtn"
                            >
                                삭제
                            </button>
                            <div v-if="sameId" style="margin-top: 10px">
                                <input
                                    type="text"
                                    v-model="informReply.content"
                                />
                                <button
                                    @click="
                                        updateInformReply(
                                            informReply.idx,
                                            informReply
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
import InformUploadService from "@/services/InformUploadService";
import InformReplyDataService from "@/services/InformReplyDataService";

/* eslint-disable */
export default {
    name: "informDetail",
    data() {
        return {
            inform: [],
            informReply: {
                id: "",
                idx: null,
                insertTime: 0,
                content: "",
                profileUrl: "",
            },
            informReplies: [],
            // idx: this.$route.params.idx,
            sameId: false,
            value: 4,
            count: 0,
            replyInformCounts: 0,
        };
    },
    methods: {
        retrieveInformReplyCount(idx) {
            InformUploadService.getReplyCount(idx)
                .then((response) => {
                    this.replyInformCounts = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
        updateInformReplies() {
            if (this.sameId == false) {
                this.sameId = true;
            } else {
                this.sameId = false;
            }
        },
        moveTo() {
            this.$router.push("/inform/detail/update/" + this.inform.idx);
        },
        retrieveCounts(idx) {
            InformUploadService.get(idx).then(() => {
                console.log("");
            });
        },
        retrieveInformUploadImage(idx) {
            InformUploadService.getDetailFiles(idx)
                .then((response) => {
                    this.inform = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
        deleteInform() {
            //  axios 이용해서 회원 삭제 요청( springboot )
            InformUploadService.delete(this.inform.idx)
                //  성공하면 then으로 결과 데이터가 들어옴
                .then(() => {
                    // 화면 이동 : customers 화면으로 이동됨
                    alert("여행정보 게시물 삭제 완료");
                    this.$router.push("/inform/list");
                })
                .catch((e) => {
                    alert(e);
                });
        },

        // 댓글 조회 서비스
        retrieveInformReply() {
            InformReplyDataService.get(this.$route.params.idx)
                .then((response) => {
                    this.informReplies = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
        // 댓글 수정 서비스
        updateInformReply(idx, inform) {
            InformReplyDataService.update(idx, inform)
                .then(() => {
                    alert("댓글 수정 완료");
                    location.reload();
                })
                .catch((e) => {
                    alert(e);
                });
        },
        // 댓글 삭제 서비스
        deleteInformReply(idx) {
            InformReplyDataService.delete(idx)
                .then(() => {
                    alert("댓글 삭제 완료");
                    location.reload();
                })
                .catch((e) => {
                    alert(e);
                });
        },
        // 댓글 추가 서비스
        saveInformReply() {
            let data = {
                idx: this.informReply.idx,
                content: this.informReply.content,
                userIdx: 141,
                informIdx: this.inform.idx,
            };
            InformReplyDataService.create(data)
                .then((response) => {
                    this.informReply = response.data;
                    alert("댓글 등록 완료");
                    location.reload();
                })
                .catch((e) => {
                    alert(e);
                });
        },
    },
    mounted() {
        this.retrieveInformReplyCount(this.$route.params.idx);
        this.retrieveInformReply();
        this.retrieveInformUploadImage(this.$route.params.idx);
        this.retrieveCounts(this.$route.params.idx);
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
    height: 38px;
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
    width: 900px;
    height: 100px;
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
.boardsPic {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1%;
    margin: 0 auto;
}
.textareas {
    text-align: left;
    white-space: pre-line;
    padding: 15px;
}
.replyBtn {
    border: none;
}
hr {
    background-color: #e5e5e5;
}
</style>
