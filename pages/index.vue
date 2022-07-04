<template>
    <div id="app">
        <div class="container">
            <div class="row top">
                <!-- select 창 -->
                <div class="select-pick col-md-3">
                    <!-- 목적지 -->
                    <!-- Button trigger modal -->
                    <!-- <div class="d-grid gap-2">
                        <button
                            type="button"
                            class="btn btn-light sbox"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            어디로 떠나세요?
                        </button>
                    </div> -->
                    <!-- Modal -->
                    <!-- <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                        style="margin-left: 5px"
                                    >
                                        목적지
                                    </h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col mb-content">
                                            <a href="#">서울</a>
                                        </div>
                                        <div class="col">
                                            <a href="#">양양</a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col mb-content">
                                            <a href="#">강릉</a>
                                        </div>
                                        <div class="col">
                                            <a href="#">경주</a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col mb-content">
                                            <a href="#">부산</a>
                                        </div>
                                        <div class="col">
                                            <a href="#">통영</a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div
                                            class="col"
                                            style="padding: 0 0 0 24px"
                                        >
                                            <a href="#">포항</a>
                                        </div>
                                        <div class="col">
                                            <a href="#">제주도</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div>
                        <input type="text" class="col-md-12 area-search" placeholder="어디로 떠날까요?">
                    </div>

                    <!-- 출발 위치 -->
                    <div>
                        <!-- <div class="spt">출발 위치</div> -->
                        <select
                            class="form-select area-select"
                            aria-label="Default select example"
                        >
                            <option selected>출발지역</option>
                            <option value="1">서울</option>
                            <option value="2">양양</option>
                            <option value="3">대구</option>
                            <option value="4">여수</option>
                        </select>
                    </div>

                    <!-- TODO: input 앞에 아이콘? -->
                    <!-- 날짜 -->
                    <div>
                        <!-- <div class="spt">날짜</div> -->
                        <input
                            type="text"
                            maxlength="10"
                            value=""
                            class="datepicker col-md-12 date-input"
                            placeholder="여행시작일 선택"
                        />
                    </div>

                    <hr class="select-line"/>

                    <!-- 버튼 -->
                    <div class="d-grid gap-2">
                        <button type="button" class="btn btn-primary search-btn">
                            검색
                        </button>
                    </div>
                </div>
                <!-- select창 끝 -->

                <!-- 배너 -->
                <div
                    id="carouselExampleFade"
                    class="carousel slide carousel-fade col-md-9"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-inner">
                        <div
                            class="carousel-item active"
                            data-bs-interval="4000"
                        >
                            <img
                                src="@/assets/img/main/yunlin.jpg"
                                class="d-block w-100"
                                style="height: 350px"
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img
                                src="@/assets/img/main/jusang.jpg"
                                class="d-block w-100"
                                style="height: 350px"
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img
                                src="@/assets/img/main/scenery.jpg"
                                class="d-block w-100"
                                style="height: 350px"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <!-- 배너 끝 -->
            </div>
        </div>

        <!-- 본문 시작 -->
        <div class="container">
            <div class="small-title">급상승 여행지</div>
            <div class="jump">
                <!-- #1 -->
                <div class="card">
                    <!-- 이미지 비율 -->
                    <div class="ratio ratio-4x3">
                        <img
                            src="@/assets/img/main/scenery.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                        <!-- style="height: 130px; width: 180px" -->
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">content</p>
                        <div class="position-relative">
                            <!-- 수평 정렬 더 좋은 방법? -->
                            <!-- <span class="badge rounded-pill bg-light text-dark">서울</span>
                            <span href="#" class="badge bg-dark">Go</span> -->
                            <div class="badge rounded-pill bg-light text-dark">
                                경주
                            </div>
                            <div class="position-absolute bottom-0 end-0">
                                200,000
                            </div>
                        </div>
                    </div>
                </div>
                <!-- #2 -->
                <div class="card">
                    <div class="ratio ratio-4x3">
                        <img
                            src="@/assets/img/main/jusang.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">content</p>
                        <div class="position-relative">
                            <div class="badge rounded-pill bg-light text-dark">
                                경주
                            </div>
                            <div class="position-absolute bottom-0 end-0">
                                200,000
                            </div>
                        </div>
                    </div>
                </div>
                <!-- #3 -->
                <div class="card">
                    <div class="ratio ratio-4x3">
                        <img
                            src="@/assets/img/main/scenery.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">content</p>
                        <div class="position-relative">
                            <div class="badge rounded-pill bg-light text-dark">
                                경주
                            </div>
                            <div class="position-absolute bottom-0 end-0">
                                200,000
                            </div>
                        </div>
                    </div>
                </div>
                <!-- #4 -->
                <div class="card">
                    <div class="ratio ratio-4x3">
                        <img
                            src="@/assets/img/main/yunlin.jpg"
                            class="card-img-top"
                            alt="..."
                        />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">content</p>
                        <div class="position-relative">
                            <div class="badge rounded-pill bg-light text-dark">
                                경주
                            </div>
                            <div class="position-absolute bottom-0 end-0">
                                200,000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 본문 끝 -->

        <script>


            <!-- datepicker 시작 -->
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
export default {
    name: "IndexPage",
};

