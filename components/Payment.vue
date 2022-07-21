<template>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <!-- <th scope="col">#</th> -->
                    <th scope="col">상품명</th>
                    <th scope="col">출발일</th>
                    <th scope="col">인원</th>
                    <th scope="col">결제일</th>
                    <th scope="col">결제금액</th>
                    <th scope="col">취소</th>
                    <th scope="col">리뷰</th>
                </tr>
            </thead>
            <tbody v-for="(product, index) in products" :key="index">
                <tr>
                    <!-- <th >{{ product.no }}</th> -->
                    <td scope="row">{{ product.name }}</td>
                    <td>{{ product.startDate }}</td>
                    <td>{{ product.count }}</td>
                    <td>{{ product.paymentDate }}</td>
                    <td>{{ product.totalPrice }}</td>

                    <!-- CREATE TABLE oy_product ( -->

                    <!-- 결제 취소 버튼 시작 -->
                    <td>
                        <div
                            class="modal fade"
                            id="exampleModalToggle"
                            aria-hidden="true"
                            aria-labelledby="exampleModalToggleLabel"
                            tabindex="-1"
                        >
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5
                                            class="modal-title"
                                            id="exampleModalToggleLabel"
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
                                            예약일시 :
                                            {{ currentDate }}
                                        </h5>
                                        <hr />
                                        <h6>
                                            총 결제 금액 :
                                            {{ currentPrice }}원
                                        </h6>
                                        <h6>
                                            실 결제 금액 :
                                            {{ currentPrice }}원
                                        </h6>
                                        <h6>포인트 사용 : 0</h6>
                                        <hr />
                                        <h4 class="mb-2">
                                            결제 취소를 요청하시겠습니까?
                                        </h4>
                                        <p>
                                            출발일 기준 7일 이내의 건은 취소가
                                            불가능하오니 참고하여 주십시오.<br />
                                            보다 자세한 사항 및 정보는 Q&A
                                            게시판을 이용해 주세요.
                                        </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button
                                            class="btn"
                                            data-bs-target="#exampleModalToggle2"
                                            data-bs-toggle="modal"
                                        >
                                            확인
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-md"
                                            data-bs-dismiss="modal"
                                        >
                                            취소
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="modal fade"
                            id="exampleModalToggle2"
                            aria-hidden="true"
                            aria-labelledby="exampleModalToggleLabel2"
                            tabindex="-1"
                        >
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5
                                            class="modal-title"
                                            id="exampleModalToggleLabel2"
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
                                        <h6 class="mb-2">
                                            결제 취소 요청 접수되었습니다
                                        </h6>
                                    </div>
                                    <div class="modal-footer">
                                        <button
                                            type="button"
                                            class="btn"
                                            data-bs-dismiss="modal"
                                            @click="deleteProduct()"
                                        >
                                            확인
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            class="btn"
                            data-bs-toggle="modal"
                            href="#exampleModalToggle"
                            role="button"
                            @click="
                                cancelProduct(
                                    product.no,
                                    product.paymentDate,
                                    product.totalPrice
                                )
                            "
                            v-show="product.deleteYn == 'N'"
                            >결제 취소</a
                        >
                        <button
                            class="btn"
                            data-bs-toggle="modal"
                            href="#exampleModalToggle"
                            role="button"
                            v-show="product.deleteYn == 'Y'"
                            disabled="true"
                        >
                            취소 대기
                        </button>

                        <!-- 리뷰 작성 버튼 시작 -->
                    </td>

                    <td>
                        <!-- Button trigger modal -->
                        <button
                            type="button"
                            class="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            @click="
                                cancelProduct(
                                    product.no,
                                    product.paymentDate,
                                    product.totalPrice
                                )
                            "
                            v-show="product.updateYn == 'N'"
                        >
                            리뷰 작성
                        </button>
                        <button
                            type="button"
                            class="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            @click="
                                cancelProduct(
                                    product.no,
                                    product.paymentDate,
                                    product.totalPrice
                                )
                            "
                            v-show="product.updateYn == 'Y'"
                            disabled="true"
                        >
                            작성 완료
                        </button>

                        <!-- Modal -->
                        <div>
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
                                                @click="cancelReview"
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
                                                        v-model="review.rating"
                                                    /><label for="rate1"
                                                        >⭐</label
                                                    >
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        value="4"
                                                        id="rate2"
                                                        v-model="review.rating"
                                                    /><label for="rate2"
                                                        >⭐</label
                                                    >
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        value="3"
                                                        id="rate3"
                                                        v-model="review.rating"
                                                    /><label for="rate3"
                                                        >⭐</label
                                                    >
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        value="2"
                                                        id="rate4"
                                                        v-model="review.rating"
                                                    /><label for="rate4"
                                                        >⭐</label
                                                    >
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        value="1"
                                                        id="rate5"
                                                        v-model="review.rating"
                                                    /><label for="rate5"
                                                        >⭐</label
                                                    >
                                                </fieldset>
                                            </form>
                                            <div>
                                                <div
                                                    class="file-upload-form mt-2 mb-2"
                                                >
                                                    고객님의 소중한 후기를
                                                    남겨주세요.
                                                </div>
                                                <textarea
                                                    style="resize: none"
                                                    name="reviewText"
                                                    id="reviewText"
                                                    cols="50"
                                                    rows="10"
                                                    v-model="review.content"
                                                ></textarea>
                                                <div
                                                    class="file-upload-form mt-2 mb-2"
                                                >
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button
                                                type="button"
                                                class="btn"
                                                data-bs-dismiss="modal"
                                                @click="cancelReview"
                                            >
                                                취소
                                            </button>
                                            <!-- @click="saveReview" -->
                                            <!-- @click="upload" -->
                                            <button
                                                type="button"
                                                class="btn"
                                                data-bs-dismiss="modal"
                                                @click="saveReview"
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
            </tbody>
        </table>
    </div>
</template>

<script>
import CancelDataService from "@/services/CancelDataService";
import ReviewDataService from "@/services/ReviewDataService";

export default {
    name: "Payment",
    data() {
        return {
            imageData: "", // 리뷰 작성 파트 이미지
            currentProduct: null,
            products: [],
            currentNumber: 0,
            currentDate: "",
            currentPrice: "",
            review: {
                idx: null,
                rating: null,
                content: "",
            },
            // 리뷰작성 - 이미지
            currentImage: undefined, // 현재이미지
            previewImage: undefined, // 미리보기 이미지
            progress: 0,
            message: "",
            imageInfo: [], // 이미지 정보 객체배열
        };
    },
    methods: {
        // Todo: 결제 취소
        // 모든 회원 조회 서비스 호출
        retrieveProducts() {
            // axios로 spring에 모든 회원 조회 요청
            CancelDataService.getAll()
                //  성공하면 then으로 서버(spring) 데이터(response.data)가 들어옴
                .then((response) => {
                    this.products = response.data;
                })
                //  실패하면 catch로 에러메세지가 들어옴
                .catch((e) => {
                    alert(e);
                });
        },
        // 회원삭제 서비스 요청(springboot)
        deleteProduct() {
            CancelDataService.delete(this.currentNumber)
                // 성공하면 then으로 결과 데이터가 들어옴
                .then(() => {
                    // router/index.js 안에 name
                    // 화면 이동 : customers 화면으로 이동
                    // this.$router.push({ name: "complains" });
                    this.$router.push("/mypage");
                    this.retrieveProducts();
                })
                // 실패하면 catch로 에러 데이터가 들어옴
                .catch((e) => {
                    alert(e);
                });
        },
        cancelProduct(no, date, price) {
            this.currentNumber = no;
            this.currentDate = date;
            this.currentPrice = price;
        },
        // Todo: 리뷰
        // 저장 메소드 호출
        saveReview() {
            //  리뷰 임시 객체 만들기

            if (this.review.rating != 0) {
                if (this.review.content != "") {
                    var data = {
                        rating: this.review.rating,
                        content: this.review.content,
                    };

                    //  임시 게시판 객체를 서버쪽으로 전달해서 DB에 insert 요청
                    ReviewDataService.create(data)
                        //  성공하면 then으로 들어옴
                        .then((response) => {
                            this.review.idx = response.data.idx;
                            // this.submitted = true; // DB insert 성공
                        })
                        //  실패하면 catch으로 에러메세지가 들어옴
                        .catch((e) => {
                            // alert(e);
                        });

                    CancelDataService.update(this.currentNumber)
                        // 성공하면 then으로 결과 데이터가 들어옴
                        .then(() => {
                            // router/index.js 안에 name
                            // 화면 이동 : customers 화면으로 이동
                            // this.$router.push({ name: "complains" });
                            this.$router.push("/mypage");
                            this.retrieveProducts();
                        })
                        // 실패하면 catch로 에러 데이터가 들어옴
                        .catch((e) => {
                            // alert(e);
                        });
                } else {
                    (this.review.rating = 0), (this.review.content = "");
                    alert("별점과 후기를 작성해주세요");
                    return;
                }
            } else {
                (this.review.rating = 0), (this.review.content = "");
                alert("별점과 후기를 작성해주세요");
                return;
            }

            (this.review.rating = 0), (this.review.content = "");
        },
        cancelReview() {
            (this.review.rating = 0), (this.review.content = "");
        },
        // 리뷰 작성
        updateReview() {
            CancelDataService.update(this.currentNumber)
                // 성공하면 then으로 결과 데이터가 들어옴
                .then(() => {
                    // router/index.js 안에 name
                    // 화면 이동 : customers 화면으로 이동
                    // this.$router.push({ name: "complains" });
                    this.$router.push("/mypage");
                    this.retrieveProducts();
                })
                // 실패하면 catch로 에러 데이터가 들어옴
                .catch((e) => {
                    alert(e);
                });
        },
        selectImage(e) {
            // 파일선택상자에서 첫번째로 선택한 이미지가 저장됨
            console.log(e.target.files[0]);
            this.currentImage = e.target.files[0];
            // 아래는 미리보기 이미지를 위한 주소가 저장됨
            this.previewImage = URL.createObjectURL(this.currentImage);
            this.progress = 0;
            this.message = "";
        },
    },
    computed: {
        CompleteReview() {
            return this.review;
        },
    },
    //화면이 뜨자마자 실행되는 이벤트(모든 회원조회가 실행됨)
    mounted() {
        this.retrieveProducts();
    },
};
</script>

<style scoped>
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
    font-size: 14px;
    font-weight: 300;
}

.signup input {
    border-radius: 0;
}

.btn {
    background: #a30000;
    box-shadow: none;
    color: white;
}

.btn:hover .btn:focus .btn:active {
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

/* 결제 내역 파트 */
table {
    font-size: 14px;
    font-weight: 300;
}

/* updateBox */
.login_box {
    width: 1300px;
    height: 1050px;
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

/* 리뷰 작성 사진 업로드 */
.preview {
    width: 200px;
    height: 200px;
}
</style>
