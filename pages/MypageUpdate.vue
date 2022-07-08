<template>
    <div>
        <h3 class="headers">마이페이지</h3>
        <hr />

        <!-- 좌측 버튼 파트 시작 -->
        <div class="align-items-start float-left">
            <div
                class="nav flex-column nav-pills tap-container"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
            >
                <!-- 좌측 버튼 파트 시작 -->
                <button
                    class="btn active tap-button"
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
                    class="btn tap-button"
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

            <span class="tap-divider"></span>

            <!-- 내 정보 수정 파트 시작 -->
            <div class="tab-content" id="v-pills-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                >
                <form class="signup">
            <h3 class="text-center">내 정보</h3>
            <div class="signup-inputs">
                프로필 이미지
                <img :src="profileImg" alt="프로필이미지" class="user-profile" ref="userProfile">
                <label class="profile-label" for="profile-change"></label>
                <input type="file" class="profile-input" id="profile-change" accept="image/*" @change="profileChange" ref="profile">
            </div>

            <!-- 아이디 -->
            <div class="row">
                <label for="user_id" class="form-label"> 아이디 </label>
                <div class="col-lg-9">
                    <input
                        type="text"
                        class="form-control"
                        id="user_id"
                        placeholder="5~15자 내외로 입력해 주세요."
                        minlength="5"
                        maxlength="15"
                        v-model="userForm.id"
                    />
                </div>
                <div class="col-auto">
                    <button class="btn btn-md mb-3" @click="duplicateConfirm">중복확인</button>
                </div>
            </div>

            <!-- 비밀번호 -->
            <div class="mb-3">
                <label for="user_password" class="form-label">비밀번호</label>
                <input
                    type="password"
                    class="form-control"
                    id="user_password"
                    placeholder="대,소문자 포함 8~20자 내외로 입력해 주세요."
                    minlength="8"
                    maxlength="20"
                    v-model="userForm.password"
                />
            </div>

            <!-- 비밀번호 확인 -->
            <div class="mb-3">
                <label for="re_password" class="form-label"
                    >비밀번호 확인</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="re_password"
                    placeholder="입력한 비밀번호를 다시 입력해 주세요."
                    minlength="8"
                    maxlength="20"
                    v-model="userForm.rePassword"
                />
            </div>

            <!-- 이메일 -->
            <div class="mb-3">
                <label for="user_email" class="form-label">이메일</label>
                <input
                    type="text"
                    class="form-control"
                    id="user_email"
                    placeholder="example12@naver.com"
                    v-model="userForm.email"
                />
            </div>
            <!-- 이름 -->
            <div class="mb-3">
                <label for="user_name" class="form-label">이름</label>
                <input
                    type="text"
                    class="form-control"
                    id="user_name"
                    placeholder="공백 없이 입력해 주세요."
                    maxlength="6"
                    v-model="userForm.name"
                />
            </div>

            <!-- 연락처 -->
            <div class="mb-3">
                <label for="user_phone" class="form-label">연락처</label>
                <input
                    type="text"
                    class="form-control"
                    id="user_phone"
                    placeholder="ex) 010-1111-1111"
                    v-model="phoneNum"
                    maxlength="13"
                />
            </div>

            <!-- 주소 -->
            <div class="row">
                <label for="user_address" class="form-label">주소</label>
                <div class="col-lg-6">
                    <input
                        type="text"
                        id="postcode"
                        class="form-control postcode-input"
                        disabled
                    />
                </div>
                <div class="col-auto">
                    <button @click="address_search" class="btn btn-md mb-1">
                        주소검색
                    </button>
                </div>
                <div class="post-box" v-if="postOpen">
                    <VueDaumPostcode @complete="oncomplete" />
                </div>
                <div class="mt-2">
                    <input
                        type="text"
                        class="form-control"
                        disabled
                        id="address"
                        placeholder="우측의 '주소검색' 버튼을 클릭하세요."
                    />
                </div>
                <div class="mt-2">
                    <input
                        type="text"
                        class="form-control mt-2"
                        id="detail_address"
                        placeholder="상세 주소를 입력해 주세요."
                        v-model="userForm.detailAddress"
                    />
                </div>
            </div>
            <div>
                <button
                    class="w-100 mt-5 mb-3 btn btn-md"
                    @click="joinConfirm"
                >
                    가입하기
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



                    <!-- <div class="login_box">
                        <div class="left">
                            <form class="signup">
                                <h3 class="text-center">내 정보</h3>
                                <div class="mt-5">
                                    <p>
                                        프로필
                                        <img
                                            src="@/assets/img/user.png"
                                            alt="userImg"
                                            class="user"
                                        />
                                    </p>
                                </div>

                                버튼 활성화 비활성화
                                <div>
                                    아이디
                                    <div class="mb-3">
                                        <label
                                            for="formGroupExampleInput2"
                                            class="form-label"
                                        >
                                            아이디</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            disabled
                                            id="actives1"
                                        />
                                    </div> -->

                                    <!-- 비밀번호 -->
                                    <!-- <div class="mb-3">
                                        <label
                                            for="formGroupExampleInput2"
                                            class="form-label"
                                            >비밀번호</label
                                        >
                                        <input
                                            type="password"
                                            class="form-control"
                                            disabled
                                            id="actives2"
                                        />
                                    </div> -->

                                    <!-- 비밀번호 확인 -->
                                    <!-- <div class="mb-3">
                                        <label
                                            for="formGroupExampleInput2"
                                            class="form-label"
                                            >비밀번호 확인</label
                                        >
                                        <input
                                            type="password"
                                            class="form-control"
                                            disabled
                                            id="actives3"
                                        />
                                    </div> -->

                                    <!-- 이메일 -->
                                    <!-- <div class="mb-3">
                                        <label
                                            for="formGroupExampleInput2"
                                            class="form-label"
                                            >이메일</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            disabled
                                            id="actives4"
                                        />
                                    </div> -->
                                    <!-- 이름 -->
                                    <!-- <div class="mb-3">
                                        <label
                                            for="formGroupExampleInput2"
                                            class="form-label"
                                            >이름</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            disabled
                                            id="actives5"
                                        />
                                    </div> -->

                                    <!-- 연락처 -->
                                    <!-- <div class="mb-3">
                                        <label
                                            for="formGroupExampleInput2"
                                            class="form-label"
                                            >연락처</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            disabled
                                            id="actives6"
                                        />
                                    </div> -->

                                    <!-- 주소 -->
                                    <!-- <div class="mb-3">
                                        <label
                                            for="formGroupExampleInput2"
                                            class="form-label"
                                            >주소</label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            disabled
                                            id="actives7"
                                        />
                                        <div class="mt-1">
                                            <input
                                                type="text"
                                                class="form-control mt-2"
                                                disabled
                                                id="actives8"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            class="w-100 mt-3 mb-3 btn btn-md"
                                            type="button"
                                            value="수정하기"
                                            v-on:click="activeInp()"
                                        />
                                    </div>
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
                        </div> -->
                        <!-- <div class="right">
                            <div class="right-inductor">
                                <img
                                    src="@/assets/img/beach.jpg"
                                    alt="sidePic"
                                    class="sidePic"
                                />
                            </div>
                        </div> -->
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
                                                    <h5>
                                                        예약일시 : 2022.06.28
                                                    </h5>
                                                    <hr />
                                                    <h6>
                                                        총 결제 금액 : 200,000원
                                                    </h6>
                                                    <h6>
                                                        실 결제 금액 : 200,000원
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
                                                        class="btn btn-md"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        취소
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-md"
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
                                                                <div
                                                                    class="file-upload-form mt-3"
                                                                >
                                                                    별점평가
                                                                </div>
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
                                                            <div
                                                                class="file-upload-form mt-3"
                                                            >
                                                                이미지를 선택해
                                                                주세요.
                                                                <div
                                                                    class="image-preview"
                                                                    v-if="
                                                                        imageData.length >
                                                                        0
                                                                    "
                                                                >
                                                                    <img
                                                                        class="preview mt-3"
                                                                        :src="
                                                                            imageData
                                                                        "
                                                                    />
                                                                </div>
                                                                <input
                                                                    class="form-control form-control-sm mt-2"
                                                                    type="file"
                                                                    @change="
                                                                        previewImage
                                                                    "
                                                                    accept="image/*"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div
                                                                class="file-upload-form mt-2 mb-2"
                                                            >
                                                                고객님의 소중한
                                                                후기를
                                                                남겨주세요.
                                                            </div>
                                                            <textarea
                                                                style="
                                                                    resize: none;
                                                                "
                                                                name="reviewText"
                                                                id="reviewText"
                                                                cols="50"
                                                                rows="10"
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
</template>

