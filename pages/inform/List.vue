<template>
    <div>
        <div class="top-banner">
            <!-- <img src="@/assets/img/topBanner.png" alt="배너" width="1024px"> -->
            <h4>여행정보</h4>
        </div>
        <h5 class="sub-title">오늘의 TOP3</h5>
        <div class="top-container">
            <div class="card board-card">
                <div class="thumbnail-container col-md-3">
                    <img src="@/assets/img/sample.png" class="img-fluid rounded-start thumbnail" alt="컨텐츠 이미지">
                </div>
                <div class="card-body col-md-9">
                    <p class="card-title">Card title</p>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-bottom">
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card board-card">
                <div class="thumbnail-container col-md-3">
                    <img src="@/assets/img/sample.png" class="img-fluid rounded-start thumbnail" alt="컨텐츠 이미지">
                </div>
                <div class="card-body col-md-9">
                    <p class="card-title">Card title</p>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-bottom">
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card board-card">
                <div class="thumbnail-container col-md-3">
                    <img src="@/assets/img/sample.png" class="img-fluid rounded-start thumbnail" alt="컨텐츠 이미지">
                </div>
                <div class="card-body col-md-9">
                    <p class="card-title">Card title</p>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-bottom">
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .sub-title {
        margin: 30px 0px;
    }
    .top-container {
        border: 1px solid lightgray;
        border-radius: 20px;
        height: 100%;
        display: flex;
        padding: 30px 30px 0 30px;
        flex-direction: column;
    }
    .board-card {
        display: flex;
        align-items: flex-start;
        height: 250px;
        flex-wrap: wrap;
        width: 950px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    .thumbnail {
        width: 250px;
        height: 250px;
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