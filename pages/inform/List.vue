<template>
    <div>
        <div class="top-banner">
            <img class="top-img" src="@/assets/img/topbanner.png" alt="배너이미지">
            <div class="top-text">
                <h4>여행정보</h4>
                <p class="small text-muted">국내의 다양한 여행지를 선별해 소개해 드립니다</p>
            </div>
        </div>

        <div class="list-container">
            <h5 class="sub-title">오늘의 TOP3🥇</h5>
        </div>
        <div style="background: #F0F0F0">
            <div class="top-container">
                <div class="top3-card">
                    <img src="@/assets/img/sample.png" class="card-img" alt="게시물 이미지">
                    <div class="bg-light text-black topcard-body">
                        <p class="card-title">여름에 제주도는 너무 더워</p>
                        <p class="card-text">여름에 가기 좋은 지역은 어디일까요?</p>
                        <p class="card-footer"><small class="text-muted">2022.06.30 | 조회수 | 댓글수</small></p>
                    </div>
                </div>
                <div class="top3-card">
                    <img src="@/assets/img/sample.png" class="card-img" alt="게시물 이미지">
                    <div class="bg-light text-black topcard-body">
                        <p class="card-title">title</p>
                        <p class="card-text">content</p>
                        <p class="card-footer"><small class="text-muted">2022.06.30 | 조회수 | 댓글수</small></p>
                    </div>
                </div>
                <div class="top3-card">
                    <img src="@/assets/img/sample.png" class="card-img" alt="게시물 이미지">
                    <div class="bg-light text-black topcard-body">
                        <p class="card-title">title</p>
                        <p class="card-text">content</p>
                        <p class="card-footer"><small class="text-muted">2022.06.30 | 조회수 | 댓글수</small></p>
                    </div>
                </div>
            </div>
        </div>
        <br />

        <br />
        <div class="main-container">
            <h5 class="sub-title">전체 게시글</h5>
            <div class="card board-card">
                <div class="thumbnail-container col-md-3">
                    <img src="@/assets/img/sample.png" class="img-fluid thumbnail" alt="컨텐츠 이미지">
                </div>
                <div class="card-body col-md-9">
                    <p class="card-title">여름에 제주도는 너무 더워</p>
                    <p class="card-text">여름에 가기 좋은 지역은 어디일까요?</p>
                </div>
                <div class="card-bottom">
                    <p class="card-text"><small class="text-muted">2022.06.30 | 조회수 | 댓글수</small></p>
                </div>
            </div>
            <hr class="content-border" />

            <div class="card board-card">
                <div class="thumbnail-container col-md-3">
                    <img src="@/assets/img/sample.png" class="img-fluid thumbnail" alt="컨텐츠 이미지">
                </div>
                <div class="card-body col-md-9">
                    <p class="card-title">Card title</p>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-bottom">
                    <p class="card-text"><small class="text-muted">2022.06.30 | 조회수 | 댓글수</small></p>
                </div>
            </div>
            <hr class="content-border" />

            <div class="card board-card">
                <div class="thumbnail-container col-md-3">
                    <img src="@/assets/img/sample.png" class="img-fluid thumbnail" alt="컨텐츠 이미지">
                </div>
                <div class="card-body col-md-9">
                    <p class="card-title">Card title</p>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-bottom">
                    <p class="card-text"><small class="text-muted">2022.06.30 | 조회수 | 댓글수</small></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "MyPage"
}
</script>
<style scoped>
    .main-container .sub-title{
        margin: 40px 0 40px 18vw;
    }
    .top3-card {
        position: relative;
        width: 350px;
    }
    .top3-card:hover .topcard-body {
        opacity: 0.8;
        transition: .6s ease;
    }
    .topcard-body {
        position: absolute;
        transform: translateY(-158px);
        width: 350px;
        height: 45%;
        opacity: 0;
        padding: 20px 10px 5px 10px;
    }
    .card-footer {
        line-height: 5;
    }
    .card-img {
        width: 350px;
        height: 350px;
    }

    .list-container {
        /* width: 100vw; */
        margin-left: 13%;
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
        filter: opacity(60%);
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
    }
    .card-bottom {
        padding: 5px 16px;
    }

    .card-title {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 8px;
    }
    .card-text {
        font-size: 15px;
        font-weight: 300;
    }

</style>