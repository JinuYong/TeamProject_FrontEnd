<template>
    <div id="app">
        <div class="select">
            <div class="select-pick">
                <div>
                    <ul>
                        <!-- <li>목적지</li> -->
                        <br />
                        <!-- Button trigger modal -->
                        <div class="d-grid gap-2">
                            <button
                                type="button"
                                class="btn btn-outline-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                어디로 떠나세요?
                            </button>
                        </div>
                        <!-- Modal -->
                        <div
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
                                    <div class="modal-body">...</div>
                                    <div class="modal-footer">
                                        <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <li>출발 위치</li>
                        <select
                            class="form-select"
                            aria-label="Default select example"
                        >
                            <option selected>지역</option>
                            <option value="1">서울</option>
                            <option value="2">양양</option>
                            <option value="3">대구</option>
                            <option value="4">여수</option>
                        </select>
                        <br />
                        <li>출발 날짜</li>
                        <input
                            type="text"
                            size="15"
                            maxlength="10"
                            value=""
                            class="datepicker"
                        />
                    </ul>
                </div>
                <br />
                <div>
                    <ul>
                        <li>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-success">
                                    검색
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 배너 -->
            <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img
                            src="@/assets/img/main/canola.jpg"
                            class="d-block w-100"
                            style="height: 380px; width: 250px"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img
                            src="@/assets/img/main/jusang.jpg"
                            class="d-block w-100"
                            style="height: 380px; width: 250px"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="@/assets/img/main/scenery.jpg"
                            class="d-block w-100"
                            style="height: 380px; width: 300px"
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
        </div>

        <div>
            <div class="small-title">급상승 여행지</div>
            <div class="jump">
                <!-- #1 -->
                <div class="card">
                    <!-- 이미지 비율 -->
                    <!-- <div class="ratio ratio-4x3"> -->
                    <img
                        src="@/assets/img/main/canola.jpg"
                        class="card-img-top"
                        style="height: 130px; width: 180px"
                        alt="..."
                    />
                    <!-- </div> -->
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">content</p>
                        <div class="position-relative">
                            <!-- 수평 정렬 더 좋은 방법? -->
                            <!-- <span class="badge rounded-pill bg-light text-dark">서울</span>
                            <span href="#" class="badge bg-dark">Go</span> -->
                            <div class="badge rounded-pill bg-light text-dark">
                                서울
                            </div>
                            <div
                                class="position-absolute bottom-0 end-0 badge bg-dark"
                            >
                                Price
                            </div>
                        </div>
                    </div>
                </div>
                <!-- #2 -->
                <div class="card">
                    <!-- <div class="ratio ratio-4x3"> -->
                    <img
                        src="@/assets/img/main/jusang.jpg"
                        class="card-img-top"
                        style="height: 130px; width: 180px"
                        alt="..."
                    />
                    <!-- </div> -->
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">content</p>
                        <div class="position-relative">
                            <div class="badge rounded-pill bg-light text-dark">
                                서울
                            </div>
                            <div
                                class="position-absolute bottom-0 end-0 badge bg-dark"
                            >
                                Sale Price
                            </div>
                        </div>
                    </div>
                </div>
                <!-- #3 -->
                <div class="card">
                    <!-- <div class="ratio ratio-4x3"> -->
                    <img
                        src="@/assets/img/main/scenery.jpg"
                        class="card-img-top"
                        style="height: 130px; width: 180px"
                        alt="..."
                    />
                    <!-- </div> -->
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">content</p>
                        <div class="position-relative">
                            <div class="badge rounded-pill bg-light text-dark">
                                서울
                            </div>
                            <div
                                class="position-absolute bottom-0 end-0 badge bg-dark"
                            >
                                Sale Price
                            </div>
                        </div>
                    </div>
                </div>
                <!-- #4 -->
                <div class="card">
                    <!-- <div class="ratio ratio-4x3"> -->
                    <img
                        src="@/assets/img/main/yunlin.jpg"
                        class="card-img-top"
                        style="height: 130px; width: 180px"
                        alt="..."
                    />
                    <!-- </div> -->
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">content</p>
                        <div class="position-relative">
                            <div class="badge rounded-pill bg-light text-dark">
                                서울
                            </div>
                            <div
                                class="position-absolute bottom-0 end-0 badge bg-dark"
                            >
                                Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <router-view />
    </div>
</template>

<script>
export default {
    name: "IndexPage",
};

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
</script>

<style>
ul,
li {
    list-style: none;
}

a {
    text-decoration: none;
}

/* .select {
  display: flex;
  justify-content: flex-start;
  border: 1px solid black;
} */

/* .select-pick {
  width: 180px;
  border: 1px solid black;
} */

.small-title {
    font-size: 20px;
    padding: 30px 0 10px 25px;
}
.jump {
    display: flex;
    justify-content: space-around;
}

.jump-img {
    width: 180px;
    height: 130px;
}

/* datepicker 디자인 시작 */
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
/* datepicker 디자인 끝 */

</style>