<script>
export default {
    layout: "MyPage",
    data() {
        return {
            actives: false,
            imageData: "", // 리뷰 작성 파트 이미지
            profileImg: require("@/assets/img/user.png"),
            profileFile: {},
            userForm: {
                profile: "",
                id: "",
                password: "",
                rePassword: "",
                email: "",
                name: "",
                postcode: "",
                address: "",
                detailAddress: ""
            },
        };
    },
    methods: {
        profileChange(e) {
            this.profileFile = e.target.files;
            this.profileImg = URL.createObjectURL(this.profileFile[0]);
        },
        activeInp() {
            let target1 = document.getElementById("actives1");
            let target2 = document.getElementById("actives2");
            let target3 = document.getElementById("actives3");
            let target4 = document.getElementById("actives4");
            let target5 = document.getElementById("actives5");
            let target6 = document.getElementById("actives6");
            let target7 = document.getElementById("actives7");
            let target8 = document.getElementById("actives8");

            target1.disabled = false;
            target2.disabled = false;
            target3.disabled = false;
            target4.disabled = false;
            target5.disabled = false;
            target6.disabled = false;
            target7.disabled = false;
            target8.disabled = false;
        },
    },
};
</script>

<style scoped>
.float-left {
    float: left;
}
.tap-divider {
    background: #e5e5e5;
    width: 1px;
    height: 100%;
}
.tap-container {
    padding: 10px 30px 10px 30px;
}
.tap-button {
    width: 200px;
}
.headers {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 100px;
}

