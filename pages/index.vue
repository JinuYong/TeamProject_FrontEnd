<template>
    <div id="app" class="mainpage-container">
        <!-- 배너 -->
        <div class="banner-video">
            <video muted autoplay loop>
                <source src="@/assets/img/main/main-video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="banner-container p-0 main-img">

            <div class="banner-search-container">
                <div class="search-logo">
                    <img class="seoul-jeju-img" src="@/assets/img/main/seoul-jeju-white.png">
                </div>
                <div class="col-md-12 select-color m-auto">
                    <div class="text-left pt-3 px-2">
                        <p class="color-white fw-light">
                            위치를 선택해 주세요
                        </p>
                    </div>
                    <div class="row px-3 search-height">
                        <div class="col-md-5 p-0 py-1">
                            <div>
                                <div class="p-0">
                                    <input
                                        id="areaPic"
                                        type="text"
                                        class="area-search "
                                        placeholder="출발위치"
                                        style="width: 100%"
                                        @click="show1 = !show1"
                                        v-model:value="this.areaValue1"
                                    />
                                </div>

                                <div class="area-search-box" v-show="!show1">
                                    <br/>
                                    <div class="row">
                                        <h6 class="col-md-9 offset-md-1 asb-title">지역</h6>
                                        <button
                                            type="button"
                                            class="btn-close col-md-1 asb-btn"
                                            aria-label="Close"
                                            @click="show1 = !show1"
                                        ></button>
                                    </div>
                                    <hr class="arb-line"/>
                                    <div class="pl-5">
                                        <div class="row sb-con">
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue1('서울')"
                                                   href="#"
                                                   class="text-hover">서울</a>
                                            </div>
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue1('양양')"
                                                   href="#"
                                                   class="text-hover">양양</a>
                                            </div>
                                        </div>
                                        <div class="row sb-con">
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue1('강릉')"
                                                   href="#"
                                                   class="text-hover">강릉</a>
                                            </div>
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue1('경주')"
                                                   href="#"
                                                   class="text-hover">경주</a>
                                            </div>
                                        </div>
                                        <div class="row sb-con">
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue1('부산')"
                                                   href="#"
                                                   class="text-hover">부산</a>
                                            </div>
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue1('통영')"
                                                   href="#"
                                                   class="text-hover">통영</a>
                                            </div>
                                        </div>
                                        <div class="row sb-con">
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue1('포항')"
                                                   href="#"
                                                   class="text-hover">포항</a>
                                            </div>
                                            <div class="col mb-content">
                                                <a href="#"
                                                   @click="searchAreaValue1('제주도')"
                                                   class="text-hover">제주도</a>
                                            </div>
                                        </div>
                                        <div class="row sb-con">
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue1('여수')"
                                                   href="#"
                                                   class="text-hover">여수</a>
                                            </div>
                                            <div class="col mb-content">
                                                <a href="#"
                                                   @click="searchAreaValue1('담양')"
                                                   class="text-hover">담양</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 p-0 my-1">
                            <div>
                                <div class="p-0 right-arrow">
                                    <div class="right-arrow-img">
                                        <img src="@/assets/img/right-arrow.png"/>
                                    </div>
                                    <input
                                        id="areaPic"
                                        type="text"
                                        class="area-search "
                                        placeholder="도착위치"
                                        style="width: 100%"
                                        @click="show2 = !show2"
                                        v-model:value="this.keyword"
                                    />
                                </div>

                                <div class="area-search-box" v-show="!show2">
                                    <br/>
                                    <div class="row">
                                        <h6 class="col-md-9 offset-md-1 asb-title">지역</h6>
                                        <button
                                            type="button"
                                            class="btn-close col-md-1 asb-btn"
                                            aria-label="Close"
                                            @click="show2 = !show2"
                                        ></button>
                                    </div>
                                    <hr class="arb-line"/>
                                    <div class="ml-5">
                                        <div class="row sb-con">
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue2('서울')"
                                                   class="text-hover">서울</a>
                                            </div>
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue2('양양')"
                                                   href="#"
                                                   class="text-hover">양양</a>
                                            </div>
                                        </div>
                                        <div class="row sb-con">
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue2('강릉')"
                                                   href="#"
                                                   class="text-hover">강릉</a>
                                            </div>
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue2('경주')"
                                                   href="#"
                                                   class="text-hover">경주</a>
                                            </div>
                                        </div>
                                        <div class="row sb-con">
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue2('부산')"
                                                   href="#"
                                                   class="text-hover">부산</a>
                                            </div>
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue2('통영')"
                                                   href="#"
                                                   class="text-hover">통영</a>
                                            </div>
                                        </div>
                                        <div class="row sb-con">
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue2('포항')"
                                                   href="#"
                                                   class="text-hover">포항</a>
                                            </div>
                                            <div class="col mb-content">
                                                <a href="#"
                                                   @click="searchAreaValue2('제주도')"
                                                   class="text-hover">제주도</a>
                                            </div>
                                        </div>
                                        <div class="row sb-con">
                                            <div class="col mb-content">
                                                <a @click="searchAreaValue2('여수')"
                                                   href="#"
                                                   class="text-hover">여수</a>
                                            </div>
                                            <div class="col mb-content">
                                                <a href="#"
                                                   @click="searchAreaValue2('담양')"
                                                   class="text-hover">담양</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 버튼 -->
                        <router-link :to="{path: '/SearchResult', query: {keyword:this.keyword}}"
                                     class="col-md-2 p-0 pl-2 search-btn-parent">
                            <div class="d-grid gap-2">
                                <button type="button" class="btn search-btn" @click="searchDateValue">
                                    <img class="img-fluid search-img" src="@/assets/img/search_icon_white.png"/> Search
                                </button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- 배너 끝 -->
        <!-- 검색창 시작  -->

        <!-- 본문 시작 1 -->
        <div class="content-start">
            <div class="">
                <div class="py-3 slider-div">
                    <div class="container px-0 pt-1">
                        <div class="h4 m-4">급상승 여행지</div>
                        <div class="outerDiv pt-2" id="container">
                            <div class="innerDiv mb-5 px-3" v-for="(item,index) in items" v-show="index % 3 == 0">
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
            </div>
            <!-- 본문 끝 -->
            <!-- 본문 시작 2 -->
            <div class="">
                <div class="py-3 slider-div">
                    <div class="container px-0 pt-1">
                        <div class="h4 m-4">최신 여행지</div>
                        <div class="outerDiv pt-2" id="container2">
                            <div class="innerDiv mb-5 px-3" v-for="(item,index) in items" v-show="index % 2 == 0">
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
                            <button id="slideLeft" type="button" @click="buttonLeft2" class="slider-left">
                                <img src="@/assets/img/itemDetails/left.png" class="img-fluid">
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button id="slideRight" type="button" @click="buttonRight2" class="slider-right">
                                <img src="@/assets/img/itemDetails/right.png" class="img-fluid">
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 본문 끝 -->
            <!-- 본문 시작 3 -->
            <div class="">
                <div class="py-3 slider-div">
                    <div class="container px-0 pt-1">
                        <div class="h4 m-4">체험 여행지</div>
                        <div class="outerDiv pt-2" id="container3">
                            <div class="innerDiv mb-5 px-3" v-for="(item,index) in items">
                                <!-- 클릭시 해당 아이템으로 이동 -->
                                <router-link :to="'/tourItemDetails/'+ item.idx">
                                    <div class="card h-100 item-card">
                                        <!-- Sale badge-->
                                        <div class="badge bg-dark  text-white position-absolute"
                                             style="top: 0.5rem; right: 0.5rem">
                                            Sale
                                        </div>
                                        <!-- Product image-->
                                        <img id="item-image"
                                             class="card-img-top card-image"
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
                            <button id="slideLeft" type="button" @click="buttonLeft3" class="slider-left">
                                <img src="@/assets/img/itemDetails/left.png" class="img-fluid">
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button id="slideRight" type="button" @click="buttonRight3" class="slider-right">
                                <img src="@/assets/img/itemDetails/right.png" class="img-fluid">
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 본문 끝 -->

        <script>
            // <!--
            // datepicker
            // 시작 -->
            $(function () {
                $(".datepicker").datepicker();
            });

            $.datepicker.setDefaults({
                dateFormat: "yy-mm-dd",
                prevText: "이전 달",
                nextText: "다음 달",
                monthNames: [
                    "1월",
                    "2월",
                    "3월",
                    "4월",
                    "5월",
                    "6월",
                    "7월",
                    "8월",
                    "9월",
                    "10월",
                    "11월",
                    "12월",
                ],
                monthNamesShort: [
                    "1월",
                    "2월",
                    "3월",
                    "4월",
                    "5월",
                    "6월",
                    "7월",
                    "8월",
                    "9월",
                    "10월",
                    "11월",
                    "12월",
                ],
                dayNames: ["일", "월", "화", "수", "목", "금", "토"],
                dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
                dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
                showMonthAfterYear: true,
                yearSuffix: "년",
            });
            <!-- datepicker 끝 -->
        </script>
    </div>
