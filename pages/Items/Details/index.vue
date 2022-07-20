<template>
    <div class="container b px-0">
        <!--    상품 이미지, 상품명 및 결제 관련  -->
        <!--      상품 이미지 -->
        <div class="row mx-2 mt-3">
            <!--      상품 이미지 main -->
            <div class="col-md-6 p-0">
                <div class="row mt-3 mx-1">
                    <img-gallery-com/>
                </div>

            </div>

            <!--      상품명 및 결제 -->
            <div class="col-md-6 mb-4">
                <div class="row b mx-1 mt-3 px-3 pt-3 pb-4">
                    <div class="p-0 mt-2">
                        <!--        상품 location(지역) -->
                        <div>
                            <span class="badge rounded-pill bg-c1">
                                {{ tourItem.tourLocation }}
                                </span>
                        </div>
                        <!--                        상품명 및 상품 설명 -->
                        <div>
                            <div class="h4">상품명이 들어갈 자리입니다.</div>
                            <h5>3박 4일</h5>
                            <p>상품의 내용은 이렇습니다. 상품의 간략한 설명을 넣습니다.</p>
                        </div>
                        <hr>
                        <!--                        투어 일자 -->
                        <div class="col-md pl-0">
                            <div class="text-end">
                                일정시작 {{ tourItem.tourItemDate }}
                            </div>
                        </div>
                        <hr>
                    </div>

                    <!--        상품 할인율 및 상품 가격 -->
                    <div class="col-md-3 p-0">
                        <!--            할인율 -->
                        <div class="h2 discount">{{ tourItem.tourDiscountPer }}%</div>
                    </div>
                    <div class="col-md-9 text-end pt-1">
                        <!--            할인 전 가격 -->
                        <span class="text-decoration-line-through fs-8"
                              style="color:lightgray">{{ tourItem.tourPrice | numberFormat }}원</span>
                        <!--          할인 후 가격 -->
                        <span
                            class="fs-5 pl-2">{{
                                tourItem.tourPrice * (1 - tourItem.tourDiscountPer / 100) | numberFormat
                            }}원</span>
                    </div>
                    <div class="mt-2"></div>
                    <div class="col col-md">
                        <!--        quantity value button -->

                        <ul class="mr-0 mb-0">
                            <li style="float: left; line-height:32px">인원선택 &nbsp;</li>
                            <li style="float: right">
                                <div class="input-group input-group-sm mb-3">
                                    <span
                                        class="input-group-text"
                                        id="inputGroup-sizing-sm"
                                        @click="itemCountReduce"
                                    >-</span>
                                    <input type="text" class="input-count"
                                           aria-label="Sizing example input"
                                           aria-describedby="inputGroup-sizing-sm"
                                           size="2"
                                           v-bind:value="tourItem.tourItemCount">
                                    <span class="input-group-text"
                                          id="inputGroup-sizing-sm"
                                          @click="itemCountAdd"
                                    >+</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!--        결제 가격 -->
                    <div class="text-end pb-2">
                        <span class="fs-5">총 </span>
                        <span class="h3"> {{
                                tourItem.tourPrice * (1 - tourItem.tourDiscountPer / 100) * tourItem.tourItemCount | numberFormat
                            }}</span>
                        <span class="h3">원</span>
                    </div>
                    <!--        장바구니 추가 및 결제 버튼 -->
                    <div class="mt-2"></div>
                    <a href="/shoppingCart/ShoppingCart" class="col-md-6 p-0 p-1">
                        <div class="d-grid gap-2">
                            <button class="btn main-hover" type="button">장바구니 추가</button>
                        </div>
                    </a>
                    <a href="/payment/Payment" class="col-md-6 p-0 p-1">
                        <div class="d-grid gap-2">
                            <button class="btn main-hover" type="button">장바구니 추가</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!--            상품설명 및 리뷰 란 -->
        <div class="row mx-4">
            <!-- 상세정보로 이동-->
            <a href="#item-detail" class="p-0 col-md-6 sticky-top" style="z-index: 1">
                <div class="d-grid gap-2">
                    <button class="b item-detail btn btn-light">
                        상세정보
                    </button>
                </div>
            </a>
            <!-- 상품리뷰로 이동-->
            <a href="#item-review" class="p-0 col-md-6 sticky-top" style="z-index: 1">
                <div class="d-grid gap-2">
                    <button class="b item-detail btn btn-light">리뷰</button>
                </div>
            </a>


            <!--                상품설명란 -->
            <div class="b col-md-12 p-0 text-center" id="item-detail">
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
                    <!-- <KaKaoMapApiCom /> -->
                </div>

            </div>
        </div>
        <div class="my-3"></div>

        <!-- 상품 card slider -->
        <card-slider-com/>

        <!--                상품리뷰란 표시 -->
        <div class="row" id="item-review">
            <h5 class="m-3 p-3">상품리뷰</h5>
            <div class="col-md">
                <div class="px-3">
                    <reviews-com></reviews-com>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import reviewsCom from "~/pages/Items/Details/components/ReviewsCom";
import ImgGalleryCom from "~/pages/Items/Details/components/ImgGalleryCom";
import CardSliderCom from "~/pages/Items/Details/components/CardSliderCom";

export default {
    name: "TourItemDetail",
    components: {
        CardSliderCom,
        ImgGalleryCom,
        reviewsCom
    },
    data() {
        return {
            tourItem: {
                tourIdx: 0,
                tourTitle: "",
                tourContent: "",
                tourInsertTime: "",
                tourImage: [],
                tourPrice: 250000,
                tourDiscountPer: 30,
                tourUserCount: 0,
                tourItemView: 10,
                tourItemDate: "2022/07/21",
                tourLocation: "지역",
                tourItemCount: 1,
                tourOption: {}
            },
        }
    },
    methods: {
        itemCountReduce() {
            if (this.tourItem.tourItemCount > 1)
                this.tourItem.tourItemCount -= 1;
        },
        itemCountAdd() {
            this.tourItem.tourItemCount += 1;
        }
    },
    filters: {
        numberFormat: (value, numFix) => {
            value = parseFloat(value);
            if (!value) return '0';
            return value.toFixed(numFix).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        },
    },
    mounted() {

    }
}
</script>

<style>

/* 공통 */
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
    line-height: 35px;
}

.item-detail:hover {
    background-color: #E5E5E5;
}

.main-hover {
    background-color: #A30000;
    color: #ffffff;
}

.main-hover:hover {
    background-color: #E5E5E5;
    color: black;
}

.review {
    float: left;
    list-style: none;
}

/* 상품 이미지, 결제 관련 Css*/
.discount {
    color: #A30000;
}


a {
    text-decoration: none;
}

a.btn-link {
    float: left;
}

.input-count {
    text-align: center;
    border: 1px solid lightgray;
}


/* main color */

.c1 {
    background-color: #A30000;
}

.c2 {
    background-color: #E5E5E5;
}

.bg-c1 {
    background-color: #A30000;
}

.carousel-item {
    width: 500px;
    height: 300px;
}

.input-group-text {
    cursor: pointer
}

a {
    color: black;
}
a:hover{
    text-decoration: none;
}

.btn {
    border-radius: 0px;
    border: none;
}

.btn:active {
    border: none;
}

.item-detail {
    border: solid 1px lightgray;
}

.date-input {
    border: 1px solid lightgray;
}
</style>