/* 내 정보 수정 부분 */
.signup {
    min-width: 500px;
    width: 550px;
    /* border: 5px solid #a30000; */
    border-radius: 10px;
    padding: 40px;
}

.signup input {
    border-radius: 0;
}
.signup-inputs {
    display: flex;
    align-items: center;
}

.user-profile {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 20px 0 20px 30px
}
.profile-label {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    transform: translateX(-80px);
}
.profile-input {
    display: none;
}


.adds {
    border-bottom: 2px solid #a30000;
    border-top: none;
    border-left: none;
    border-right: none;
}

.btn {
    background: #a30000;
    color: white;
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

.row {
    justify-content: space-between;
}
.postcode-input {
    width: 100px;
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
    /* width: 700px; */
    height: 1050px;
    /* position: absolute;
    transform: translate(500px, -1050px); */
    object-fit: cover;
}

/* 결제 내역 파트 */
table {
    font-size: 14px;
    font-weight: 300;
}

/* updateBox */
.login_box {
    /* width: 65vw; */
    height: 1050px;
    /* position: absolute; */
    /* top: 90%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 4px 22px -8px #0004;
    /* display: flex; */
    overflow: hidden;
    position: relative;
}

.login_box .left {
    width: 50%;
    height: 100%;
    padding: 25px 25px;
}

.left {
    background: linear-gradient(-45deg, #dcd7e0, #fff);
}


/* 리뷰 작성 사진 업로드 */
.preview {
    width: 200px;
    height: 200px;
}
</style>
