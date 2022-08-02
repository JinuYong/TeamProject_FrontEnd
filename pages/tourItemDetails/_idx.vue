<template>
    <div class=" px-0">
        <!--    상품 이미지, 상품명 및 결제 관련  -->
        <!--      상품 이미지 -->
        <div class="row mx-2 mt-3">
            <!--      상품 이미지 main -->
            <div class="col-md-6 p-0">
                <div class="row mt-3 mx-1">
                    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active img-wrapper">
                                <img :src="'data:image/*;base64,' + item.data" class="d-block w-100" :alt="item.name"
                                     style="width:450px; height:420px;">
                            </div>
                        </div>
                        <!--                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">-->
                        <!--                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
                        <!--                            <span class="visually-hidden">Previous</span>-->
                        <!--                        </button>-->
                        <!--                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">-->
                        <!--                            <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
                        <!--                            <span class="visually-hidden">Next</span>-->
                        <!--                        </button>-->
                    </div>
                </div>

            </div>

            <!--      상품명 및 결제 -->
            <div class="col-md-6 mb-4">
                <div class="row b mx-1 mt-3 px-3 pt-3 pb-4">
                    <div class="p-0 mt-2">
                        <!--        상품 location(지역) -->
                        <div>
                            <span class="badge rounded-pill bg-c1">
                                {{ item.area }}
                                </span>
                        </div>
                        <!--                        상품명 및 상품 설명 -->
                        <div>
                            <div class="h4">{{ item.title }}</div>
                            <p>{{ item.content }}</p>
                        </div>
                        <hr>
                        <!--                        투어 일자 -->
                        <div class="col-md pl-0">
                            <div class="text-end">
                                일정시작 {{ item.itemDate }}
                            </div>
                        </div>
                        <hr>
                    </div>

                    <!--        상품 할인율 및 상품 가격 -->
                    <div class="col-md-3 p-0">
                        <!--            할인율 -->
                        <div class="h2 discount">{{ item.discountPer }}%</div>
                    </div>
                    <div class="col-md-9 text-end pt-1">
                        <!--            할인 전 가격 -->
                        <span class="text-decoration-line-through fs-8"
                              style="color:lightgray">{{ item.price | numberFormat }}원</span>
                        <!--          할인 후 가격 -->
                        <span
                            class="fs-5 pl-2">
                            {{ item.price * (1 - item.discountPer / 100) | numberFormat }}원
                        </span>
                    </div>
                    <div class="mt-2"></div>
                    <div class="col col-md">
                        <!--        quantity value button -->

                        <ul class="mr-0 mb-0">
                            <li style="float: left; line-height:32px">인원선택 &nbsp;</li>
                            <li style="float: right">
                                <div class="input-group input-group-sm mb-3">
                                    <button
                                        class="input-group-text"
                                        id="inputGroup-sizing-sm"
                                        @click="itemCountReduce"
                                    >-
                                    </button>
                                    <input type="text" class="input-count"
                                           aria-label="Sizing example input"
                                           aria-describedby="inputGroup-sizing-sm"
                                           size="2"
                                           v-model="this.quntyty">
                                    <button class="input-group-text"
                                            id="inputGroup-sizing-sm"
                                            @click="itemCountAdd"
                                    >+
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!--        결제 가격 -->
                    <div class="text-end pb-2">
                        <span class="fs-5">총 </span>
                        <span class="h3"> {{
                                item.price * (1 - item.discountPer / 100) * this.quntyty | numberFormat
                            }}</span>
                        <span class="h3">원</span>
                    </div>
                    <!--        장바구니 추가 및 결제 버튼 -->
                    <div class="mt-2"></div>
                    <div class="col-md-6 p-0 p-1">
                        <div class="d-grid gap-2">
                            <button class="btn main-hover"
                                    type="button"
                                    @click="!userIdx?
                                        $nuxt.$router.push({path:'/login'}):addCart()">
                                장바구니 추가
                            </button>
                        </div>
                    </div>
                    <router-link :to="'/payment/'+this.user.idx" class="col-md-6 p-0 p-1">
                        <div class="d-grid gap-2">
                            <button class="btn main-hover" type="button">
                                결제하기
                            </button>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <!--            상품설명 및 리뷰 란 -->
        <div class="row mx-4 ">
            <!-- 상세정보로 이동-->
            <a href="#item-detail" class="p-0 col-md-6 sticky-top" style="z-index: 1;">
                <div class="d-grid gap-2">
                    <button class="b item-detail btn btn-light">
                        상세정보
                    </button>
                </div>
            </a>
            <!-- 상품리뷰로 이동-->
            <a href="#item-review" class="p-0 col-md-6 sticky-top" style="z-index: 1;">
                <div class="d-grid gap-2">
                    <button class="b item-detail btn btn-light">리뷰</button>
                </div>
            </a>


            <!--                상품설명란 -->
            <div class="b col-md-12 p-0 text-center" id="item-detail">
                <img id="content-image"
                     class="img-fluid"
                     v-if="this.item.thumnail"
                     :src="getSrc()">
            </div>
            <div class="my-3"></div>
        </div>

        <hr style="background-color: black">

        <!--            카카오 지도 API -->
        <div class="row">
            <div class="col-md">
                <div class="h5 m-4 text-center">여행지 한눈에 보기</div>
                <div class="px-3">
                    <KakaoMapApiCom/>
                </div>

            </div>
        </div>
        <div class="my-3"></div>

        <!-- 상품 card slider -->
        <!-- Related items section-->
        <div class="py-3 slider-div">
            <div class=" px-0 pt-1">
                <div class="h5 m-4">관련여행상품 추천</div>
                <div class="outerDiv pt-2" id="container">
                    <div class="innerDiv mb-5 px-3" v-for="item in itemsArea"
                         v-show="$route.params.idx != item.idx">
                        <!-- 클릭시 해당 아이템으로 이동 -->
                        <router-link :to="'/tourItemDetails/'+ item.idx">
                            <div class="card h-100 item-card">
                                <!-- Sale badge-->
                                <div class="badge bg-dark text-white position-absolute"
                                     style="top: 0.5rem; right: 0.5rem">
                                    Sale
                                </div>
                                <!-- Product image-->
                                <img class="card-img-top card-image"
                                     :src="'data:image/*;base64,' + item.data"
                                     :alt="item.name"/>
                                <!-- Product details-->
                                <div class="card-body p-3">
                                    <div class="text-left">
                                        <!-- Product name-->
                                        <h5 class="fw-bolder">{{ item.title }}</h5>
                                        <p class="fw">{{ item.content }}</p>

                                        <ul style="float: left; margin: 0">
                                            <li>&nbsp;</li>
                                            <li>
                                                <p class="badge rounded-pill bg-c1 m-0">{{ item.area }}</p>
                                            </li>
                                        </ul>
                                        <!-- Product price-->
                                        <ul style="float: right; margin: 0; padding: 0">
                                            <li>
                                            <span
                                                class="text-muted text-decoration-line-through text-right">{{
                                                    item.price | numberFormat
                                                }}</span>
                                            </li>
                                            <li>
                                                <span
                                                    class="b-sidebar-right">{{
                                                        item.price * (1 - (item.discountPer / 100))|numberFormat
                                                    }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <button id="slideLeft" type="button" @click="buttonLeft" class="slider-left">
                        <img src="@/assets/img/itemDetails/left.png" class="img-fluid">
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button id="slideRight" type="button" @click="buttonRight" class="slider-right">
                        <img src="@/assets/img/itemDetails/right.png" class="img-fluid">
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <!--                상품리뷰란 표시 -->
        <div class="row" id="item-review">
            <h5 class="m-3 p-3">상품리뷰</h5>
            <div class="col-md">
                <div class="px-3 ">
                    <div class="bg-white b p-4 mb-4 restaurant-detailed-ratings-and-reviews">

                        <div class="reviews-members py-4" id="review-start"
                             v-for="(review, index) in reviews" v-show="index < 2">
                            <div class="media">
                                <img alt="Generic placeholder image"
                                     src="http://bootdey.com/img/Content/avatar/avatar1.png"
                                     class="mr-3 rounded-pill">
                                <div class="media-body">
                                    <div class="reviews-members-header">
                                        <!-- rating -->
                                        <form
                                            name="myform"
                                            id="myform"
                                            method="post"
                                            action="./save"
                                        >
                                            <fieldset>
                                <span v-for="index in (5 - review.rating)">
                                    <input type="radio" name="rating" :value="index" id="rate4"/>
                                    <label for="rate4">⭐</label>
                                </span>
                                                <span v-for="index in review.rating">
                                    <input type="radio" name="rating" :value="index" id="rate5"/>
                                    <label for="rate5" class="org">⭐</label>
                                </span>
                                            </fieldset>
                                        </form>

                                        <h6 class="mb-1">
                                            <p class="text-black m-0">
                                                {{ review.id }}
                                            </p>
                                        </h6>
                                        <p class="text-gray mb-2">{{ review.insertTime }}</p>
                                    </div>
                                    <div class="reviews-members-body">
                                        <p>{{ review.content }}</p>
                                    </div>
                                </div>
                                <img alt="Generic placeholder image"
                                     src="@/assets/img/itemDetails/review_1.jpeg"
                                     class="ml-3 image-fluid"
                                     style="width: 150px; height: 150px">
                            </div>
                        </div>


                        <!--        리뷰 보기 -->
                        <div class="reviews-members py-4" id="review-start"
                             v-for="(review, index) in reviews" v-show="reviewShow && index >= 2">
                            <div class="media">
                                <img alt="Generic placeholder image"
                                     src="http://bootdey.com/img/Content/avatar/avatar2.png"
                                     class="mr-3 rounded-pill">
                                <div class="media-body">
                                    <div class="reviews-members-header">
                                        <!-- rating -->
                                        <form
                                            name="myform"
                                            id="myform"
                                            method="post"
                                            action="./save"
                                        >
                                            <fieldset>
                                <span v-for="index in (5 - review.rating)">
                                    <input type="radio" name="rating" :value="index" id="rate4"/>
                                    <label for="rate4">⭐</label>
                                </span>
                                                <span v-for="index in review.rating">
                                    <input type="radio" name="rating" :value="index" id="rate5"/>
                                    <label for="rate5" class="org">⭐</label>
                                </span>
                                            </fieldset>
                                        </form>

                                        <h6 class="mb-1">
                                            <p class="text-black m-0">
                                                {{ review.id }}
                                            </p>
                                        </h6>
                                        <p class="text-gray mb-2">{{ review.insertTime }}</p>
                                    </div>
                                    <div class="reviews-members-body">
                                        <p>{{ review.content }}</p>
                                    </div>
                                </div>
                                <img alt="Generic placeholder image"
                                     src="@/assets/img/itemDetails/review_1.jpeg"
                                     class="ml-3 image-fluid"
                                     style="width: 150px; height: 150px">
                            </div>
                        </div>
                        <hr>

                        <a class="text-center pt-4 d-block font-weight-bold review-hover"
                           @click="reviewShow = !reviewShow" href="#review-start">
                            <p class="review-border m-auto" v-show="!reviewShow">리뷰 보기</p>
                        </a>
                        <a class="text-center d-block font-weight-bold review-hover sticky-bottom"
                           @click="reviewShow = !reviewShow" href="#review-start">
                            <p class="review-border m-auto" v-show="reviewShow">리뷰 닫기</p>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ImgGalleryCom from "~/pages/tourItemDetails/components/ImgGalleryCom";
import ItemDetailDataService from "~/pages/service/ItemDetailDataService";
import UserDataService from "~/pages/service/UserDataService";
import ReviewDataService from "~/pages/service/ReviewDataService";
import UploadFilesService from "~/pages/service/UploadFilesService";
// import dayjs from 'dayjs'

export default {
    name: "TourItemDetail",
    components: {
        ImgGalleryCom,
    },
    data() {
        return {
            userIdx: null,
            user: [],
            item: [],
            area: "",
            quntyty: 1,
            itemsArea: [],
            reviews: [],
            value: 3,
            reviewShow: false,
            mainImage: {},
            images: [],
            isLoading: false,
        }
    },
    methods: {
        // todo : item detail들어올때 param으로 item의 idx값 넘겨주기
        getItemData(idx) {
            ItemDetailDataService.getItemData(idx)
                .then(res => {
                    this.item = res.data
                    this.area = res.data.area
                    console.log("_idx : ", this.item)
                    console.log("area : ", this.area)

                    ItemDetailDataService.getItemByArea(this.item.area)
                        .then(res => {
                            this.itemsArea = res.data
                            console.log("ItemsArea : ", this.item.area)

                        })
                        .catch(err => {
                            console.log(err)

                        })
                })
                .catch(err => {
                    console.log(err)
                    alert(err)

                })
        },
        getSrc() {
            // console.log('getSrc',item.thumnail)
            return require(`@/assets/img/itemDetails/contents/${this.item.thumnail}`)
        },
        getUserData(idx) {

            UserDataService.getUser(idx)
                .then(response => {
                    this.user = response.data;
                    // springboot에서 받은 총 데이터 건수
                    // this.count = totalItems;
                    this.userIdx = response.data.idx

                })
                .catch(err => {
                    console.log(err)
                    alert("getUserData:" + err)

                })
        },
        itemCountReduce() {
            if (this.quntyty > 1)
                this.quntyty -= 1;
        },
        itemCountAdd() {
            this.quntyty += 1;
        },
        addCart() {
            let data = {
                idx: null,
                userIdx: this.userIdx,
                itemsIdx: this.$route.params.idx,
                quntyty: this.quntyty
            }
            ItemDetailDataService.insertCart(data)
                .then(res => {
                    console.log(res)
                    if(res.request.status == 200) {
                        alert("장바구니에 추가하였습니다!")
                    }else{
                        alert("이미 장바구니에 있는 상품입니다.")
                    }
                })
                .catch(e => {
                    console.log(e)
                    alert("에러가 발생하였습니다.")
                })
        },
        reviewsData(idx) {

            ReviewDataService.getReview(idx)
                .then(res => {
                    this.reviews = res.data
                    console.log("review data : {}", this.reviews)
                    console.log("response : {}", res.data)

                })
                .catch(err => {
                    console.log(err)

                })
        },
        buttonRight() {
            // document.getElementById('container').scrollLeft += 300;
            var container = document.getElementById('container');
            this.sideScroll(container, 'right', 1, 500, 10);
        },
        buttonLeft() {
            // document.getElementById('container').scrollLeft -= 300;
            var container = document.getElementById('container');
            this.sideScroll(container, 'left', 1, 500, 10);
        },
        sideScroll(element, direction, speed, distance, step) {
            var scrollAmount = 0;
            var slideTimer = setInterval(function () {
                if (direction == 'left') {
                    element.scrollLeft -= step;
                } else {
                    element.scrollLeft += step;
                }
                scrollAmount += step;
                if (scrollAmount >= distance) {
                    window.clearInterval(slideTimer);
                }
            }, speed);
        },
        changePic() {
            var pic = document.querySelector("#pic");
            // .small의 src
            var newPic = this.src;
            // cup의 src를 .small의 src로 세팅
            pic.src = newPic;
        },
        initPic() {
            var smallPics = document.querySelectorAll(".small");

            for (let i = 0; i < smallPics.length; i++) {
                smallPics[i].onclick = this.changePic();
            }
        },


    },
    filters: {
        numberFormat: (value, numFix) => {
            value = parseFloat(value);
            if (!value) return '0';
            return value.toFixed(numFix).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        },
    },
    mounted() {
//         const current = document.querySelector("#selected");
//         const thumbs = document.querySelectorAll(".thumbs img");
//         const opacity = 0.5;
// // Set opacity of first image
//         thumbs[0].style.opacity = opacity;
//         thumbs.forEach(img => img.addEventListener("click", imgActivate));
//
//         function imgActivate(e) {
//             // Reset opacity on all thumbs
//             thumbs.forEach(img => (img.style.opacity = 1));
//             // Change current image to source of clicked image
//             current.src = e.target.src;
//             // Add fadeIn class
//             current.classList.add("fade-in");
//             // Remove fadeIn class after animation time elapsed
//             setTimeout(() => current.classList.remove("fade-in"), 500);
//             // Change opacity to variable value
//             e.target.style.opacity = opacity;
//         }
        // 이미지 불러오기 메소드
        // this.itemImageData();

        // document.getElementById('content-image').src =
        //     require('@/assets/img/itemDetails/contents/' + this.item.thumnail)

        // 로그인 관련 설정
        this.userIdx = JSON.parse(localStorage.getItem("user")).idx;
        console.log("userIdx:" + JSON.parse(localStorage.getItem("user")).idx)
        this.getItemData(this.$route.params.idx);
        // this.getUserData(JSON.parse(localStorage.getItem("idx")).idx);
        this.reviewsData(this.$route.params.idx);
    }
}
</script>

<style scoped>

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

/* image gallery */
.selected {
    width: 500px;
    height: 400px;
}

.panel-main img, .thumbs img {
    width: 100%;
    height: auto;
}


@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.fade-in {
    opacity: 0;
    animation: fadeIn 0.5s ease-in 1 forwards;
}

.li-img {
    list-style: none;
    float: left;
}

#selected {
    width: 100%;
}

