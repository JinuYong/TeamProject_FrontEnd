<template>
    <div class="main-container"> <!-- 부모 div Start -->
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"> <!-- 캐러셀 Start -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/img/ItemListImage/trip1.jpg" class="d-block w-100" width="700" height="500" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/img/ItemListImage/trip2.jpg" class="d-block w-100" width="700" height="500" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/img/ItemListImage/trip3.jpg" class="d-block w-100" width="700" height="500" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> <!-- 캐러셀 end -->

        <div class="mt-4 border"> <!--    지역 카테고리 start-->
            <div class="col m-4 text-center">
                <div class="button-group">
                    <span class="area-title">지역</span>
                    <span class="divider"></span>
                    <button @click="retrieveAreas()" type="button" class="btn area-btn on">전체</button>
                    <button @click="locationFilter('서울')" type="button" class="btn area-btn">서울</button>
                    <button @click="locationFilter('부산')" type="button" class="btn area-btn">부산</button>
                    <button @click="locationFilter('제주도')" type="button" class="btn area-btn">제주</button>
                    <button @click="locationFilter('광주')" type="button" class="btn area-btn">광주</button>
                    <button @click="locationFilter('포항')" type="button" class="btn area-btn">포항</button>
                    <button @click="locationFilter('전주')" type="button" class="btn area-btn">전주</button>
                    <button @click="locationFilter('대구')" type="button" class="btn area-btn">대구</button>
                    <button @click="etc()" type="button" class="btn area-btn">기타</button>
                </div>
            </div>
        </div> <!--    지역 카테고리 end-->

        <div class="mb-4">
            <div class="text-end">
                <br>
                <br>
                <a href="#" v-on:click.prevent="filtering('viewCount')" class="link-secondary">조회순 | </a>
                <a href="#" v-on:click.prevent="filtering('ReviewCount')" class="link-secondary">리뷰많은순 | </a>
                <a href="#" v-on:click.prevent="filtering('Price')" class="link-secondary">가격낮은순</a>
            </div>

            <div class="row">
                <div class="col-md-3 p-3" v-for="(area, index) in areas">
                    <router-link :to="'/tourItemDetails/'+ area.idx">
                        <div class="card h-100 w-100 item-card">
                            <!-- Sale badge-->
                            <div class="badge bg-dark text-white position-absolute"
                                 style="top: 0.5rem; right: 0.5rem">
                                Sale
                            </div>
                            <!-- Product image-->
                            <img class="card-img-top" :src="'data:image/*;base64,' + area.data"
                                 alt="..." style="height: 248px"/>
                            <!-- Product details-->
                            <div class="card-body test p-3">
                                <div class="text-left ">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{ area.title }}</h5>
                                    <p class="fw">{{ area.content }}</p>
                                </div>
                                <div class="text-right line">
                                    <div class="card-body-content">
                                        <ul style="float: left; margin: 0">
                                            <li>
                                                <p class="badge rounded-pill bg-c1 m-0">{{ area.area }}</p>
                                            </li>
                                        </ul>
                                        <!-- Product price-->
                                        <ul style="float: right; margin: 0; padding: 0">
                                            <li>
                                            <span
                                                class="text-muted text-decoration-line-through text-right">{{
                                                    area.price | numberFormat
                                                }}</span>
                                            </li>
                                            <li>
                                                <span
                                                    class="b-sidebar-right">{{
                                                        area.price * (1 - (area.discountPer / 100))|numberFormat
                                                    }}</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div> <!-- Card end#1 -->
    </div>  <!-- 부모 div End -->
</template>

<script>
import ItemListDataService from "~/pages/service/ItemListDataService";

/*eslint-disable*/