// TODO: 위치 왜 ?
// $(function () {
//     $(".datepicker").datepicker();
// });
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

/* select창 시작 */
.top {
    margin: 20px -12px 0 1px;
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

.select-pick {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* margin: 12px 0 12px 0; */
    border: 1px solid #a30000;
}

.modal {
    --bs-modal-header-border-color: #a30000;
}
.modal-body {
    font-size: 18px;
}

.mb-content {
    padding: 0 0 15px 24px;
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

.search-btn {
    /* font-size: 20px; */
    font-weight: 400;
    color: white;
    height: 45px;
    background: #a30000;
    border: #a30000;
    border-radius: 0.25em;
}

.search-btn:hover {
        color: white;
    background: #a30000;
    border: #a30000;
    border-radius: 0.25em;
}

/* select창 끝 */

/* 본문 시작 */
.card {
    min-width: 222px;
}

.small-title {
    font-size: 20px;
    padding: 30px 0 10px 15px;
}

.jump {
    display: flex;
    justify-content: space-between;
}

.jump-img {
    width: 180px;
    height: 130px;
}

.badge {
    background-color: #a30000 !important;
}

.text-dark {
    color: white !important;
}
/* 본문 끝 */

/* datepicker 시작 */
.ui-widget-header {
    border: 0px solid #dddddd;
    background: #fff;
}

.ui-datepicker-calendar > thead > tr > th {
    font-size: 14px !important;
}

.ui-datepicker .ui-datepicker-header {
    position: relative;
    padding: 10px 0;
}

.ui-state-default,
.ui-widget-content .ui-state-default,
.ui-widget-header .ui-state-default,
.ui-button,
html .ui-button.ui-state-disabled:hover,
html .ui-button.ui-state-disabled:active {
    border: 0px solid #c5c5c5;
    background-color: transparent;
    font-weight: normal;
    color: #454545;
    text-align: center;
}

.ui-datepicker .ui-datepicker-title {
    margin: 0 0em;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    padding: 0px;
    font-weight: bold;
}

.ui-datepicker {
    display: none;
    background-color: #fff;
    border-radius: 4px;
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 20px;
    padding-bottom: 10px;
    width: 300px;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.1);
}

.ui-widget.ui-widget-content {
    border: 1px solid #eee;
}

#datepicker:focus > .ui-datepicker {
    display: block;
}

.ui-datepicker-prev,
.ui-datepicker-next {
    cursor: pointer;
}

.ui-datepicker-next {
    float: right;
}

.ui-state-disabled {
    cursor: auto;
    color: hsla(0, 0%, 80%, 1);
}

.ui-datepicker-title {
    text-align: center;
    padding: 10px;
    font-weight: 100;
    font-size: 20px;
}

.ui-datepicker-calendar {
    width: 100%;
}

.ui-datepicker-calendar > thead > tr > th {
    padding: 5px;
    font-size: 20px;
    font-weight: 400;
}

.ui-datepicker-calendar > tbody > tr > td > a {
    color: #000;
    font-size: 12px !important;
    font-weight: bold !important;
    text-decoration: none;
}

.ui-datepicker-calendar > tbody > tr > .ui-state-disabled:hover {
    cursor: auto;
    background-color: #fff;
}

.ui-datepicker-calendar > tbody > tr > td {
    border-radius: 100%;
    width: 44px;
    height: 30px;
    cursor: pointer;
    padding: 5px;
    font-weight: 100;
    text-align: center;
    font-size: 12px;
}

.ui-datepicker-calendar > tbody > tr > td:hover {
    background-color: transparent;
    opacity: 0.6;
}

.ui-state-hover,
.ui-widget-content .ui-state-hover,
.ui-widget-header .ui-state-hover,
.ui-state-focus,
.ui-widget-content .ui-state-focus,
.ui-widget-header .ui-state-focus,
.ui-button:hover,
.ui-button:focus {
    border: 0px solid #cccccc;
    background-color: transparent;
    font-weight: normal;
    color: #2b2b2b;
}

.ui-widget-header .ui-icon {
    background-image: url("@/assets/img/main/btns.png");
}

.ui-icon-circle-triangle-e {
    background-position: -20px 0px;
    background-size: 36px;
}

.ui-icon-circle-triangle-w {
    background-position: -0px -0px;
    background-size: 36px;
}

.ui-datepicker-calendar > tbody > tr > td:first-child a {
    color: red !important;
}

.ui-datepicker-calendar > tbody > tr > td:last-child a {
    color: #0099ff !important;
}

.ui-datepicker-calendar > thead > tr > th:first-child {
    color: red !important;
}

.ui-datepicker-calendar > thead > tr > th:last-child {
    color: #0099ff !important;
}

.ui-state-highlight,
.ui-widget-content .ui-state-highlight,
.ui-widget-header .ui-state-highlight {
    border: 0px;
    background: #f1f1f1;
    border-radius: 50%;
    /* padding-top: 10px;
  padding-bottom: 10px; */
}

.inp {
    padding: 10px 10px;
    background-color: #f1f1f1;
    border-radius: 4px;
    border: 0px;
}

.inp:focus {
    outline: none;
    background-color: #eee;
}
/* datepicker 끝 */
</style>
