<template>
    <div>
        <div class="top-banner">
            <img
                class="top-img"
                src="@/assets/img/top-beach2-pic.jpg"
                alt="배너이미지"
            />
            <div class="top-text">
                <h4>여행정보</h4>
                <p class="small text-muted">
                    국내의 다양한 여행지를 선별해 소개해 드립니다
                </p>
            </div>
        </div>

        <div class="list-container">
            <h5 class="sub-title">오늘의 TOP3🥇</h5>
        </div>
        <div style="background: #f0f0f0">
            <div class="top-container">
                <div
                    style="cursor: pointer"
                    class="top3-card"
                    v-for="(topt, index) in topts"
                    :key="index"
                    @click="moveTo(topt.idx)"
                >
                    <img :src="topt.url" class="card-img" alt="게시물 이미지" />
                    <div class="bg-light text-black topcard-body">
                        <p class="card-title">{{ topt.title }}</p>
                        <p class="card-text">
                            {{ topt.content }}
                        </p>
                        <p class="card-footer">
                                {{ topt.insertTime }} | 조회수
                                {{ topt.count }} | 댓글수
                                {{ topt.replyCount }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr />

        <!-- 전체 여행정보 게시글 파트 시작 -->
        <div class="main-container">
            <div class="main-container">
                <h5 class="sub-title">전체 게시글</h5>
                <hr />
                <div
                    class="card board-card cardheight"
                    v-for="(upload, index) in uploads"
                    :key="index"
                    @click="moveTo2(upload.idx)"
                    style="cursor: pointer; margin-bottom: 15px"
                >
                    <div class="thumbnail-container">
                        <img
                            :src="upload.url"
                            class="thumbnail"
                            alt="컨텐츠 이미지"
                        />
                    </div>
                    <div class="card-body">
                        <p class="card-title">{{ upload.title }}</p>
                        <p class="card-content">
                            {{ upload.content }}
                        </p>
                    </div>
                    <div class="card-bottom">
                        <p class="card-text">
                            <small class="text-muted"
                                >{{ upload.insertTime }} | 조회수
                                {{ upload.count }} | 댓글수
                                {{ upload.replyCount }}
                            </small>
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
import InformUploadService from "@/services/InformUploadService";

export default {
    name: "travel-info",
    layout: "MyPage",
    data() {
        return {
            uploads: [],
            topts: [],
        };
    },
    methods: {
        moveTo(idx) {
            this.$router.push("/inform/detail/" + idx);
        },
        moveTo2(idx) {
            this.$router.push("/inform/detail/" + idx);
        },
        retrieveShowImage() {
            InformUploadService.getAllFiles()
                .then((response) => {
                    this.uploads = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
        retrieveTopThree() {
            InformUploadService.topThree()
                .then((response) => {
                    this.topts = response.data;
                })
                .catch((e) => {
                    alert(e);
                });
        },
    },
    mounted() {
        // this.retrieveInformReplyCount(this.$route.params.idx);
        this.retrieveShowImage();
        this.retrieveTopThree();

        localStorage.setItem("idx", "141");
        localStorage.getItem("idx");
    },
};
</script>

<style scoped>
.main-container .sub-title {
    margin: 40px 0 40px 18vw;
}
.top3-card {
    position: relative;
    width: 350px;
}
.top3-card:hover .topcard-body {
    opacity: 0.8;
    transition: 0.6s ease;
}
.topcard-body {
    position: absolute;
    bottom: 0;
    width: 350px;
    height: 45%;
    opacity: 0;
    padding: 20px 10px 5px 10px;
}
.card-footer {
    bottom: 0;
    position: absolute;
    margin: 0;
    background: none;
    border: none;
    padding: 10px 0px 10px;
    font-size: 13px;
    font-weight: 200;
}
.card-img {
    width: 350px;
    height: 350px;
}

.list-container {
    /* width: 100vw; */
    margin-left: 220px;
    margin: 40px 0 40px 18vw;
}
.top-banner {
    /* background-image: url(@/assets/img/topbanner.png); */
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */
}
.top-img {
    position: relative;
    width: 100%;
    height: 300px;
    filter: opacity(80%);
}
.top-text {
    position: absolute;
    text-align: center;
}
.top-banner > p {
    font-weight: 200;
    font-size: 14px;
}
.sub-title {
    margin-top: 50px;
}
.top-container {
    /* border: 1px solid lightgray;
        border-radius: 20px; */
    width: 1200px;
    height: 450px;
    display: flex;
    padding: 30px 30px 30px 30px;
    /* background: #E5E5E5; */
    margin: 0 auto;
    align-content: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.top-card {
    display: flex;
    align-items: flex-start;
    height: 180px;
    flex-wrap: wrap;
    width: 900px;
    margin: 0 auto;
    margin-bottom: 20px;
    box-sizing: content-box;
}
.board-card {
    display: flex;
    align-items: flex-start;
    height: 180px;
    flex-wrap: wrap;
    width: 900px;
    margin: 0 auto;
    border: none;
    box-sizing: content-box;
    background-color: #f0f0f0;
    align-content: flex-start;
}
.content-border {
    width: 900px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
}
.thumbnail {
    width: 250px;
    height: 180px;
    object-fit: cover;
    border-radius: 5px 0px 0px 5px;
    margin-right: 10px;
}
.card-bottom {
    padding: 10px 16px 20px;
}
.card-body {
    width: 620px;
    padding-bottom: 0;
}
.card-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
}
.card-text {
    font-size: 15px;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.card-content {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 300;
    font-size: 12;
}
.btn {
    border: none;
    background-color: #a30000;
    color: white;
    margin-right: auto;
    display: flex;
}
</style>