.carousel-item {
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    transition: transform 0.5s ease, -webkit-transform 0.5s ease;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
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

.bg-c1 {
    background-color: #A30000;
}

.input-group-text {
    cursor: pointer
}

a {
    color: black;
}

a:hover {
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

/* card slider */

.card-image {
    width: 248px;
    height: 248px;
}


/* 공통 */
ul {
    padding: 0;
    display: table;
    margin-left: auto;
    margin-right: auto;
}

a {
    text-decoration: none;
}

a.btn-link {
    float: left;
}

.bg-c1 {
    background-color: #A30000;
}

a {
    color: black;
}

.item-card {
    width: 191px;
}

.item-card:hover {
    margin-top: -4px;
    -webkit-box-shadow: -4px 9px 20px -12px black;
    -moz-box-shadow: -4px 9px 20px -12px black;
    box-shadow: -4px 9px 20px -12px black;
    transition-duration: 0.5s;
    color: black;
}

.item-card:not(:hover) {
    transition-duration: 0.5s;
    color: black;
}

.outerDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
}

.outerDiv::-webkit-scrollbar {
    display: none;
}

.card {
    width: 250px;
}

.slider-div {
    position: relative;
}

.slider-left {
    background: none;
    border: none;
    width: 60px;
    height: 100px;
    opacity: 0.5;
    float: left;
    position: absolute;
    height: 70%
}

.slider-right {
    background: none;
    border: none;
    width: 60px;
    opacity: 0.5;
    position: absolute;
    right: 0%;
    height: 70%;
}

/* 리뷰 관련 */

.total-like-user-main a {
    display: inline-block;
    margin: 0 -17px 0 0;
}


.restaurant-detailed-ratings-and-reviews hr {
    margin: 0 -24px;
}

.graph-star-rating-header .star-rating {
    font-size: 17px;
}


.offer-dedicated-nav .nav-link.active,
.offer-dedicated-nav .nav-link:hover,
.offer-dedicated-nav .nav-link:focus {
    border-color: #3868fb;
    color: #3868fb;
}

.offer-dedicated-nav .nav-link {
    border-bottom: 2px solid #fff;
    color: #000000;
    padding: 16px 0;
    font-weight: 600;
}

.offer-dedicated-nav .nav-item {
    margin: 0 37px 0 0;
}

.restaurant-detailed-header-right .btn-success {
    border-radius: 3px;
    height: 45px;
    margin: -18px 0 18px;
    min-width: 130px;
    padding: 7px;
}

.text-black {
    color: #000000;
}


.menu-list img {
    width: 41px;
    height: 41px;
    object-fit: cover;
}

.restaurant-detailed-header-left img {
    width: 88px;
    height: 88px;
    border-radius: 3px;
    object-fit: cover;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
}

.reviews-members .media .mr-3 {
    width: 56px;
    height: 56px;
    object-fit: cover;
}

.rounded-pill {
    border-radius: 50rem !important;
}


.total-like-user-main a {
    display: inline-block;
    margin: 0 -17px 0 0;
}


.restaurant-detailed-ratings-and-reviews hr {
    margin: 0 -24px;
}

.graph-star-rating-header .star-rating {
    font-size: 17px;
}

.text-gray {
    color: gray;
}

.review-hover {
    cursor: pointer;
}

a {
    color: black;
}


/* rating */
#myform fieldset {
    display: inline-block; /* 하위 별점 이미지들이 있는 영역만 자리를 차지함.*/
    border: 0; /* 필드셋 테두리 제거 */
    direction: rtl;
}

#myform input[type="radio"] {
    display: none; /* 라디오박스 감춤 */
}

#myform label {
    font-size: 1em; /* 이모지 크기 */
    color: transparent; /* 기존 이모지 컬러 제거 */
    text-shadow: 0 0 0 gray; /* 새 이모지 색상 부여 */
}

#myform label.org {
    font-size: 1em; /* 이모지 크기 */
    color: transparent; /* 기존 이모지 컬러 제거 */
    text-shadow: 0 0 0 orange; /* 새 이모지 색상 부여 */
}

.review-border {
    background-color: #A30000;
    color: white;
    font-weight: lighter;
    width: 110px;
    height: 28px;
    border: 1px solid #A30000;
    border-radius: 50px;

}
</style>
