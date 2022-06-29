<template>
    <div>
        <h1 class="headers">마이페이지</h1>
        <hr />
        <div class="d-flex align-items-start">
            <div
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
            >
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
            <div class="tab-content" id="v-pills-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                >
                    <form class="signup float-right">
                        <div>
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
                            <div class="col-lg-12">
                                <label
                                    for="inputPassword2"
                                    class="visually-hidden"
                                    >아이디</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="id"
                                    placeholder="5~15자 내외로 입력해 주세요."
                                    required
                                    minlength="5"
                                    maxlength="15"
                                />
                            </div>
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
                                placeholder="대,소문자 포함 8~20자 내외로 입력해 주세요."
                                required
                                minlength="8"
                                maxlength="20"
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
                                placeholder="입력한 비밀번호를 다시 입력해 주세요."
                                required
                                minlength="8"
                                maxlength="20"
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
                                placeholder="example12@naver.com"
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
                                placeholder="공백 없이 입력해 주세요."
                                required
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
                                placeholder="ex) 010-1111-1111"
                                required
                            />
                        </div>

                        <!-- 주소 -->
                        <label for="formGroupExampleInput2" class="form-label"
                            >주소</label
                        >
                        <div class="post-box" v-if="postOpen">
                            <VueDaumPostcode @complete="oncomplete" />
                        </div>
                        <div class="form-box">
                            <input
                                class="col-lg-9"
                                disabled
                                v-model="address"
                            />
                            <div
                                v-on:click="search"
                                type="submit"
                                class="btn btn-success"
                            >
                                주소검색
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                id="formGroupExampleInput2"
                                placeholder="상세 주소를 입력해 주세요."
                            />
                        </div>
                        <div>
                            <button
                                class="w-100 mt-3 btn btn-lg btn-success"
                                type="submit"
                            >
                                수정하기
                            </button>
                        </div>
                    </form>
                </div>
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
                                <td>
                                    <!-- Button trigger modal -->
                                    <button
                                        type="button"
                                        class="btn btn-success"
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
                                                        class="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        취소
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-primary"
                                                    >
                                                        확인
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>상품명2</td>
                                <td>2022.07.27</td>
                                <td>3</td>
                                <td>2022.06.28</td>
                                <td>
                                    <!-- Button trigger modal -->
                                    <button
                                        type="button"
                                        class="btn btn-success"
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
                                                            class="btn btn-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            취소
                                                        </button>
                                                        <button
                                                            type="button"
                                                            class="btn btn-success"
                                                        >
                                                            확인
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 별점주기 -->
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>상품명3</td>
                                <td>2022.07.27</td>
                                <td>4</td>
                                <td>2022.06.28</td>
                                <td>
                                    <button class="btn btn-success">
                                        결제 취소
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.headers {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 100px;
}

.user {
    width: 100px;
    height: 100px;
    border-radius: 100px;
}

.signup {
    margin-left: 400px;
    width: 50%;
}

.nav-link {
    width: 150px;
}

.table {
    width: 1000px;
    text-align: center;
}

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
    text-shadow: 0 0 0 lightcoral; /* 마우스 호버 */
}
#myform label:hover ~ label {
    text-shadow: 0 0 0 lightcoral; /* 마우스 호버 뒤에오는 이모지들 */
}
#myform input[type="radio"]:checked ~ label {
    text-shadow: 0 0 0 lightcoral; /* 마우스 클릭 체크 */
}
</style>
