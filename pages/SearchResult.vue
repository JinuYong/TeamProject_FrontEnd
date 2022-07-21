<template>
    <div class="">
        <div>
            <div class="row">
                <div class="col-md h4 p-3 text-center" id="search-title">
                    검색 결과
                </div>
            </div>
            <hr>
            <div>
                <small>
                    <span><strong>결과</strong> : 총 {{ count }}건 /</span>
                    <span><strong>검색내용</strong> : {{ this.$route.query.keyword }}</span>
                </small>
                <small class="page-select float-right">
                    표시 개수 :
                    <select v-model="pageSize" @change="handlePageSizeChange($event)">
                        <!-- pageSizes : [3,6,9] -->
                        <option v-for="size in pageSizes" :key="size" :value="size">
                            {{ size }}
                        </option>
                    </select>
                </small>
            </div>
            <div class="row text-center">
                <div class="col-md-3 p-3 justify-content-center" v-for="item in items">
                    <router-link :to="'/tourItemDetails/'+ item.idx">
                        <div class="card item-card">
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
                            <div class="card-body test p-3">
                                <div class="text-left ">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">{{ item.title }}</h5>
                                    <p class="fw">{{ item.content }}</p>
                                </div>
                                <div class="text-right line">
                                    <div class="card-body-content">
                                        <ul class="card-ul" style="float: left; margin: 0">
                                            <li>&nbsp;</li>
                                            <li>
                                                <p class="badge rounded-pill bg-c1 m-0">{{ item.area }}</p>
                                            </li>
                                        </ul>
                                        <!-- Product price-->
                                        <ul class="card-ul" style="float: right; margin: 0; padding: 0">
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
                        </div>
                    </router-link>
                </div>
                <div class="col-md text-center p-5"
                    :class="{searchShow:searchShowResult}">
                    검색내용에 맞는 상품이 없습니다.
                </div>
            </div>
            <hr>
        </div>

        <!-- TODO: PAGE 바 시작 -->
        <div class="col-md-12">

            <!-- page : 현재페이지, count : 총데이터건수 -->
            <!-- pageSize : 1페이지당 개수(건수) -->
            <a href="#search-title">
            <b-pagination
                class="pagination pagination-sm justify-content-center"
                v-model="page"
                :total-rows="count"
                :per-page="pageSize"
                prev-text="‹"
                next-text="›"
                @change="handlePageChange"
            ></b-pagination></a>
        </div>
        <!-- TODO: PAGE 바 끝 -->
    </div>
</template>
<script>
import ItemDetailDataService from "~/pages/service/ItemDetailDataService";

export default {
    name: 'searchResult',
    data() {
        return {
            show: true,
            items: [],
            areaValue: this.$route.query.area,
            selectShow: true,
            searchArea: this.$route.query.area,
            searchDate: this.$route.query.date,

            searchKeyword: this.$route.query.keyword,
            // Todo: 아래 변수 추가
            page: 1,
            count: 0,
            pageSize: 8,

            pageSizes: [8, 16, 24],
            searchShowResult: true
        };
    },
    methods: {
        // Todo: getRequestParams 추가
        // 역할 : springboot로 매개변수들(parameter) 전송
        // 웹 매개변수 : http://localhost:8080/customers?page=1&size=3
        getRequestParams(searchKeyword, page, pageSize) {
            let params = {};

            // searchEmail값이 있으면 매개변수로 전송
            if (searchKeyword) {
                params["keyword"] = searchKeyword;
            }

            if (page) {
                params["page"] = page - 1;
            }

            if (pageSize) {
                params["size"] = pageSize;
            }

            // 3개가 다 들어왔다면 아래 형태로 springboot로 전송
            // params {
            //  "keyword":"여수",
            //  "page":0,
            //  "size":3
            // }
            return params;
        },
        retrieveCustomers() {
            // Todo: getRequestParams 호출 추가
            const params = this.getRequestParams(
                this.searchKeyword,
                this.page,
                this.pageSize
            );

            // Todo: getAll() -> getAll(params)
            // axios로 spring에 모든 회원 조회 요청
            ItemDetailDataService.getSearchData(params)
                //  성공하면 then으로 서버(spring) 데이터(response.data)가 들어옴
                // Todo: 아래 수정
                .then((response) => {
                    console.log("res = ",response);
                    if (response.data == "") {
                        this.searchShowResult = false;
                    } else {
                        // this.customers = response.data;
                        const { items, totalItems } = response.data;
                        // springboot 받은 객체 정보
                        this.items = items;
                        // springboot에서 받은 총 데이터 건수
                        this.count = totalItems;
                        console.log(this.items)
                    }
                })
                //  실패하면 catch로 에러메세지가 들어옴
                .catch((e) => {
                    alert(e);
                });
        },
        // Todo: 신규 메소드 2개 추가
        // 현재page를 다른 페이지번호로 변경시 호출되는 메소드
        handlePageChange(value) {
            // 현재페이지 변경
            this.page = value;
            // 재 조회
            this.retrieveCustomers();
        },
        // 페이지사이즈() 변경시 호출되는 메소드
        handlePageSizeChange(event) {
            this.pageSize = event.target.value; // select박스의 값
            this.page = 1;
            // 재 조회
            this.retrieveCustomers();
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
        // this.getSearchData(this.$route.query.keyword);
        this.retrieveCustomers();
        console.log(this.$route.query.keyword);
    }
}
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
hr{
    border: 0.5px solid black;
}

/* 공통 끝 */

/* item card */
.badge {
    background-color: #a30000 !important;
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

.card-ul {
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
.searchShow {
    display: none;
}

/* paging */
.page-select {
    float: right;
    z-index: 3;
}
.card-image {
    height: 206px;
}

</style>
