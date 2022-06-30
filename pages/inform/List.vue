<template>
    <div>
        <div class="top-banner">
            <h4>여행정보</h4>
            <p>국내의 다양한 여행지를 선별해 소개해 드립니다</p>
        </div>

        <h5 class="sub-title">오늘의 TOP3</h5>
        <div class="top-container">
            <div class="card top-card">
                <div class="thumbnail-container col-md-3">
                    <img src="@/assets/img/sample.png" class="img-fluid rounded-start thumbnail" alt="컨텐츠 이미지">
                </div>
                <div class="card-body col-md-9">
                    <p class="card-title">Card title</p>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-bottom">
                    <p class="card-text"><small class="text-muted">2022.06.30 | 조회수 | 댓글수</small></p>
                </div>
            </div>

            <div class="card top-card">
                <div class="thumbnail-container col-md-3">
                    <img src="@/assets/img/sample.png" class="img-fluid rounded-start thumbnail" alt="컨텐츠 이미지">
                </div>
                <div class="card-body col-md-9">
                    <p class="card-title">Card title</p>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-bottom">
                    <p class="card-text"><small class="text-muted">2022.06.30 | 조회수 | 댓글수</small></p>
                </div>
            </div>

            <div class="card top-card">
                <div class="thumbnail-container col-md-3">
                    <img src="@/assets/img/sample.png" class="img-fluid rounded-start thumbnail" alt="컨텐츠 이미지">
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
        <br />


        <h5 class="sub-title">전체 게시글</h5>
        <br />
        <div class="main-container">
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
    
}
</script>
<style scoped>
    .top-banner {
        background-image: url(@/assets/img/topBanner.png);
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
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
        height: 100%;
        display: flex;
        padding: 30px 30px 10px 30px;
        flex-direction: column;
        background: #E5E5E5;
    }
    .top-card {
        display: flex;
        align-items: flex-start;
        height: 180px;
        flex-wrap: wrap;
        width: 900px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .board-card {
        display: flex;
        align-items: flex-start;
        height: 180px;
        flex-wrap: wrap;
        width: 900px;
        margin: 0 auto;
        border: none;
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
        font-weight: 400;
    }
    .card-text {
        font-size: 15px;
        font-weight: 300;
    }

</style>