export default {
    name: "item",
    data() {
        return {
            areas : [],
            location: "",
            itemDetail: []
        }
    },

    methods: {

        // 모든 지역 조회 서비스 호출
        retrieveAreas() {
            // axios로 spring에 모든 지역 조회 요청
            ItemListDataService.getAllArea()
                // 성공하면 then으로 서버(spring) 데이터(response.data)가 들어옴
                .then(response => {
                    this.areas = response.data;
                })
                //    실패하면 catch로 에러메세지가 들어옴
                .catch( e => {
                    alert(e);
                })
        },

        // 지역별 상품 (필터링) 조회 메소드
        locationFilter(location) {
            console.log("지역 = " + location);
            ItemListDataService.findByArea(location)
                // 성공하면 then으로 서버(spring) 데이터(response.data)가 들어옴
                .then(response => {
                    this.areas = response.data;
                    console.log(response);
                })
                //    실패하면 catch로 에러메세지가 들어옴
                .catch( e => {
                    alert(e);
                })
        },

        // 가격낮은순 , 리뷰많은순 , 조회순 메소드
        filtering(param) {
            let filter = param;
            if (filter == 'viewCount') {
                ItemListDataService.findViewCountDESC()
                    .then(response => {
                        this.areas = response.data
                    })
                    //    실패하면 catch로 에러메세지가 들어옴
                    .catch( e => {
                        alert(e);
                    })
            } else if(filter == 'ReviewCount') {
                ItemListDataService.findReviewCount()
                    .then(response => {
                        this.areas = response.data
                    })
                    //    실패하면 catch로 에러메세지가 들어옴
                    .catch( e => {
                        alert(e);
                    })
            } else if (filter =='Price') {
                ItemListDataService.findPriceASC()
                    .then(response => {
                        this.areas = response.data
                    })
                    //    실패하면 catch로 에러메세지가 들어옴
                    .catch( e => {
                        alert(e);
                    })
            }
            console.log("filter : " + filter)

        },
        // 선택 지역 외 지역 전체보여주는 메소드
        etc() {
            // axios로 spring에 모든 지역 조회 요청
            ItemListDataService.findByAreaEtc()
                // 성공하면 then으로 서버(spring) 데이터(response.data)가 들어옴
                .then(response => {
                    this.areas = response.data;
                })
                //    실패하면 catch로 에러메세지가 들어옴
                .catch( e => {
                    alert(e);
                })
        },
        // 상품클릭시 idx값으로 해당 상품페이지로 이동
        // ItemDetail(idx) {
        //     console.log("idx :" + idx)
        //     return this.$router.push("/tourItemDetails/"+idx)
        // }
    },
    filters: {
        numberFormat: (value, numFix) => {
            value = parseFloat(value);
            if (!value) return '0';
            return value.toFixed(numFix).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
        },
    },
//    화면이 뜨자마자 실행되는 이벤트 (모든 지역조회가 실행됨)
    mounted() {
        this.retrieveAreas();
    },
    computed: {

    }
};
</script>

<style scoped>
/*.carousel-inner {*/
/*    background-image: url("@/assets/img/ItemListImage/trip14.jpg");*/
/*}*/
.main-container {
    margin: 0 auto;
    /* padding: 0 19%; */
}
.badge {
    background-color: #a30000 !important;
}

.btn {
    background-color: #E5E5E5;
    color: #000000;
    border: none;
}
.btn:hover {
    background-color: #a30000;
    color: #ffffff;
}
.btn.on {
    background-color: #a30000;
    color: #ffffff;
}
.button-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-width: 500px;
    gap: 1.5rem;
}
.divider {
    width: 1px;
    height: 30px;
    background: #454545;
    margin: 0 20px;
}
.area-title {
    font-weight: bold;
}
.area-btn {
    margin-right: 35px;
    font-size: 14px;
    border-radius: 30px 30px;
}
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
hr{
    border: 0.5px solid black;
}

/* 공통 끝 */

/* item card */

a.btn-link {
    float: left;
}

.bg-c1 {
    background-color: #A30000;
}

a {
    color: black;
}

.card {
    /*width: 222px;*/
}

.item-card {
    /*width: 191px;*/
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

ul {
    padding: 0;
    display: table;
    margin-left: auto;
    margin-right: auto;
}


.divider-row {
    width: 1200px;
    height: 2px;
    background: #959595;
}

.pagination-custom {
    margin-top: 80px;
    border-bottom: none;
}

.page-item {
    --bs-pagination-color: #494949;
    --bs-pagination-hover-color: #A30000;
}

.page-link.active {
    background-color: #A30000;
    border-color: #A30000;
}

.container {
    margin-top: 50px;
}

.page-title {
    text-align: center;
    width: 150px;
    padding-bottom: 10px;
    margin: 0 auto;
    margin-bottom: 80px;
}

th {
    font-weight: 400;
    border-top: 2px solid #959595;
    padding: 15px 10px;
}

tbody {
    font-weight: 300;
    font-size: 16px;
}

td {
    padding: 12px 10px;
}

/* table {
    text-align: center;
} */
.board-searchbar {
    margin-left: auto;
    margin-bottom: 10px;
    width: 300px;
    position: relative;
}

.form-control:focus {
    border-color: lightgray !important;
    box-shadow: none !important;
}

input::placeholder {
    color: #dfdfdf;
    font-weight: 400;
    font-size: 14px;
}
</style>
