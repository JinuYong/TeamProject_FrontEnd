<template>
    <div class="container mt-3 px-0">
        <div class="container b px-0">
            <!--    상품 이미지, 상품명 및 결제 관련  -->
            <!--      상품 이미지 -->
            <div class="row mx-2 mt-3">
                <!--      상품 이미지 main -->
                <div class="col-md-6">
                    <div class="row mt-3 mx-1">
                        <img src="@/assets/img/itemDetails/item-image.jpeg"
                             class="img-fluid p-0 b"
                             alt="item-img-large"
                             style="width: 500px; height: 300px">
                        <!--      상품 이미지 small -->
                        <ul class="d-flex justify-content-center mt-2">
                            <li class="p-1 li-img">
                                <img src="@/assets/img/itemDetails/item-image.jpeg" alt="item-img-small"
                                     style="width: 50px; height: 50px"/>
                            </li>
                            <li class="p-1 li-img">
                                <img src="@/assets/img/itemDetails/item-image.jpeg" alt="item-img-small"
                                     style="width: 50px; height: 50px"/>
                            </li>
                            <li class="p-1 li-img">
                                <img src="@/assets/img/itemDetails/item-image.jpeg" alt="item-img-small"
                                     style="width: 50px; height: 50px"/>
                            </li>
                            <li class="p-1 li-img">
                                <img src="@/assets/img/itemDetails/item-image.jpeg" alt="item-img-small"
                                     style="width: 50px; height: 50px"/>
                            </li>
                            <li class="p-1 li-img">
                                <img src="@/assets/img/itemDetails/item-image.jpeg" alt="item-img-small"
                                     style="width: 50px; height: 50px"/>
                            </li>
                            <li class="p-1 li-img">
                                <img src="@/assets/img/itemDetails/item-image.jpeg" alt="item-img-small"
                                     style="width: 50px; height: 50px"/>
                            </li>
                        </ul>
                    </div>

                </div>

                <!--      상품명 및 결제 -->
                <div class="col-md-6 mb-5">
                    <div class="row b mx-1 mt-3 p-3">
                        <div class="p-0">
                            <!--        상품 location(지역) -->
                            <div><span class="badge rounded-pill bg-primary">지역</span></div>
                            <div>
                                <div class="h4">상품명이 들어갈 자리입니다.</div>
                                <p>상품 간략설명이 들어갈 자리입니다.<br> 두줄 정도가 적당합니다.</p>
                            </div>
                        </div>

                        <!--        상품 할인율 및 상품 가격 -->
                        <div class="mt-2"></div>
                        <div class="col-md-3 p-0">
                            <!--            할인율 -->
                            <div class="h3">25%</div>
                        </div>
                        <div class="col-md-9">
                            <div class="text-end">
                                <!--            할인 전 가격 -->
                                <span class="text-decoration-line-through fs-8" style="color:lightgray">100,000원</span>
                                <!--          할인 후 가격 -->
                                <span class="fs-5 pl-2"> 75,000</span><span class="fs-5 pl-2">원</span>
                            </div>
                        </div>
                        <div class="mt-2"></div>
                        <div class="col col-md-7">
                            <div class="mt-1 text-end p-0 pr-0">인원선택</div>
                        </div>
                        <div class="col col-md-5 pl-0">
                            <!--        quantity value button -->
                            <div class="input-group input-group-sm mb-3 " style=" float: right">
                                <span class="input-group-text" id="inputGroup-sizing-sm">-</span>
                                <input type="text" class="form-control"
                                       aria-label="Sizing example input"
                                       aria-describedby="inputGroup-sizing-sm"
                                       style=" text-align:center;"
                                       value="0">
                                <span class="input-group-text" id="inputGroup-sizing-sm">+</span>
                            </div>
                        </div>

                        <!--        결제 가격 -->
                        <div class="mt-3"></div>
                        <div class="text-end">
                            <span class="fs-5">총 </span>
                            <span class="h3"> 75,000</span>
                            <span class="h3"> 원</span>
                        </div>
                        <!--        장바구니 추가 및 결제 버튼 -->
                        <div class="mt-2"></div>
                        <div class="d-grid gap-2 col-md-6 p-0 p-1">
                            <button class="btn btn-secondary" type="button">장바구니 추가</button>
                        </div>
                        <div class="col-md d-grid gap-2 p-0 p-1">
                            <button class="btn btn-secondary">
                                구매하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!--            상품설명 및 리뷰 란 -->
            <div class="row mx-4">
                <!--                상품설명으로 이동-->
                <button class="b col-md-6 btn btn-light">상품설명</button>
                <!--                상품리뷰로 이동-->
                <button class="b col-md-6 item-detail btn btn-light">리뷰</button>
                <!--                상품설명란 -->
                <div class="b col-md-12 px-0">
                    <img class="img-fluid" src="@/assets/img/itemDetails/danang/danang1.png">
                    <img class="img-fluid" src="@/assets/img/itemDetails/danang/danang2.png">
                    <img class="img-fluid" src="@/assets/img/itemDetails/danang/danang3.png">
                    <img class="img-fluid" src="@/assets/img/itemDetails/danang/danang4.png">
                </div>
                <div class="my-3"></div>
            </div>

            <div class="my-5">
                <hr style="background-color: black">
            </div>

            <div class="my-3"></div>

            <!--            카카오 지도 API -->
            <div class="row">
                <div class="col-md">
                    <div class="h5 m-4">여행지 한눈에 보기</div>
                    <div class="px-3">
                        <kakao-map-api/>
                    </div>

                </div>
            </div>
            <div class="my-3"></div>
            <!-- Related items section-->
            <div class="py-3">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="h5 mb-4">관련여행상품 추천</div>
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div class="col mb-5">
                            <div class="card h-80">
                                <!-- Sale badge-->
                                <div class="badge bg-dark text-white position-absolute"
                                     style="top: 0.5rem; right: 0.5rem">
                                    Sale
                                </div>
                                <!-- Product image-->
                                <img class="card-img-top" src="https://dummyimage.com/450x450/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <!-- Product details-->
                                <div class="card-body p-3">
                                    <div class="text-left">
                                        <!-- Product name-->
                                        <h5 class="fw-bolder">여행지 입니다</h5>
                                        <p class="fw">여행내용 입니다</p>

                                        <ul style="float: left; margin: 0">
                                            <li>&nbsp;</li>
                                            <li>
                                                <p class="badge rounded-pill bg-primary m-0">지역</p>
                                            </li>
                                        </ul>
                                        <!-- Product price-->
                                        <ul  style="float: right; margin: 0; padding: 0">
                                            <li>
                                                <span class="text-muted text-decoration-line-through text-right">₩200,000</span>
                                            </li>
                                            <li>
                                                <span class="b-sidebar-right">₩175,000</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-80">
                                <!-- Sale badge-->
                                <div class="badge bg-dark text-white position-absolute"
                                     style="top: 0.5rem; right: 0.5rem">
                                    Sale
                                </div>
                                <!-- Product image-->
                                <img class="card-img-top" src="https://dummyimage.com/450x450/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <!-- Product details-->
                                <div class="card-body p-3">
                                    <div class="text-left">
                                        <!-- Product name-->
                                        <h5 class="fw-bolder">여행지 입니다</h5>
                                        <p class="fw">여행내용 입니다</p>

                                        <ul style="float: left; margin: 0">
                                            <li>&nbsp;</li>
                                            <li>
                                                <p class="badge rounded-pill bg-primary m-0">지역</p>
                                            </li>
                                        </ul>
                                        <!-- Product price-->
                                        <ul  style="float: right; margin: 0; padding: 0">
                                            <li>
                                                <span class="text-muted text-decoration-line-through text-right">₩200,000</span>
                                            </li>
                                            <li>
                                                <span class="b-sidebar-right">₩175,000</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                        <div class="card h-80">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute"
                                 style="top: 0.5rem; right: 0.5rem">
                                Sale
                            </div>
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x450/dee2e6/6c757d.jpg"
                                 alt="..."/>
                            <!-- Product details-->
                            <div class="card-body p-3">
                                <div class="text-left">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">여행지 입니다</h5>
                                    <p class="fw">여행내용 입니다</p>

                                    <ul style="float: left; margin: 0">
                                        <li>&nbsp;</li>
                                        <li>
                                            <p class="badge rounded-pill bg-primary m-0">지역</p>
                                        </li>
                                    </ul>
                                    <!-- Product price-->
                                    <ul  style="float: right; margin: 0; padding: 0">
                                        <li>
                                            <span class="text-muted text-decoration-line-through text-right">₩200,000</span>
                                        </li>
                                        <li>
                                            <span class="b-sidebar-right">₩175,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="col mb-5">
                            <div class="card h-80">
                                <!-- Sale badge-->
                                <div class="badge bg-dark text-white position-absolute"
                                     style="top: 0.5rem; right: 0.5rem">
                                    Sale
                                </div>
                                <!-- Product image-->
                                <img class="card-img-top" src="https://dummyimage.com/450x450/dee2e6/6c757d.jpg"
                                     alt="..."/>
                                <!-- Product details-->
                                <div class="card-body p-3">
                                    <div class="text-left">
                                        <!-- Product name-->
                                        <h5 class="fw-bolder">여행지 입니다</h5>
                                        <p class="fw">여행내용 입니다</p>

                                        <ul style="float: left; margin: 0">
                                            <li>&nbsp;</li>
                                            <li>
                                                <p class="badge rounded-pill bg-primary m-0">지역</p>
                                            </li>
                                        </ul>
                                        <!-- Product price-->
                                        <ul  style="float: right; margin: 0; padding: 0">
                                            <li>
                                                <span class="text-muted text-decoration-line-through text-right">₩200,000</span>
                                            </li>
                                            <li>
                                                <span class="b-sidebar-right">₩175,000</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--                상품리뷰란 표시 -->
            <div class="row">
                <h5 class="m-3 p-3">상품리뷰</h5>
                <div class="col-md">
                    <div class="px-3">
                        <reviews-com></reviews-com>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KakaoMapApi from "~/pages/tourItemDetails/components/KakaoMapApiCom";
import reviewsCom from "~/pages/tourItemDetails/components/ReviewsCom";

export default {
    name: "TourItemDetail",
    components: {
        KakaoMapApi,
        reviewsCom
    },
}
</script>

<style scoped>

.b {
    border: solid 1px lightgray;
}

ul {
    padding: 0;
    display: table;
    margin-left: auto;
    margin-right: auto;
}

li {
    list-style: none;
}

.li-img {
    list-style: none;
    float: left;
}

.li-text {
    list-style: none;
    float: right;
}

.item-detail {
    text-align: center;
    height: 50px;
    line-height: 45px;
}

.review {
    float: left;
    list-style: none;
}


/*# sourceMappingURL=style.css.map */

/* preview pic */
.preview {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

@media screen and (max-width: 996px) {
    .preview {
        margin-bottom: 20px;
    }
}

.preview-pic {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
    border: none;
    margin-top: 15px;
}

.preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%;
}

.preview-thumbnail.nav-tabs li img {
    max-width: 100%;
    display: block;
}

.preview-thumbnail.nav-tabs li a {
    padding: 0;
    margin: 0;
}

.preview-thumbnail.nav-tabs li:last-of-type {
    margin-right: 0;
}

</style>