</template>

<script>
import indexDataService from "~/pages/service/IndexDataService";
import UploadFilesService from "~/pages/service/UploadFilesService";

export default {
    name: "IndexPage",
    layout: "MyPage",
    data() {
        return {
            show1: true,
            show2: true,
            items: [],
            areaValue1: "",
            keyword: "",
            searchDate: "",
            images: [],
            itemImages: []
        };
    },
    methods: {
        getItemAll() {
            indexDataService.getItemAll()
                .then(res => {
                    // console.log("getItemAll : ", res.data)
                    this.items = res.data
                    console.log(this.items);
                })
                .catch(err => {
                    console.log(err)
                    alert("불러오기에 실패하였습니다")
                })
        },
        // getImage() {
        //     UploadFilesService.getFiles()
        //         .then(res => {
        //             this.images = res.data
        //             console.log(this.images)
        //         })
        //         .catch(err => {
        //             alert("사진을 불러오지 못하였습니다.")
        //             console.log(err)
        //         })
        // },
        searchAreaValue1(area) {
            this.areaValue1 = area
            this.show1 = true;
        },
        searchAreaValue2(area) {
            this.keyword = area
            this.show2 = true;
        },
        searchDateValue() {
            //alerting the value inside the textbox
            var date = $("#datePic").datepicker("getDate");
            this.searchDate = $.datepicker.formatDate("yy-mm-dd", date);
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
        buttonRight2() {
            // document.getElementById('container').scrollLeft += 300;
            var container = document.getElementById('container2');
            this.sideScroll(container, 'right', 1, 500, 10);
        },
        buttonLeft2() {
            // document.getElementById('container').scrollLeft -= 300;
            var container = document.getElementById('container2');
            this.sideScroll(container, 'left', 1, 500, 10);
        },
        buttonRight3() {
            // document.getElementById('container').scrollLeft += 300;
            var container = document.getElementById('container3');
            this.sideScroll(container, 'right', 1, 500, 10);
        },
        buttonLeft3() {
            // document.getElementById('container').scrollLeft -= 300;
            var container = document.getElementById('container3');
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
        itemImage(i) {
            // let blob = new Blob([new ArrayBuffer(this.items[i].data)], { type: "image/*" });
            // let name = this.items[i].name;

            document.getElementById("item-image").src = "data:image/*;base64," + this.items[i].data;

            // const url =window.URL.createObjectURL(blob);
            //
            // document.getElementById("item-image").src = url;
            // document.getElementById("item-image").alt = name;
            //
            // console.log(url)
        }
    },
    computed: {},
    filters: {
        numberFormat: (value, numFix) => {
            value = parseFloat(value);
            if (!value) return '0';
            return value.toFixed(numFix).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        },
    },
    mounted() {
        this.getItemAll();
        // this.itemImage();
    }
}
;

// TODO:  datepicker 위치 왜 ?
</script>

<style scoped>
/* 공통 시작 */
ul,
li {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: black;
}

/* 공통 끝 */
.main-img {
    z-index: 0;
    opacity: 0.9;
}
.mainpage-container {
    position: relative;
}
.banner-video {
    position: absolute;
    width: 100vw;
}
.banner-video video {
    height: 600px;
    width: 100%;
    object-fit: cover;
}
.banner-container {
    display: flex;
    padding: 200px;
    height: 600px;
    width: 100vw;
    justify-content: center;
    align-items: center;
}
.search-logo {
    /* height: 100px; */
    display: flex;
    padding: 20px;
}

.main-img img {
    /* height: 700px; */
}

/* select창 시작 */
.seoul-jeju-img {
    height: 100px;
    margin: auto;
}
.select-color {
    height: 120px;
    background-color: rgba(49, 49, 49, 0.8);
    position: relative;
    border-radius: 0.25em;
    width: 900px;
}

.search-height {
    position: absolute;
    top: 50px;
    width: 100%;
}


.text-hover:hover {
    color: #a30000;
}

.top {
    margin: 0px -12px 0 1px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
}

.area-search {
    font-weight: 400;
    height: 45px;
    padding-left: 15px;
    border: 1px solid gray;
    border-radius: 0.25em;
}

.area-search::placeholder {
    color: #dfdfdf;
}

.area-search-box {
    z-index: 2;
    position: absolute;
    width: 500px;
    height: 350px;
    top: -350px;
    left: 0%;
    background: white;
    border: 1px solid #eee;
    border-radius: 0.25em;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.1);
}

.area-search-box a:hover {
    border-bottom-color: #a30000;
    border-radius: 0px;
}

.asb-title {
    font-size: 17px;
    margin-left: 25px;
}

.asb-btn {
    margin-left: 23px;
}

.arb-line {
    color: gray;
}

.sb-con {
    font-size: 15px;
    font-weight: 300;
}

.select-pick {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 12px 0 12px 0;
    border-radius: 10px;
    height: 320px;
}

.modal {
    --bs-modal-header-border-color: #a30000;
}

.modal-body {
    font-size: 18px;
}

.mb-content {
    padding: 0 0 15px 0;
}

.mb-content:hover {
    color: #a30000;
}

.mb-content a:hover {
    border-bottom: 1px solid #a30000;
}

.sbox {
    border-radius: 0.25em;
    height: 36px;
    border: 1px solid gray;
}

.area-select {
    border-radius: 0.25em;
    height: 36px;
    border: 1px solid gray;
    color: gray;
    font-weight: 400;
    font-size: 14px;
}

.date-input {
    border-radius: 0.25em;
    height: 36px;
    border: 1px solid gray;
    padding-left: 15px;
}

.date-input::placeholder {
    color: gray;
    font-weight: 400;
    font-size: 14px;
}

.spt {
    margin: 0 0 1px 2px;
}

.select-line {
    margin: 0 2px;
}

.search-btn-parent {
    top: 5px
}

.search-btn {
    font-weight: 400;
    color: white;
    height: 43px;
    background: #a30000;
    border: #a30000;
}

.search-btn:hover {
    color: black;
    background: #E5E5E5;
    border: #a30000;
    /* border-radius: 0.25em; */
}

.search-img {
    width: 16px;
}

.color-white {
    color: white;
}

.right-arrow {
    position: relative;

}

.right-arrow-img {
    text-align: center;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 30px;
    top: 8px;
    width: 30px;
    height: 30px;
    position: absolute;
    left: -14px;
}

.right-arrow-img img {
    width: 15px;
}

/* select창 끝 */

/* 본문 시작 */
.card {
    min-width: 222px;
}

.card-image {
    width: 248px;
    height: 248px;
}

.small-title {
    font-size: 20px;
    padding: 30px 0 10px 15px;
}

.jump {
    display: flex;
    justify-content: space-between;
}

.badge {
    background-color: #a30000 !important;
}

.text-dark {
    color: white !important;
}

/* 본문 끝 */

/* card slider */
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
    opacity: 0.5;
    /*float: left;*/
    left: -12px;
    position: absolute;
    height: 70%;
}

.slider-right {
    background: none;
    border: none;
    width: 60px;
    opacity: 0.5;
    position: absolute;
    right: 0px;
    height: 70%;
}

.content-start {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
}

/* datepicker 적용x -> layouts/default로 이동 */
</style>
