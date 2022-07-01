<template>
    <div>
        <h1 class="headers">마이페이지</h1>
        <hr />

        <!-- 좌측 버튼 파트 시작 -->
        <div class="d-flex align-items-start">
            <div
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
            >
                <!-- 좌측 버튼 파트 시작 -->
                <button
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                >
                    내 정보
                </button>
                <button
                    class="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                >
                    결제 내역
                </button>
            </div>
            <!-- 좌측 버튼 파트 끝 -->

            <!-- 내 정보 수정 파트 시작 -->
            <div class="tab-content" id="v-pills-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                >
                    <div class="login_box">
                        <div class="left">
                            <form class="signup">
                                <h1 class="text-center">내 정보</h1>
                                <div class="mt-5">
                                    <h4>
                                        프로필
                                        <img
                                            src="@/assets/img/user.png"
                                            alt="userImg"
                                            class="user"
                                        />
                                    </h4>
                                </div>

                                <!-- 아이디 -->
                                <div class="mb-3">
                                    <label
                                        for="formGroupExampleInput2"
                                        class="form-label"
                                        >아이디</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="id"
                                    />
                                </div>

                                <!-- 비밀번호 -->
                                <div class="mb-3">
                                    <label
                                        for="formGroupExampleInput2"
                                        class="form-label"
                                        >비밀번호</label
                                    >
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                    />
                                </div>

                                <!-- 비밀번호 확인 -->
                                <div class="mb-3">
                                    <label
                                        for="formGroupExampleInput2"
                                        class="form-label"
                                        >비밀번호 확인</label
                                    >
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                    />
                                </div>

                                <!-- 이메일 -->
                                <div class="mb-3">
                                    <label
                                        for="formGroupExampleInput2"
                                        class="form-label"
                                        >이메일</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="formGroupExampleInput2"
                                    />
                                </div>
                                <!-- 이름 -->
                                <div class="mb-3">
                                    <label
                                        for="formGroupExampleInput2"
                                        class="form-label"
                                        >이름</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="formGroupExampleInput2"
                                    />
                                </div>

                                <!-- 연락처 -->
                                <div class="mb-3">
                                    <label
                                        for="formGroupExampleInput2"
                                        class="form-label"
                                        >연락처</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="formGroupExampleInput2"
                                    />
                                </div>

                                <!-- 주소 -->
                                <div class="mb-3">
                                    <label
                                        for="formGroupExampleInput2"
                                        class="form-label"
                                        >주소</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="id"
                                        v-model="address"
                                    />
                                    <div class="mt-1">
                                        <input
                                            type="text"
                                            class="form-control mt-2"
                                            id="formGroupExampleInput2"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        class="w-100 mt-3 mb-3 btn btn-lg"
                                        type="submit"
                                    >
                                        수정하기
                                    </button>
                                </div>
                                <hr />
                                <div class="logoPic-flex">
                                    <div>
                                        <img
                                            src="@/assets/img/omym_logo.png"
                                            alt="logoPic"
                                            class="logoPic mt-3"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="right">
                            <div class="right-inductor">
                                <img
                                    src="@/assets/img/beach.jpg"
                                    alt="sidePic"
                                    class="sidePic"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 내 정보 수정 파트 끝 -->


                <!-- 결제 내역 파트 시작 -->
                <div
                    class="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                >
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">상품명</th>
                                <th scope="col">출발일</th>
                                <th scope="col">인원</th>
                                <th scope="col">결제일</th>
                                <th scope="col">취소/리뷰</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>상품명1</td>
                                <td>2022.07.27</td>
                                <td>2</td>
                                <td>2022.06.28</td>

                                <!-- 결제 취소 버튼 시작 -->
                                <td>
                                    <!-- Button trigger modal -->
                                    <button
                                        type="button"
                                        class="btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop1"
                                    >
                                        결제 취소
                                    </button>

                                    <!-- Modal -->
                                    <div
                                        class="modal fade"
                                        id="staticBackdrop1"
                                        data-bs-backdrop="static"
                                        data-bs-keyboard="false"
                                        tabindex="-1"
                                        aria-labelledby="staticBackdropLabel"
                                        aria-hidden="true"
                                    >
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5
                                                        class="modal-title"
                                                        id="staticBackdropLabel"
                                                    >
                                                        결제 취소
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        class="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div class="modal-body">
                                                    <h3>
                                                        예약일시 : 2022.06.28
                                                    </h3>
                                                    <hr />
                                                    <h5>
                                                        결제 금액 : 200,000원
                                                    </h5>
                                                    <h6>
                                                        실 결제금액 : 200,000원
                                                    </h6>
                                                    <h6>포인트 사용 : 0</h6>
                                                    <hr />
                                                    <h4 class="mb-2">
                                                        결제 취소를 요청
                                                        하시겠습니까?
                                                    </h4>
                                                    <p>
                                                        출발일 기준 7일 이내의
                                                        건은 취소가 불가능하오니
                                                        참고하여 주십시오.<br />
                                                        보다 자세한 사항 및
                                                        정보는 Q&A 게시판을
                                                        이용해 주세요.
                                                    </p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button
                                                        type="button"
                                                        class="btn"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        취소
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn"
                                                    >
                                                        확인
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <!-- 결제 취소 버튼 종료 -->
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>상품명2</td>
                                <td>2022.07.27</td>
                                <td>3</td>
                                <td>2022.06.28</td>

                                <!-- 리뷰 작성 버튼 시작 -->
                                <td>
                                    <!-- Button trigger modal -->
                                    <button
                                        type="button"
                                        class="btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop"
                                    >
                                        리뷰 작성
                                    </button>

                                    <div>
                                        <!-- Modal -->
                                        <div
                                            class="modal fade"
                                            id="staticBackdrop"
                                            data-bs-backdrop="static"
                                            data-bs-keyboard="false"
                                            tabindex="-1"
                                            aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true"
                                        >
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5
                                                            class="modal-title"
                                                            id="staticBackdropLabel"
                                                        >
                                                            리뷰 작성
                                                        </h5>
                                                        <button
                                                            type="button"
                                                            class="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form
                                                            name="myform"
                                                            id="myform"
                                                            method="post"
                                                            action="./save"
                                                        >
                                                            <fieldset>
                                                                <legend>
                                                                    별점평가
                                                                </legend>
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    value="5"
                                                                    id="rate1"
                                                                /><label
                                                                    for="rate1"
                                                                    >⭐</label
                                                                >
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    value="4"
                                                                    id="rate2"
                                                                /><label
                                                                    for="rate2"
                                                                    >⭐</label
                                                                >
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    value="3"
                                                                    id="rate3"
                                                                /><label
                                                                    for="rate3"
                                                                    >⭐</label
                                                                >
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    value="2"
                                                                    id="rate4"
                                                                /><label
                                                                    for="rate4"
                                                                    >⭐</label
                                                                >
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    value="1"
                                                                    id="rate5"
                                                                /><label
                                                                    for="rate5"
                                                                    >⭐</label
                                                                >
                                                            </fieldset>
                                                        </form>
                                                        <div class="mb-3">
                                                            <label
                                                                for="formFileSm"
                                                                class="form-label"
                                                                >이미지
                                                                업로드</label
                                                            >
                                                            <input
                                                                class="form-control form-control-sm"
                                                                id="formFileSm"
                                                                type="file"
                                                            />
                                                        </div>
                                                        <div>
                                                            <textarea
                                                                name="reviewText"
                                                                id="reviewText"
                                                                cols="50"
                                                                rows="20"
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button
                                                            type="button"
                                                            class="btn"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            취소
                                                        </button>
                                                        <button
                                                            type="button"
                                                            class="btn"
                                                        >
                                                            확인
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <!-- 리뷰 작성 버튼 종료 -->
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>상품명3</td>
                                <td>2022.07.27</td>
                                <td>4</td>
                                <td>2022.06.28</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- 결제 내역 파트 종료 -->
        </div>
    </div>
