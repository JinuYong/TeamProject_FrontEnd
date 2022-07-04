<template>
 <div>
    <h4 class="board-title">여행정보 제목입니다.</h4>

    <div class="board-info">
        <div>
            <img class="profile-img" src="@/assets/img/brown1.jpg" alt="프로필">
            userid
        </div>

        <span>2022.07.25 | 조회수 | 댓글수</span>
    </div>
    <hr>

    <div class="content">
        작성 콘텐츠
    </div>

    <hr />
    <div class="btns">
        <button class="btn">목록</button>
        <div class="edit-btns">
            <button class="btn">수정</button>
            <button class="btn">삭제</button>
        </div>
    </div>

    <hr />
    <h6>댓글</h6>

    <div class="reply-container">
        <div class="reply-content">
            <div class="reply-header">
                <img class="profile-img" src="@/assets/img/brown1.jpg" alt="프로필">
                userid <small class="text-muted"> | 2022.06.30</small>
            </div>
            <div class="reply-body">
                댓글 내용
            </div>
        </div>
        <hr />

        <div class="reply-content">
            <div class="reply-header">
                <img class="profile-img" src="@/assets/img/brown1.jpg" alt="프로필">
                userid <small class="text-muted"> | 2022.06.30</small>
            </div>
            <div class="reply-body">
                댓글 내용
            </div>
        </div>
        <hr />

        <div class="reply-content">
            <div class="reply-header">
                <img class="profile-img" src="@/assets/img/brown1.jpg" alt="프로필">
                userid <small class="text-muted"> | 2022.06.30</small>
            </div>
            <div class="reply-body">
                댓글 내용
            </div>
        </div>
    </div>
    
    <hr class="divider-row"/>            
    <div class="input-container">
        <textarea class="form-control reply-input" placeholder="댓글을 작성해주세요"></textarea>
        <button class="btn">등록</button>
    </div>
    </div>

</template>

<script>
export default {
    name: "informDetail"
}
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
    height: 38px;
    color: #ffffff;
    background: #A30000;
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
    background: #E5E5E5;
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


</style>