</template>

<script>
export default {
    layout: "MyPage",
};
</script>

<style scope>
.headers {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 100px;
}

/* 내 정보 수정 부분 */
.user {
    width: 100px;
    height: 100px;
    border-radius: 100px;
}

.signup {
    min-width: 350px;
    width: 400px;
    height: 1100px;
    border-radius: 10px;
    padding: 20px;
}

.btn {
    background: #a30000;
    box-shadow: none;
    color: white;
}

.btn:hover {
    color: white;
    box-shadow: none;
    background: #a30000;
}

.logoPic {
    width: 150px;
    height: 40px;
}

.logoPic-flex {
    display: flex;
    justify-content: center;
}

.form-control {
    border-bottom: 2px solid #a30000;
    border-top: none;
    border-left: none;
    border-right: none;
}

.form-control:focus {
    box-shadow: none;
    border-color: #a30000;
}

/* 좌측 메뉴 버튼 */
.nav-link {
    width: 150px;
}

.table {
    width: 1000px;
    text-align: center;
}

/* 리뷰 작성 부분 */
.starPic {
    width: 30px;
    height: 30px;
}

#myform fieldset {
    display: inline-block; /* 하위 별점 이미지들이 있는 영역만 자리를 차지함.*/
    border: 0; /* 필드셋 테두리 제거 */
    direction: rtl;
}
#myform input[type="radio"] {
    display: none; /* 라디오박스 감춤 */
}
#myform label {
    font-size: 3em; /* 이모지 크기 */
    color: transparent; /* 기존 이모지 컬러 제거 */
    text-shadow: 0 0 0 gray; /* 새 이모지 색상 부여 */
}
#myform label:hover {
    text-shadow: 0 0 0 #a30000; /* 마우스 호버 */
}
#myform label:hover ~ label {
    text-shadow: 0 0 0 #a30000; /* 마우스 호버 뒤에오는 이모지들 */
}
#myform input[type="radio"]:checked ~ label {
    text-shadow: 0 0 0 #a30000; /* 마우스 클릭 체크 */
}

.sidePic {
    width: 900px;
    height: 1100px;
}

/* TEST */
.login_box {
    width: 1300px;
    height: 1100px;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 4px 22px -8px #0004;
    display: flex;
    overflow: hidden;
}

.login_box .left {
    width: 41%;
    height: 100%;
    padding: 25px 25px;
}

.left {
    background: linear-gradient(-45deg, #dcd7e0, #fff);
}

.right .right-text {
    height: 100%;
    position: relative;
    transform: translate(0%, 45%);
}

.tab-content {
    margin: 0 auto;
}
</style>
